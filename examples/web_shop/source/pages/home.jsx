import React from "react";
import { Grid, Row, Col, Jumbotron } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router';

const Home = React.createClass({
  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <h1>My Webshop!</h1>
              <p>
                Welcome to my webshop.
                This is a simple information
                unit where you can showcase
                your best products or
                tell a little about your webshop.
              </p>
              <p>
                <LinkContainer to="/products">
                  <Button bsStyle="primary"
                    to="/products">
                    View Products
                  </Button>
                </LinkContainer>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exporst = Home;
