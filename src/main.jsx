import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom"; // ⬅ Change BrowserRouter to HashRouter
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
