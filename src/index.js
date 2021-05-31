import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./forecast";
import 'bootstrap/dist/css/bootstrap.css';


import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <div>
          <a href="google.com" alt="lisbon weather">Lisbon</a>
          <a href="google.com" alt="paris weather">Paris</a>
          <a href="google.com" alt="sydney weather">Sydney</a>
          <a href="google.com" alt="san francisco weather">San Francisco</a>
        </div>
        <div>
          <Search />
        </div>
        <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="white"
        size={25}
        animate={true}
      />
      <Forecast />
      <br />
       <div class="bottomLine">
        <a href="google.com" alt="source code link">Open-source code</a>, by <a href="google.com" alt="profile link">Alison Trott</a>
      </div>
      </div>
     
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
