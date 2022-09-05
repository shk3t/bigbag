import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../store";
import { BASE_URL } from "../../../consts";
import {
  deleteProductAction,
} from "../../../reducers/productListReducer";
import { setModalAction } from "../../../reducers/modalRequestReducer";
import { setProductAction } from "../../../reducers/productReducer";
import { getPrice } from "../../../utils/repr";

export default function BigBagTable() {
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
        <div>Верхняя модификация</div>
        <div>Нижняя модификация</div>
        <div>Вес мешка</div>
        <div>Шт/уп</div>
        <div>Размер упаковки</div>
        <div>Объем упаковки</div>
        <div className="admin__edit-title"></div>
        <div className="admin__edit-title"></div>
      </div>
      {products.map((product) => (
        <div className="all-products__title" key={product.id}>
          <div>{product.id}</div>
          <div>
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
          <div>{product.top_modification}</div>
          <div>{product.bottom_modification}</div>
          <div>{product.bag_weight && product.bag_weight.toFixed(3)} кг</div>
          <div>{product.items_per_pack} Шт/уп</div>
          <div>{product.pack_size}</div>
          <div>{product.pack_volume && product.pack_volume.toFixed(3)} м3</div>
          <div
            className="admin__edit"
            onClick={() => {
              dispatch(setProductAction(product));
              dispatch(setModalAction(true));
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
