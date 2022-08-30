import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalAction } from "../../../reducers/callRequestReducer";
import Modal from "../../Modal/Modal";
import CartRequestForm from "../Forms/CartRequestForm";

export default function BtnCartRequest() {
  const dispatch = useDispatch();
  const modalActive = useSelector(
    (state) => state.callRequestReducer.modalActive
  );

  return (
    <div className="cart__sent">
      <button onClick={() => dispatch(setModalAction(true))}>
        Отправить заявку
      </button>
      <Modal
        active={modalActive}
        setActive={(isOpen) => dispatch(setModalAction(isOpen))}
      >
        <CartRequestForm />
      </Modal>
    </div>
  );
}
