import React from "react";
import ButtonMore from "./UI/Buttons/ButtonMore";

const ProductItem = (props) => {
  return (
    <div className="product-item">
      <div>
        <img className="catalog-item__img" alt="динамически"></img>
      </div>
      <div>
        <ButtonMore>Подробнее</ButtonMore>
      </div>
      {/* <button>Корзина</button> */}
      <div className="catalog-btn__wrap">
        <div className="catalog-item__title ">{props.item.title}</div>
        {/* <div>{props.item.body}</div> */}
        {/* <div>{props.item.price}</div> */}
        <div className="catalog-item__price">9.95 р/шт</div>
      </div>
    </div>
  );
};

export default ProductItem;
