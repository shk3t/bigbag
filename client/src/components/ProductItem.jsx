import React from "react";
import ButtonMore from "./UI/Buttons/ButtonMore";

// Деструктуризировал твои props в {product} - в принципе, получилось то же самое.
const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <div className="item__hover-scale">
        <div>
          <img
            className="catalog-item__img"
            alt="продукт"
            src={product.image}
          ></img>
        </div>
        <div className="btn-more__wrap">
          <ButtonMore id={product.id}>Подробнее</ButtonMore>
        </div>
        {/* <button>Корзина</button> */}
        <div className="catalog-btn__wrap">
          <div className="catalog-item__title ">{product.type} {product.size}</div>
          <div className="catalog-item__price">{product.price} р/шт</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
