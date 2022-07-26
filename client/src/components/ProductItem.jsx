import React from "react";
import ButtonMore from "./UI/Buttons/ButtonMore";

const ProductItem = (props) => {
  return (
    <div className="product-item catalog-item">
      <img className="catalog-item__img" alt="динамически"></img>
      <div>{props.item.title}</div>
      <div>{props.item.body}</div>
      <div>{props.item.price}</div>
      <ButtonMore>Подробнее</ButtonMore>
      {/* <button>Корзина</button> */}
    </div>
  );
};

export default ProductItem;
