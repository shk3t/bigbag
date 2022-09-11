import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_REQUEST } from "../../../consts";
import {
  BUTTON_INIT,
  requestAction,
} from "../../../reducers/modalRequestReducer";
import {
  createProductAction,
  updateProductAction,
} from "../../../reducers/productListReducer";
import { store } from "../../../store";

export default function BtnSaveProduct() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);
  const buttonLabel = useSelector(
    (state) => state.adminRequestReducer.buttonLabel
  );

  function sendRequest(event) {
    event.preventDefault();
    dispatch(
      requestAction(
        ADMIN_REQUEST,
        async () =>
          await store.dispatch(
            product.id
              ? updateProductAction(product.id, product)
              : createProductAction(product)
          )
      )
    );
  }

  return (
    <div className="button-save">
      <button disabled={buttonLabel !== BUTTON_INIT} onClick={sendRequest}>
        {"Сохранить"}
      </button>
    </div>
  );
}
