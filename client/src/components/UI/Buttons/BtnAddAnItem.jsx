import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import AddAnItemAdmin from "../../AddAnItemAdmin";

export default function BtnAddAnItem() {
  const [modalActive, setModalActive] = useState();

  return (
    <div>
      <button
        className="btn__action addAnItem"
        onClick={() => {
          setModalActive(true);
        }}
      >
        Добавить товар
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <AddAnItemAdmin />
      </Modal>
    </div>
  );
}
