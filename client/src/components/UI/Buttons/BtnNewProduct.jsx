import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ADMIN_REQUEST, POLY_BAG } from "../../../consts";
import { setModalAction } from "../../../reducers/modalRequestReducer";
import { clearProductAction } from "../../../reducers/productReducer";

export default function BtnNewProduct() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  return (
    <div className="btn__addItem">
      <button
        className="btn__action addItem"
        onClick={() => {
          dispatch(clearProductAction(searchParams.get("table") || POLY_BAG));
          dispatch(setModalAction(ADMIN_REQUEST, true));
        }}
      >
        Добавить товар
      </button>
    </div>
  );
}
