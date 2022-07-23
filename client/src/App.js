import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import ProductPage from "./pages/ProductPage";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
