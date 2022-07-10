import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import HttpsRedirect from "react-https-redirect";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HttpsRedirect>
    <App />
  </HttpsRedirect>
);
