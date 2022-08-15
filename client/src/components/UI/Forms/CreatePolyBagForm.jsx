import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductAction,
  setProductAction,
} from "../../../reducers/productReducer";
import ProductInput from "../Inputs/ProductInput";
// import ProductInput from "../Inputs/ProductInput.bad";
import SubtypeSelect from "../Selects/SubtypeSelect";

export default function CreatePolyBagForm() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);

  return (
    <form className="admin_add-meshki" encType="multipart/form-data">
      <h2>Добавить мешок</h2>

      <div className="admin__add-description">
        <div>
          Выберите изображение:
          <ProductInput type="file" field="image" />
        </div>
        <div>
          Тип мешка:
          <SubtypeSelect />
        </div>
        Цена в руб.:
        <ProductInput type="number" field="price" />
        Размер:
        <ProductInput type="text" field="size" placeholder="50*90" />
        Метка (необязательно):
        <ProductInput
          type="text"
          field="tag"
          placeholder="ГОСТ / (усиленный)"
        />
        Цвет:
        <ProductInput type="text" field="color" placeholder="Серый" />
        Сорт:
        <ProductInput type="text" field="poly_grade" placeholder="ВС" />
        Вес мешка в гр.:
        <ProductInput type="number" field="bag_weight" />
        Штук в упаковке:
        <ProductInput type="number" field="items_per_pack" />
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          dispatch(createProductAction(product));
        }}
      >
        Сабмит
      </button>
    </form>
  );
}
