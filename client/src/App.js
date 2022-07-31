import React from "react";
import { BrowserRouter } from "react-router-dom";
// почему, если закомментить вот это, то отваливаются стили компонента way
// import ProductPage from "./pages/ProductPage";
// import MainPage from "./pages/MainPage";
// import CatalogPage from "./pages/CatalogPage";
// import AboutUsPage from "./pages/AboutUsPage";
// import DeliveryPage from "./pages/DeliveryPage";
// import MyCartPage from "./pages/MyCartPage";
import AppRouter from "./components/AppRouter";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}
