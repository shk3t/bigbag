import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Way from "../components/Way";
import ProductItem from "../components/ProductItem";
import Filter from "../components/Filter";
import { listProductsAction } from "../reducers/productListReducer";

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productListReducer);

  const [currentProduct, setCurrentProduct] = useState(products);

  // ПОЧЕМУ ЭТОТ МАССИВ СПЕРВА ПУСТОЙ, А ЗАТЕМ ОТРИСОВЫВАЕТСЯ СНОВА, УЖЕ ЗАПОЛНЕННЫЙ?
  console.log(products);

  const returnACategory = function (cat) {
    console.log(cat);

    if (cat === "all") {
      setCurrentProduct(products);
      console.log(products);
      return;
    }

    setCurrentProduct(products.filter((el) => el.type === cat));
  };

  useEffect(() => {
    const type = searchParams.get("type");
    dispatch(listProductsAction({ type }));
  }, []);

  return (
    <div className="root-div">
      <Header />
      <Way />

      {/* строка поиска пока не нужна */}
      {/* <div className="find-string">
        <p>Поиск</p>
      </div> */}
      <div className="catalog__aside-and-catalog">
        <div className="catalog__filter">
          <Filter returnACategory={returnACategory} />
        </div>
        <div className="catalog__in-catalog-page">
          <div className="catalog-item__wrap ">
            {currentProduct.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CatalogPage;
