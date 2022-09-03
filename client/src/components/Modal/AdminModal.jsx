import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import AdminForms from "../UI/Forms/AdminForms";
import { setModalAction } from "../../reducers/modalRequestReducer";

export default function AdminModal() {
  const dispatch = useDispatch();
  const modalActive = useSelector(
    (state) => state.modalRequestReducer.modalActive
  );

  return (
    <Modal
      active={modalActive}
      setActive={(isActive) => dispatch(setModalAction(isActive))}
    >
      <AdminForms />
    </Modal>
  );
}
