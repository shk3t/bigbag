import React, { useEffect, useMemo, useState } from "react";
import { BIG_BAG, BASE_URL } from "../consts";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProductListAction,
  listProductsAction,
} from "../reducers/productListReducer";

export default function BigBagTable() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productListReducer.products);

  useEffect(() => {
    dispatch(listProductsAction({ type: BIG_BAG }));
  }, []);

  return (
    <div>
      <div className="all-products__title">
        <div>Фото</div>
        <div>Тип мешка</div>
        <div>Цена</div>
        <div>Размер</div>
        <div>Метка</div>
        <div>Верхняя модификация</div>
        <div>Нижняя модификация</div>
        <div>Вес мешка</div>
        <div>Шт/уп</div>
        <div>Размер упаковки</div>
        <div>Объем упаковки</div>
      </div>
      {products.map((product) => (
        <div className="all-products__title" key={product.id}>
          <div>
            <img
              className="catalog-item__img"
              alt="продукт"
              src={BASE_URL + product.image}
            ></img>
          </div>
          <div>{product.subtype}</div>
          <div>{product.price.toFixed(2)} р/шт</div>
          <div>{product.size}</div>
          <div>{product.tag ? product.tag : "Без метки"}</div>
          <div>{product.top_modification}</div>
          <div>{product.bottom_modification}</div>
          <div>{product.bag_weight.toFixed(3)} кг</div>
          <div>{product.items_per_pack} Шт/уп</div>
          <div>{product.pack_size}</div>
          <div>{product.pack_volume.toFixed(3)} м3</div>
          <div>Изменить</div>
        </div>
      ))}
    </div>
  );
}
