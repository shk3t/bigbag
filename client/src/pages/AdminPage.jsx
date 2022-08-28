import React, { useEffect, useMemo, useState } from "react";
import {
  BIG_BAG,
  BIG_BAG_TYPE,
  POLY_BAG,
  POLY_BAG_TYPE,
  BASE_URL,
  ADMIN_PATH
} from "../consts";
import CreatePolyBagForm from "../components/UI/Forms/CreatePolyBagForm";
import { useDispatch, useSelector } from "react-redux";
import { setProductAction } from "../reducers/productReducer";
import { listProductsAction } from "../reducers/productListReducer";
import Header from "../components/Header";
import BtnAddItem from "../components/UI/Buttons/BtnAddItem";
import PolyBagTable from "../components/PolyBagTable";
import BigBagTable from "../components/BigBagTable";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  // const { product } = useSelector((state) => state.productReducer);

  // TODO какое-то неудачное имя
  function renderTable() {
    switch (searchParams.get("table")) {
      case POLY_BAG:
        return <PolyBagTable />;
        // return <CreatePolyBagForm />;
      case BIG_BAG:
        return <BigBagTable />;
      case POLY_BAG_TYPE:
        return <div>Таблица типов пп мешков</div>;
      case BIG_BAG_TYPE:
        return <div>Таблица типов биг-бэг</div>;
      default:
        return <PolyBagTable />;
    }
  }

  return (
    <div>
      <Header />
      <main className="admin-main">
        <div className=" admin__choose">
          Выберите таблицу:
          <select
            onChange={(event) => {
              setSearchParams({table: event.target.value});
              setSearchParams({table: event.target.value});
              // dispatch(
              //   setProductAction({ ...product, type: event.target.value })
              // );
            }}
          >
            <option defaultValue="" hidden>{searchParams.get("table") || POLY_BAG}</option>
            <option value={POLY_BAG}>Мешки полипропиленовые</option>
            <option value={BIG_BAG}>МКР (биг-бэг)</option>
            <option value={POLY_BAG_TYPE}>Типы полипропиленовых мешков</option>
            <option value={BIG_BAG_TYPE}>Типы МКР</option>
          </select>
        </div>

        {renderTable()}

        <BtnAddItem />
      </main>
      {/* весь admin-container сделать модальным, появляется когда клик Добавить */}

      {/* <div className="admin__container">
        <h1>Добавить товар</h1>
        {renderTable()}
      </div>
       */}
    </div>
  );
}
