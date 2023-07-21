import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Visualizer from "./Components/Visualizer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <div className="content-wrapper">
        <Visualizer></Visualizer>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
