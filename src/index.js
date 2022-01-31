import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { worker as MSWWorker } from "./services/mocks/browser";

// It's not recommended to include Mock Service Worker in production. Doing so may lead to a distorted experience for your users.
// https://mswjs.io/docs/getting-started/integrate/browser
MSWWorker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
