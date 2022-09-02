import React, { useState } from "react";

import { BIG_BAG, BIG_BAG_TYPE, POLY_BAG, POLY_BAG_TYPE } from "../consts";
import PolyBagForm from "../components/UI/Forms/CreatePolyBagForm";
import { useDispatch, useSelector } from "react-redux";
import { setProductAction } from "../reducers/productReducer";

export default function AddItemAdmin() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);
  const [tableId, setTableId] = useState(POLY_BAG);

  function renderTable() {
    switch (tableId) {
      case POLY_BAG:
        return <PolyBagForm />;
      case BIG_BAG:
        return <div>Таблица биг бегов</div>;
      case POLY_BAG_TYPE:
        return <div>Таблица типов пп мешков</div>;
      case BIG_BAG_TYPE:
        return <div>Таблица типов биг-бэг</div>;
    }
  }
  return (
    <div className="admin__container">
      <h2>Добавить товар</h2>
      <div className=" admin__choose">
        Выберите таблицу:
        <select
          onChange={(event) => {
            setTableId(event.target.value);
            dispatch(
              setProductAction({ ...product, type: event.target.value })
            );
          }}
        >
          <option value={POLY_BAG}>Мешки полипропиленовые</option>
          <option value={BIG_BAG}>МКР (биг-бэг)</option>
          <option value={POLY_BAG_TYPE}>Типы полипропиленовых мешков</option>
          <option value={BIG_BAG_TYPE}>Типы МКР</option>
        </select>
      </div>
      {renderTable()}
    </div>
  );
}
