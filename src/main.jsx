import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

/* Solo subset latino → evita cargar el subset devanagari (~250 KB). */
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/poppins/latin-800.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
