import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ScrollToTop from "./components/ScrollToTop";
import DocumentTitle from "./components/DocumentTitle";
import AppModals from "./components/Modal/AppModals";
import Header from "./components/Header";
import "./styles/main.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DocumentTitle />
      <Header />
      <AppRouter />
      <AppModals />
    </BrowserRouter>
  );
}
