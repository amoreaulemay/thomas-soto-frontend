import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";
import Home from "./views/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar />
        <Home />
    </React.StrictMode>
);
