import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";

/* 
{ BrowserRouter } uses browser history for navigation (For personal domains)
{ HashRouter } uses URL for navigation (For Github pages or sub domains)
*/
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
