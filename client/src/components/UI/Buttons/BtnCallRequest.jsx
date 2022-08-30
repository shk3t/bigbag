import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalAction } from "../../../reducers/callRequestReducer";
import Modal from "../../Modal/Modal";
import CallRequestForm from "../Forms/CallRequestForm";

export default function BtnCallRequest() {
  const dispatch = useDispatch();
  const modalActive = useSelector(
    (state) => state.callRequestReducer.modalActive
  );

  return (
    <div>
      <button
        className="btn__action"
        onClick={() => dispatch(setModalAction(true))}
      >
        Заказать звонок
      </button>
      <Modal
        active={modalActive}
        setActive={(isOpen) => dispatch(setModalAction(isOpen))}
      >
        <CallRequestForm />
      </Modal>
    </div>
  );
}
