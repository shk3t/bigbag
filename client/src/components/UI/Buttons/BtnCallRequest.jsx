import { React, useState } from "react";
import Modal from "../../Modal/Modal";
import CallRequestForm from "../Forms/CallRequestForm";

export default function BtnCallRequest() {
  const [modalActive, setModalActive] = useState();

  return (
    <div>
      <button
        className="btn__action"
        onClick={() => {
          setModalActive(true);
        }}
      >
        Заказать звонок
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <CallRequestForm />
      </Modal>
    </div>
  );
}
