import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/main.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}
