import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../styles/product.css";
import { getProductAction } from "../reducers/productReducer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Way from "../components/Way";
import ProductOrder from "../components/ProductOrder";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(getProductAction(id));
  }, []);

  return (
    <div>
      <Header />
      <Way />
      <main>{product && <ProductOrder product={product} />}</main>
      <Footer />
    </div>
  );
}
