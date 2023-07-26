import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "./Button";
import {
  genArray,
  bubbleSort,
  insertionSort,
  quickSort,
  selectionSort,
} from "./Visualizer";
import "../CSS/Footer.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Footer = ({ setArray, array, swappingIndexes, setIndexes }) => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col
            sm={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Button
              onClickFunction={() => {
                setArray(genArray());
              }}
            ></Button>
          </Col>
          <Col sm={4}></Col>
          <Col
            sm={6}
            className="d-flex align-items-center justify-content-evenly"
          >
            <Button
              onClickFunction={() => {
                console.log(array);
                bubbleSort(setArray, [...array], setIndexes); //spread operator, creates copy of array
              }}
            ></Button>
            <Button
              onClickFunction={() => {
                insertionSort(setArray, [...array], setIndexes);
              }}
            ></Button>
            <Button
              onClickFunction={() => {
                selectionSort(array);
              }}
            ></Button>
            <Button
              onClickFunction={() => {
                quickSort(array);
              }}
            ></Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
