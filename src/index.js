import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PageProvider } from "./components/contexts/PageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageProvider>
        <App />
      </PageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
