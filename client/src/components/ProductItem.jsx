import React from "react";
import ButtonMore from "./UI/Buttons/ButtonMore";

// Деструктуризировал твои props в {product} - в принципе, получилось то же самое.
const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <div>
        <img
          className="catalog-item__img"
          alt="продукт"
          src={product.image}
        ></img>
      </div>
      <div>
        <ButtonMore id={product.id}>Подробнее</ButtonMore>
      </div>
      {/* <button>Корзина</button> */}
      <div className="catalog-btn__wrap">
        {/* временно убрала, чтобы не забыть стилизовать кнопку и отображение описания+цены */}
        {/* <div className="catalog-item__title ">{product.name}</div> */}
        {/* <div className="catalog-item__price">{product.price} р/шт</div> */}
      </div>
    </div>
  );
};

export default ProductItem;
