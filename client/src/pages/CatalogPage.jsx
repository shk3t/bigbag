import React from "react";
import Footer from "../components/Footer";
import Way from "../components/Way";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";

export default function CatalogPage() {
  return (
    <div className="root-div">
      <Way />

      {/* строка поиска пока не нужна */}
      {/* <div className="find-string">
        <p>Поиск</p>
      </div> */}
      <div className="catalog__aside-and-catalog">
        <div className="catalog__filter">
          <ProductFilter />
        </div>
        <div className="catalog__in-catalog-page">
          <ProductList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
