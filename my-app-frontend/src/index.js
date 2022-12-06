import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
// import AppContextProvider from "./AppContext";
// Bootstrap CSS
//import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
//import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <BrowserRouter>
  
    <App />
   
  </BrowserRouter>,
  document.getElementById("root")
);
