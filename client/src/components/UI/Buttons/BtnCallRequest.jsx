import { React, useState } from "react";
import Modal from "../../Modal/Modal";
import CallRequest from "../../CallRequest";

export default function BtnRequestACall() {
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
        <CallRequest />
      </Modal>
    </div>
  );
}
