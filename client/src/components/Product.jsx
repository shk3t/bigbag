import React from "react";

export default function Product({ product }) {
  return (
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
  );
}
