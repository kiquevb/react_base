import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./i18n.js";
import { QueryWrapper, ThemeWrapper } from "@/wrappers/wrappers.exports";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryWrapper>
      <BrowserRouter>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </BrowserRouter>
    </QueryWrapper>
  </React.StrictMode>
);
