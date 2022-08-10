import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Way from "../components/Way";
import ProductItem from "../components/ProductItem";
import { listProductsAction } from "../reducers/productListReducer";
// import ProductService from "../API/ProductService";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productListReducer);

  useEffect(() => {
    dispatch(listProductsAction());
  }, []);

  // Если еще раз захочешь осмыслить, как обрабатываются данные на фронте,
  // то глянь историю коммитов
  //
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  //
  // const [products, setProducts] = useState([]);
  //
  // async function fetchProducts() {
  //   // Нам не нужен фейк, потому что есть свои данные,
  //   // хватаем из ...:8000/api/products:
  //   // proxy из package.json + строка в axios.get() (УПП)
  //   const products = await ProductService.getAllProducts();
  //   // Посмотри в консоли браузера, что возвращает сервер
  //   console.log(products); // (УПП)
  //   setProducts(products);
  // }

  return (
    <div className="root-div">
      <Header />
      <Way />

      <div className="find-string">
        <p>Поиск</p>
      </div>
      <div className="catalog__in-catalog-page">
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
