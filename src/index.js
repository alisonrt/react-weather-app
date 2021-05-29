import React from "react";
import ReactDOM from "react-dom";
import search from "./search";


import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <search />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
