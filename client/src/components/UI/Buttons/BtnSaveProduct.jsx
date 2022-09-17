import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_REQUEST } from "../../../consts";
import {
  STATUS_INIT,
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
  const requestStatus = useSelector(
    (state) => state.adminRequestReducer.requestStatus
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
      <button disabled={requestStatus !== STATUS_INIT} onClick={sendRequest}>
        {"Сохранить"}
      </button>
    </div>
  );
}
