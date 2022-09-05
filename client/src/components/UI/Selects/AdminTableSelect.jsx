import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BIG_BAG,
  BIG_BAG_TYPE,
  POLY_BAG,
  POLY_BAG_TYPE,
  USERS,
} from "../../../consts";
import {
  clearProductListAction,
  listProductsAction,
} from "../../../reducers/productListReducer";
import { listUsersAction } from "../../../reducers/userListReducer";
import { useSearchParams } from "react-router-dom";

export default function AdminTableSelect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const table = searchParams.get("table");
    if (table === USERS) {
      dispatch(listUsersAction());
    } else {
      dispatch(listProductsAction({ type: table }));
    }
  }, [searchParams]);

  function fetchData(event) {
    setSearchParams({ table: event.target.value });
  }

  return (
    <div className=" admin__choose">
      <p> Выберите таблицу:</p>
      <select
        value={searchParams.get("table") || POLY_BAG}
        onChange={fetchData}
      >
        <option value={POLY_BAG}>Мешки полипропиленовые</option>
        <option value={BIG_BAG}>МКР (биг-бэг)</option>
        <option value={POLY_BAG_TYPE}>Типы полипропиленовых мешков</option>
        <option value={BIG_BAG_TYPE}>Типы МКР</option>
        <option value={USERS}>Пользователи</option>
      </select>
    </div>
  );
}
