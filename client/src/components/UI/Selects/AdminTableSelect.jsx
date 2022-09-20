import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BAG_TYPE_MAPPING,
  BIG_BAG,
  BIG_BAG_TYPE,
  POLY_BAG,
  POLY_BAG_TYPE,
  USERS,
} from "../../../consts";
import { listProductsAction } from "../../../reducers/productListReducer";
import { listUsersAction } from "../../../reducers/userListReducer";
import { useSearchParams } from "react-router-dom";
import { listSubtypesAction } from "../../../reducers/subtypeListReducer";

export default function AdminTableSelect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const table = searchParams.get("table");
    switch (table) {
      case USERS:
        dispatch(listUsersAction());
        break;
      case BIG_BAG_TYPE:
      case POLY_BAG_TYPE:
        dispatch(listSubtypesAction(BAG_TYPE_MAPPING[table]));
        break;
      case BIG_BAG:
      case POLY_BAG:
      default:
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
