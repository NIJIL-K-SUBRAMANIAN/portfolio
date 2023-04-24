import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor() {
    super();
    this.state={
      
    }
  }

  render() {

    return (
      <Navbar  bg="dark" expand="lg" className="navbar-hide-on-scroll scrollHide">
        <Container>
          <Navbar.Brand className="text-white" href="">
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle
            className="border border-light"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="text-white nav-link" to="/home">
                Home
              </Link>

              

              <Link className="text-white nav-link" to="/movieclub">
               Movie-club
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
