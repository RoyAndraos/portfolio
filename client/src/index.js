import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TransitionProvider } from "./components/contexts/TransitionContext";
import { ThemeProvider } from "./components/contexts/ColorTheme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TransitionProvider>
    <ThemeProvider>
      <BrowserRouter>
        <App>{Children}</App>
      </BrowserRouter>
    </ThemeProvider>
  </TransitionProvider>
);
