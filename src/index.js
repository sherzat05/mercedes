import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import CarContext from "./context/CarContext";
import Home from "./components/Home/Home";
import AuthContext from "./routes/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <CarContext>
      <BrowserRouter>
        <App />
        <MainRoutes />
      </BrowserRouter>
    </CarContext>
  </AuthContext>
);
