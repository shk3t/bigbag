import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalAction } from "../../../reducers/modalRequestReducer";
import Modal from "../../Modal/Modal";
import CartRequestForm from "../Forms/CartRequestForm";

export default function BtnCartRequest() {
  const dispatch = useDispatch();
  const modalActive = useSelector(
    (state) => state.modalRequestReducer.modalActive
  );

  return (
    <div className="cart__sent">
      <button onClick={() => dispatch(setModalAction(true))}>
        Отправить заявку
      </button>
      <Modal
        active={modalActive}
        setActive={(isActive) => dispatch(setModalAction(isActive))}
      >
        <CartRequestForm />
      </Modal>
    </div>
  );
}
