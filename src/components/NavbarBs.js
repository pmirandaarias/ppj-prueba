import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const NavbarBs = (props) => {
  const {cartQuantity, showPanelCart} = props;

  const handleClickCart = () => {
    showPanelCart();
  }

  return(
    <Navbar sticky="top" expand="sm" className="green-back">
      <Navbar.Brand className="custom-brand-name">E-commerce (p)</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className="link-text">Listado de productos</Link>
          <Link to="/cart" className="link-text">Ver Carro</Link>
          <Nav.Link>
            <i className="material-icons cart-icon" onClick={() => handleClickCart()}>shopping_cart</i>
            { cartQuantity > 0  && <span className="cart-number">{cartQuantity}</span>}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavbarBs;
