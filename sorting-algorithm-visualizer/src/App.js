import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Visualizer from "./Components/Visualizer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <div className="content-wrapper">
        <Container className="align-self-end">
          <Visualizer className="align-self-end"></Visualizer>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
