import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setItemsList} from './actions/cart';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavbarBs from './components/NavbarBs'
import List from './components/List'
import Cart from './components/Cart'
import {API_URL} from "./utils/constants";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner, Container, Row, Col} from 'react-bootstrap'
import NumberFormat from "react-number-format";

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      loading: true,
      showPanel: false
    }
  }

  componentDidMount() {
    // Solo 1 vez llenaré el store con los datos de la API
    const { setItemsList } = this.props;


    fetch(API_URL)
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            data = JSON.parse(JSON.stringify(data));
            setItemsList(data.amiibo);
            this.setState({ loading: false})
          });
        } else console.log('error')
      })
      .catch(error =>
        console.log(error)
      );
  }


  handleShowPanelCart = () => {
    const {cartQuantity} = this.props;

    if (cartQuantity>0) {
      if (!this.state.showPanel) {
        this.setState({ showPanel: true})
      } else {
        this.setState({ showPanel: false})
      }
    } else {
      this.setState({ showPanel: false})
    }
  }

  render() {
    const { cartQuantity, items } = this.props;
    const { loading, showPanel } = this.state;

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
            <Row key={idTail} className="row-panel-cart">
              <Col>
                <img src={item.image} alt={item.name} className="img-item-panel"/>
              </Col>
              <Col>
                <span className="title-cart-item-panel"><strong>Título</strong>: {item.name}</span>
                <br/>
                <span className="title-cart-item-panel"><strong>Valor</strong>: <NumberFormat value={price} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'$'} /></span>
                <br/>
                <span className="title-cart-item-panel"><strong>Cantidad</strong>: {item.quantity}</span>
              </Col>
            </Row>
          )
        })
      ) : (<></>);


    return (
      <BrowserRouter>
        <div className="App">
          <NavbarBs cartQuantity={cartQuantity} showPanelCart={ () => this.handleShowPanelCart()}/>
          { showPanel && items.length && <div className="panel-cart-custom">
            <Row>
              <Col>
                <ul className="ul-panel">
                  {addedItems}
                </ul>
              </Col>
            </Row>
          </div>

          }
          { loading ?
            <Container>
              <Row>
                <Col>
                  <Spinner animation="border" variant="info" size="lg"/>
                </Col>
              </Row>
            </Container>
            :
            <Switch>
              <Route exact path="/" component={List}/>
              <Route path="/cart" component={Cart}/>
            </Switch>
          }
        </div>
      </BrowserRouter>

    );
  }
}

const mapStateToProps = state => ({
  items: state.addedItems,
  cartQuantity: state.cartQuantity
});

const mapDispatchToProps = {
  setItemsList
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
