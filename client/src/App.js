import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductPage from "./pages/ProductPage";
import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage";
import AboutUsPage from "./pages/AboutUsPage";
import DeliveryPage from "./pages/DeliveryPage";
import MyCartPage from "./pages/MyCartPage";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* путь константами */}
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/cart" element={<MyCartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
