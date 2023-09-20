import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import Pages from "./pages/Pages";
import { DataProvider } from "./context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <ThemeProvider>
        <Header />
        <Pages />
      </ThemeProvider>
    </DataProvider>
  </React.StrictMode>
);
