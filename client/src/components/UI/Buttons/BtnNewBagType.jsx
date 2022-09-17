import React from "react";
import { useDispatch } from "react-redux";
import { ADMIN_REQUEST } from "../../../consts";
import { setModalAction } from "../../../reducers/modalRequestReducer";
import { clearSubtypeAction } from "../../../reducers/subtypeReducer";

export default function BtnNewBagType() {
  const dispatch = useDispatch();

  return (
    <div className="btn__addItem">
      <button
        className="btn__action addItem"
        onClick={() => {
          dispatch(clearSubtypeAction());
          dispatch(setModalAction(ADMIN_REQUEST, true));
        }}
      >
        Добавить тип мешка
      </button>
    </div>
  );
}

