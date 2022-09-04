import React from "react";
import { useDispatch } from "react-redux";
import {
  BIG_BAG,
  BIG_BAG_TYPE,
  POLY_BAG,
  POLY_BAG_TYPE,
} from "../../../consts";
import { clearProductListAction } from "../../../reducers/productListReducer";
import { useSearchParams } from "react-router-dom";

export default function AdminTableSelect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  return (
    <div className=" admin__choose">
      <p> Выберите таблицу:</p>
      <select
        onChange={(event) => {
          if (event.target.value !== searchParams.get("table"))
            dispatch(clearProductListAction());
          setSearchParams({ table: event.target.value });
        }}
      >
        <option defaultValue={null} hidden>
          {POLY_BAG}
        </option>
        <option value={POLY_BAG}>Мешки полипропиленовые</option>
        <option value={BIG_BAG}>МКР (биг-бэг)</option>
        <option value={POLY_BAG_TYPE}>Типы полипропиленовых мешков</option>
        <option value={BIG_BAG_TYPE}>Типы МКР</option>
        {/*<option value="users">Пользователи</option>*/}
      </select>
    </div>
  );
}
