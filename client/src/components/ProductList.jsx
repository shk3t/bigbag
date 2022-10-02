import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import Paginator from "../components/Paginator";
import { listProductsAction } from "../reducers/productListReducer";
import { store } from "../store";

export default function ProductList() {
  const [searchParams] = useSearchParams();
  const products = useSelector((state) => state.productListReducer.products);
  const type = searchParams.get("type");

  return (
    <div className="catalog-item__wrap ">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      <Paginator
        key={type}
        fetchCallback={async (page) => {
          await store.dispatch(
            listProductsAction({ type, page }, page !== 1)
          );
        }}
      />
    </div>
  );
}
