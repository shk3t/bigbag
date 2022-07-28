import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductAction } from "../reducers/productReducer";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);
  useEffect(() => {
    dispatch(getProductAction(id));
  }, []);

  return (
    <main>
      {product && (
        <div>
          <div className="product-img">
            <img src={product.image} />
          </div>
          <div className="product-about__wrap">
            <div className="product-about__title">{product.name}</div>
            <div className="product-about__text">
              <p>{product.description}</p>
            </div>
            <div className="product__price-buy">
              <div className="product__price">{product.price} р/шт</div>
              <div className="product__amount">
                <button className="amount__change">-</button>
                <input type="number" className="amount__cur"></input>
                <button className="amount__change">+</button>
              </div>
              <div>
                <button className="add-to-cart"> Добавить в корзину </button>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
