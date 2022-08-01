import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Way from "../components/Way";
import ProductItem from "../components/ProductItem";
import { useState, useEffect } from "react";
import ProductService from "../API/ProductService";

// Везде заменил item на product, потому что так понятнее)) (Удалить После Прочтения)
const CatalogPage = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    // Нам не нужен фейк, потому что есть свои данные,
    // хватаем из ...:8000/api/products:
    // proxy из package.json + строка в axios.get() (УПП)
    const products = await ProductService.getAll();
    // Посмотри в консоли браузера, что возвращает сервер
    console.log(products);  // (УПП)
    setProducts(products);
  }

  // Удалил все что тут было: что-то связанное с image -
  // Потому что пути к нашим image содержатся уже в product.image,
  // Осталось их просто добавить в src={product.image} (УПП)

  return (
    <div className="root-div">
      <Header />
      <Way />

      <div className="find-string">Это строка поиска, будет компонентом</div>
      <div className="catalog catalog__in-catalog-page">
        <div className="catalog-item__wrap ">
          {products.map((product) => (
            <ProductItem
              //key ниже должен быть уникальным, чтобы react не ругался
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CatalogPage;
