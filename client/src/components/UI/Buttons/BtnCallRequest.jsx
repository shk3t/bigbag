import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalAction } from "../../../reducers/modalRequestReducer";
import Modal from "../../Modal/Modal";
import CallRequestForm from "../Forms/CallRequestForm";

export default function BtnCallRequest() {
  const dispatch = useDispatch();
  const modalActive = useSelector(
    (state) => state.modalRequestReducer.modalActive
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
        setActive={(isActive) => dispatch(setModalAction(isActive))}
      >
        <CallRequestForm />
      </Modal>
    </div>
  );
}
