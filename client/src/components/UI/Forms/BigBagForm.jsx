import React from "react";
import ProductInput from "../Inputs/ProductInput";
import SubtypeSelect from "../Selects/SubtypeSelect";
import BtnSaveProduct from "../Buttons/BtnSaveProduct";
import { useSelector } from "react-redux";
import ErrorMsg from "../ErrorMsg";

export default function BigBagForm() {
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
          <ProductInput type="number" field="price" placeholder="265.00" />
          Размер:
          <ProductInput type="text" field="size" placeholder="75x75x125" />
          Метка (необязательно):
          <ProductInput
            type="text"
            field="tag"
            placeholder="ГОСТ / (усиленный)"
          />
          Верхняя модификация:
          <ProductInput type="text" field="top_modification" placeholder="Открытый" />
          Нижняя модификация:
          <ProductInput type="text" field="bottom_modification" placeholder="Глухой" />
          Вес мешка в кг.:
          <ProductInput type="number" field="bag_weight" placeholder="0.98" />
          Штук в упаковке:
          <ProductInput
            type="number"
            field="items_per_pack"
            placeholder="200"
          />
          Размер упаковки:
          <ProductInput type="text" field="pack_size" placeholder="120x70x70" />
          Объем упаковки в м3:
          <ProductInput type="number" field="pack_volume" placeholder="0.6" />
          Цена по запросу:
          <ProductInput type="checkbox" field="price_on_request" />
          Есть в наличии:
          <ProductInput type="checkbox" field="in_stock" />
          Новинка:
          <ProductInput type="checkbox" field="new" />
          Цена по акции:
          <ProductInput type="checkbox" field="sale" />
          <BtnSaveProduct />
        </div>
      </form>
    </div>
  );
}

