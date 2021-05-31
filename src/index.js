// import dependencies
import React from "react";
import ReactDOM from "react-dom";

// import our custom components
import Search from "./components/Search";
import FiveDayForecast from "./components/FiveDayForecast";
import Footer from "./components/Footer";

// import our styles
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Search />
        <FiveDayForecast />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
