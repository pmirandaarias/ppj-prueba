import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Col, Row} from 'react-bootstrap'
import {addToCart} from './../actions/cart';
import Items from './Items';

class List extends Component {

  render() {
    const {items, addToCart} = this.props;
    // Voy a enviar los datos y el action a Items, que es stateless, y solo renderiza cada item y su data

    return (
      <Container>
        <Row>
          <Col sm={{ span: 6, offset: 4}}>
            <h1 className="center">Listado de productos</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1}}>
            <div className="box">
              <Items items={items} addToCart={addToCart}/>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(List)
