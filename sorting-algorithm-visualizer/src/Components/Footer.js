import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Button from "./Button";
import '../CSS/Footer.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {
  return (
    <footer className="footer">
        <Row>
            <Col> <Button></Button></Col>
            <Col></Col>
            <Col></Col>
        </Row>

    </footer>
  );
};

export default Footer;
