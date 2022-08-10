import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemAction } from "../reducers/cartReducer";

export default function ProductOrder({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  function decrementQuantity() {
    const newQuantity = quantity - product.items_per_pack;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    } else {
      setQuantity(0);
    }
  }

  function incrementQuantity() {
    setQuantity(quantity + product.items_per_pack);
  }

  return (
    <div className="product-wrap">
      <div className="product-img">
        <img src={product.image} />
      </div>
      <div className="product-about__wrap">
        <div className="product-about__title">
          {product.type} {product.size}
        </div>
        <div className="product-about__text">
          <p>{product.subtype}</p>
        </div>
        <div className="product__price-buy">
          <div className="product__price">
            <p>{product.price} р/шт</p>
          </div>
          <div className="product__amount">
            <button className="amount__change" onClick={decrementQuantity}>
              -
            </button>
            <input
              className="amount__cur"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
            ></input>
            <button className="amount__change" onClick={incrementQuantity}>
              +
            </button>
          </div>
          <div>
            <button
              className="add-to-cart"
              onClick={() => dispatch(addItemAction(product, quantity))}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
