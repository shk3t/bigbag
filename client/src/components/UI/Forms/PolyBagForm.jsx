import React from "react";
import ProductInput from "../Inputs/ProductInput";
import SubtypeSelect from "../Selects/SubtypeSelect";
import BtnSaveProduct from "../Buttons/BtnSaveProduct";
import { useSelector } from "react-redux";
import ErrorMsg from "../ErrorMsg";

export default function PolyBagForm() {
  const errorMessages = useSelector(
    (state) => state.modalRequestReducer.errorMessages
  );

  return (
    <div>
      {errorMessages && <ErrorMsg messages={errorMessages} />}
      <form className="admin_add-meshki" encType="multipart/form-data">
        {/* <h4>Добавить мешок</h4> */}

        <div className="admin__add-description">
          <div>
            Выберите изображение:
            <ProductInput type="file" field="image" accept="image/*" />
          </div>
          <div>
            Тип мешка:
            <SubtypeSelect />
          </div>
          Цена в руб.:
          <ProductInput type="number" field="price" placeholder="13.00" />
          Размер:
          <ProductInput type="text" field="size" placeholder="50x90" />
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
          <ProductInput type="number" field="bag_weight" placeholder="45" />
          Штук в упаковке:
          <ProductInput
            type="number"
            field="items_per_pack"
            placeholder="1000"
          />
          <BtnSaveProduct />
        </div>
      </form>
    </div>
  );
}
