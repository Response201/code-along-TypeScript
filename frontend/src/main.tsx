import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import "./index.css"

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element hittades inte");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);