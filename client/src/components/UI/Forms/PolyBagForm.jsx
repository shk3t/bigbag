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
        <div className="admin__add-description">
          <div>
            Выберите изображение:&nbsp;&nbsp;
            <ProductInput type="file" field="image" accept="image/*" />
          </div>
          <div>
            Тип мешка:&nbsp;&nbsp;
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
          <p>
            Цена по запросу:
            <ProductInput type="checkbox" field="price_on_request" />
          </p>
          <p>
            Есть в наличии:
            <ProductInput type="checkbox" field="in_stock" />
          </p>
          <p>
            Новинка:
            <ProductInput type="checkbox" field="new" />
          </p>
          <p>
            Цена по акции:
            <ProductInput type="checkbox" field="sale" />
          </p>
          <BtnSaveProduct />
        </div>
      </form>
    </div>
  );
}
