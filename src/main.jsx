import React from "react";
import ReactDOM from "react-dom/client";
//import ReactTilt from "/node_modules/.vite/deps/react-tilt.js?v=769179a1";
//import Tilt from "react-parallax-tilt";
import App from "./App";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
