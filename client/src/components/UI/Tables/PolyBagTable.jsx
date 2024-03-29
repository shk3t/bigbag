import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../store";
import { ADMIN_REQUEST, BASE_URL } from "../../../consts";
import {
  deleteProductAction,
} from "../../../reducers/productListReducer";
import { setModalAction } from "../../../reducers/modalRequestReducer";
import { setProductAction } from "../../../reducers/productReducer";
import { getPrice } from "../../../utils/repr";

export default function PolyBagTable() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productListReducer.products);

  return (
    <div>
      <div className="all-products__title">
        <div>№</div>
        <div>Фото</div>
        <div>Тип мешка</div>
        <div>Цена</div>
        <div>Размер</div>
        <div>Метка</div>
        <div>Цвет</div>
        <div>Сорт</div>
        <div>Вес мешка</div>
        <div>Шт/уп</div>
        <div></div>
        <div></div>
      </div>
      {products.map((product) => (
        <div className="all-products__title" key={product.id}>
          <div>{product.id}</div>
          <div className="admin-item__img">
            <img
              className="catalog-item__img"
              alt="продукт"
              src={BASE_URL + product.image}
            ></img>
          </div>
          <div>{product.subtype || "-"}</div>
          <div>{getPrice(product)}</div>
          <div>{product.size}</div>
          <div>{product.tag || "-"}</div>
          <div>{product.color}</div>
          <div>{product.poly_grade}</div>
          <div>
            {product.bag_weight}+-{product.weight_error} г
          </div>
          <div>{product.items_per_pack} Шт/уп</div>
          <div
            className="admin__edit"
            onClick={() => {
              dispatch(setProductAction(product));
              dispatch(setModalAction(ADMIN_REQUEST, true));
            }}
          >
            Редактировать
          </div>
          <div
            className="admin__edit"
            onClick={async () => {
              await store.dispatch(deleteProductAction(product.id));
            }}
          >
            Удалить
          </div>
        </div>
      ))}
    </div>
  );
}
