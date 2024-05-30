import React from "react";
import "./Navbar.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Login from "../../formlogin/formlogin";

function NavbarCom() {
  return (
    <Navbar expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="public\logo\logo-rehatin-w.png"
            width="120"
            className="d-inline-block align-top"
            alt="Rehatin logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 mx-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <ul className="d-flex pt-3 list-unstyled ">
              <li className="me-4 ">
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="me-4">
                <NavLink
                  to={"/aboutUs"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="me-4">
                <NavLink
                  to={"/wishlist"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Wishlist
                </NavLink>
              </li>
              <li className="me-4">
                <NavLink
                  to={"/blog"}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </Nav>
          <div>
            <Login/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCom;
