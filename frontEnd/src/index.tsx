import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./Fonts/SFPRODISPLAYREGULAR.OTF";
import ReactDOM from "react-dom/client";
import Rotas from "./Page/rotas";
import React from "react";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
