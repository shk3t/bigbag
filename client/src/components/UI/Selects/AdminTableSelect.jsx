import React from "react";
import { BIG_BAG, BIG_BAG_TYPE, POLY_BAG, POLY_BAG_TYPE } from "../../../consts";
import { useDispatch } from "react-redux";
import { clearProductListAction } from "../../../reducers/productListReducer";
import { useSearchParams } from "react-router-dom";

export default function AdminTableSelect() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  // const product = useSelector((state) => state.productReducer.product);

  return (
    <div className=" admin__choose">
      Выберите таблицу:
      <select
        onChange={(event) => {
          dispatch(clearProductListAction());
          setSearchParams({ table: event.target.value });
          // dispatch(
          //   setProductAction({ ...product, type: event.target.value })
          // );
        }}
      >
        <option defaultValue="" hidden>
          {searchParams.get("table") || POLY_BAG}
        </option>
        <option value={POLY_BAG}>Мешки полипропиленовые</option>
        <option value={BIG_BAG}>МКР (биг-бэг)</option>
        <option value={POLY_BAG_TYPE}>Типы полипропиленовых мешков</option>
        <option value={BIG_BAG_TYPE}>Типы МКР</option>
      </select>
    </div>
  );
}
