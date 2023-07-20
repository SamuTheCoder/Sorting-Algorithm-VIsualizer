import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <div className="content-wrapper"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
