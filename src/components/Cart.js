import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeItemCart, addQuantityCart, subtractQuantityCart, addToCart} from './../actions/cart'
import { Col, Container, Row, Button, Card, Alert } from 'react-bootstrap'
import NumberFormat from 'react-number-format';

class Cart extends Component {

  handleRemove = (id, price) => {
    const {removeItemCart} = this.props;
    removeItemCart(id, price);
  };

  handleAddQuantity = (id, price) => {
    const {addQuantityCart} = this.props;
    addQuantityCart(id, price);
  };

  handleSubtractQuantity = (id, price) => {
    const {subtractQuantityCart} = this.props;
    subtractQuantityCart(id, price);
  };

  render() {
    const {total, items} = this.props;
    let addedItems = items.length ?
      (
        items.map(item => {
          const idTail = item.tail;

          // Simulación del precio, a partir de data que viene en cada item
          const price =
            item.release.au ? parseInt(item.release.au.split('-')[2])*1000 + 10990 :
              item.release.eu ? parseInt(item.release.eu.split('-')[2])*1000 + 10990 :
                item.release.jp ? parseInt(item.release.jp.split('-')[2])*1000 + 10990 :
                  item.release.na ? parseInt(item.release.na.split('-')[2])*1000 + 10990 : 10990;
          return (

            <li className="collection-item cart-item" key={idTail}>
              <div>
                <img src={item.image} alt={item.name} className="img-item"/>
              </div>

              <div className="item-desc">
                <span className="title-cart-item"><strong>Título</strong>: {item.name}</span>
                <p>
                  <strong>Valor:</strong> <NumberFormat value={price} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'$'} />
                </p>
                <p><strong>Cantidad:</strong> {item.quantity}</p>
                <div className="add-remove">
                  <Link to="/cart"><i className="material-icons" onClick={() => {
                    this.handleAddQuantity(idTail, price)
                  }}>arrow_drop_up</i></Link>
                  <Link to="/cart"><i className="material-icons" onClick={() => {
                    this.handleSubtractQuantity(idTail, price)
                  }}>arrow_drop_down</i></Link>
                </div>
                <Button variant="primary" onClick={() => {
                  this.handleRemove(idTail, price)}}>Quitar
                  </Button>
              </div>
            </li>
          )
        })
      ) : (<Alert variant="info">El carro de compras está vacío.</Alert>);

    return (
      <Container>
        <Row>
          <Col>
            <h2>{addedItems && addedItems.length > 0 ? 'Productos agregados:' : ''}</h2>
            <ul className="collection">
              {addedItems}
            </ul>
          </Col>
          <Col>
            {addedItems && addedItems.length > 0 ? <div className="container">
              <Card>
                <Card.Header>Resumen del pedido</Card.Header>
                <Card.Body>
                  <Card.Title>TOTAL: <NumberFormat value={total} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'$'} /></Card.Title>
                  <Card.Text>
                    Revise el listado de productos, si todo es correcto:<br/>¡Proceda a su Checkout!
                  </Card.Text>
                  <Button variant="success">Checkout</Button>
                </Card.Body>
              </Card>
            </div>: <></>}
          </Col>
        </Row>
      </Container>

    )
  }
}


const mapStateToProps = state => ({
  items: state.addedItems,
  total: state.total
});

const mapDispatchToProps = {
  addToCart,
  removeItemCart,
  addQuantityCart,
  subtractQuantityCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
