import React from 'react';

import { Nav, NavItem, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer, } from 'react-router-bootstrap';

const Menu = React.createClass({
  render: function () {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">My webshop</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/company">
              <NavItem eventKey={1} href="#">
                <Button bsStyle="link">Foo</Button>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/products">
              <NavItem eventKey={1} href="#">
                <Button bsStyle="link">Products</Button>
              </NavItem>
            </LinkContainer>
          </Nav>
        <Nav pullRight>
          <LinkContainer to="/checkout">
            <NavItem eventKey={1} href="#">
              <Button bsStyle="link">Your cart: 5 items</Button>
            </NavItem>
          </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Menu;
