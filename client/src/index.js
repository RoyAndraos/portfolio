import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TransitionProvider } from "./components/contexts/TransitionContext";
import { ThemeProvider } from "./components/contexts/ColorTheme";
import { CartProvider } from "./components/projects/eCommerce/CartContext";
import { UserProvider } from "./components/projects/eCommerce/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TransitionProvider>
    <ThemeProvider>
      <BrowserRouter>
        <CartProvider>
          <UserProvider>
            <App>{Children}</App>
          </UserProvider>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  </TransitionProvider>
);
