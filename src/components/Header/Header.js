import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav>
          <Row>
            <Col md={2} sm={2} xs={12}>
              <h5 className="d-inline-block">
                <b>Learning World</b>
              </h5>
            </Col>
            <Col md={10} sm={10} xs={12}>
              <Link to="/home">Home</Link>
              <Link to="/Admin">Admin</Link>
              <Link to="/Orders">Orders</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login" className="login">
                Login
              </Link>
            </Col>
          </Row>
        </nav>
      </div>
    </>
  );
};

export default Header;
