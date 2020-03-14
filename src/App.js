import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setItemsList} from './actions/cart';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavbarBs from './components/NavbarBs'
import List from './components/List'
import Cart from './components/Cart'
import {API_URL} from "./utils/constants";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Container, Row, Col } from 'react-bootstrap'

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      loading: true
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
            console.log('data.amiibo', data.amiibo)
            setItemsList(data.amiibo);
            this.setState({ loading: false})
          });
        } else console.log('error')
      })
      .catch(error =>
        console.log(error)
      );
  }

  render() {
    const { cartQuantity } = this.props;
    const { loading } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <NavbarBs cartQuantity={cartQuantity}/>
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
