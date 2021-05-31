import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";
import Forecast from "./forecast";
import 'bootstrap/dist/css/bootstrap.css';


import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <div>
          <Search />
        </div>
      <Forecast />
      <br />
       <div class="bottomLine">
        <a href="https://github.com/alisonrt/react-weather-app" alt="GitHub link">Open-source code</a> by <a href="google.com" alt="profile link">Alison Trott</a>
      </div>
      </div>
     
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
