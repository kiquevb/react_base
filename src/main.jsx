import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./i18n.js";
import {
  ReduxWrapper,
  QueryWrapper,
  ThemeWrapper,
} from "@/wrappers/wrappers.exports";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxWrapper>
      <QueryWrapper>
        <BrowserRouter>
          <ThemeWrapper>
            <App />
          </ThemeWrapper>
        </BrowserRouter>
      </QueryWrapper>
    </ReduxWrapper>
  </React.StrictMode>
);
