import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { AppProvider } from "./context/activity_sidebar_context";
import { UserProvider } from "./context/user_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);
