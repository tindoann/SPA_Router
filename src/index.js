import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";

// The individual "pages" of our app will be separate components that feed into the main component.

ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);

