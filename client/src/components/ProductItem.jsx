import React from "react";
import ButtonMore from "./UI/Buttons/ButtonMore";
import { BASE_URL } from "../consts";
import { getPrice } from "../utils/repr";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <div className="item__hover-scale">
        <div className="product-item__img-wrap">
          <img
            className="catalog-item__img"
            alt="продукт"
            src={BASE_URL + product.image}
          ></img>
        </div>
        <div className="btn-more__wrap">
          <ButtonMore id={product.id}>Подробнее</ButtonMore>
        </div>
        {/* <button>Корзина</button> */}
        <div className="catalog-btn__wrap">
          <div className="catalog-item__title ">
            {product.type} {product.size}
          </div>
          <div className="catalog-item__price">
            {getPrice(product)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
