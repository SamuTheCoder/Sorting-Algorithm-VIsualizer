import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "./Button";
import "../CSS/Footer.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col
            sm={2}
            className="d-flex align-items-center justify-content-center"
          >
            {" "}
            <Button></Button>
          </Col>
          <Col sm={4}></Col>
          <Col
            sm={6}
            className="d-flex align-items-center justify-content-evenly"
          >
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
