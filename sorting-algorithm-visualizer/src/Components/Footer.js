import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Button from "react-bootstrap/Button";
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

const Footer = ({
  setArray,
  array,
  swappingIndexes,
  setIndexes,
  isSorting,
  setSorting,
}) => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={2} className="footer-cols">
            <Button
              style={{ border: "none" }}
              size="lg"
              onClick={() => {
                let barHeight = 0.58 * window.innerHeight;
                setArray(genArray(barHeight, isSorting, setSorting, array));
              }}
            >
              Generate Array
            </Button>
          </Col>
          <Col sm={4}></Col>
          <Col sm={6} className="footer-cols">
            <Button
              style={{ border: "none" }}
              onClick={() => {
                console.log(array);
                bubbleSort(
                  setArray,
                  [...array],
                  setIndexes,
                  isSorting,
                  setSorting
                ); //spread operator, creates copy of array
              }}
            >
              Bubble Sort
            </Button>
            <Button
              style={{ border: "none" }}
              onClick={() => {
                insertionSort(
                  setArray,
                  [...array],
                  setIndexes,
                  isSorting,
                  setSorting
                );
              }}
            >
              Insertion Sort
            </Button>
            <Button
              style={{ border: "none" }}
              onClick={() => {
                selectionSort(
                  setArray,
                  [...array],
                  setIndexes,
                  isSorting,
                  setSorting
                );
              }}
            >
              Selection Sort
            </Button>
            <Button
              style={{ border: "none" }}
              onClick={() => {
                quickSort(
                  [...array],
                  setIndexes,
                  setArray,
                  0,
                  array.length,
                  isSorting,
                  setSorting
                );
              }}
              disabled
            >
              Not Implemented
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
