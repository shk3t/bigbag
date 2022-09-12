import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { setModalAction } from "../../reducers/modalRequestReducer";
import { useLocation } from "react-router-dom";
import modals from "../../modals";

export default function AppModals() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const active = [];
  for (const { type } of modals) {
    active[type] = useSelector((state) => state[type].modalActive);
  }

  return modals.map(
    (modal) =>
      pathname.match(modal.path) && (
        <Modal
          key={modal.type}
          active={active[modal.type]}
          setActive={(isActive) =>
            dispatch(setModalAction(modal.type, isActive))
          }
        >
          <modal.Child />
        </Modal>
      )
  );
}
