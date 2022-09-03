import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

import ProductItem from "../components/ProductItem";
import ProductFilter from "../components/ProductFilter";
import { listProductsAction } from "../reducers/productListReducer";

export default function ProductList() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productListReducer.products);

  useEffect(() => {
    const type = searchParams.get("type");
    dispatch(listProductsAction({ type }));
  }, [searchParams]);

  return (
    <div className="catalog-item__wrap ">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}