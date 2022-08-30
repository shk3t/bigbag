import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import AddItemAdmin from "../../AddItemAdmin";

export default function BtnAddItem() {
  const [modalActive, setModalActive] = useState();

  return (
    <div className="btn__addItem">
      <button
        className="btn__action addItem"
        onClick={() => {
          setModalActive(true);
        }}
      >
        Добавить товар
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <AddItemAdmin />
      </Modal>
    </div>
  );
}
