import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { TokenProvider } from "./components/TokenContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TokenProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TokenProvider>
  </BrowserRouter>
);
