import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
