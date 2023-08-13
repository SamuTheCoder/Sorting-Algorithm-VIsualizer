import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Visualizer, {
  genArray,
  insertionSort,
  selectionSort,
  bubbleSort,
} from "./Components/Visualizer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";

function App() {
  const [array, setArray] = useState(genArray());
  const [swappingIndexes, setIndexes] = useState([]);
  const [isSorting, setSorting] = useState(false);

  return (
    <div className="app-wrapper">
      <Header></Header>
      <div className="content-wrapper">
        <Container className="align-self-end">
          <Visualizer
            className="align-self-end"
            setArray={setArray}
            array={array}
            swappingIndexes={swappingIndexes}
            setIndexes={setIndexes}
          ></Visualizer>
        </Container>
      </div>
      <Footer
        setArray={setArray}
        array={array}
        swappingIndexes={swappingIndexes}
        setIndexes={setIndexes}
        isSorting={isSorting}
        setSorting={setSorting}
      ></Footer>
    </div>
  );
}

export default App;
