import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
    (state) => state.modalRequestReducer.buttonLabel
  );

  function sendRequest(event) {
    event.preventDefault();
    dispatch(
      requestAction(
        async () =>
          await store.dispatch(
            product.id
              ? updateProductAction(product.id, product)
              : createProductAction(product)
          ),
        false
      )
    );
  }

  return (
    <div className="button-save">
      <button disabled={buttonLabel !== BUTTON_INIT} onClick={sendRequest}>
        {buttonLabel === BUTTON_INIT ? "Сохранить" : BUTTON_INIT}
      </button>
    </div>
  );
}
