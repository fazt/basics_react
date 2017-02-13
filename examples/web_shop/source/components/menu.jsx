import React from 'react';
import { Nav, NavItem, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = React.createClass({
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">My webshop</Link>
            {/* <Link to="/">brand={<span class="logo"><img src="http://placehold.it/100/30/" height="30" width="100" alt="My webshop" /></span>}</Link> */}
          </Navbar.Brand>
          <Navbar.toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer eventKey={1} to="/company">
              <Button bsStyle="link">
                About
              </Button>
            </LinkContainer>
            <LinkContainer eventKey={2} to="/products">
              Products
            </LinkContainer>
          </Nav>
          <Nav.PullRight>
            <LinkContainer to="/checkout">
              <Button bsStyle="link">
                Your cart: {this.props.cart.length} items
              </Button>
            </LinkContainer>
          </Nav.PullRight>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Menu;
