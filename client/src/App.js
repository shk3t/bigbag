import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductPage from "./pages/ProductPage";
import MainPage from "./pages/MainPage";
import Catalog from "./pages/catalog";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
