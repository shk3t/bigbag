import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { setModalAction } from "../../reducers/modalRequestReducer";
import { useLocation } from "react-router-dom";
import modals from "../../modals";
import { ADMIN_REQUEST, AUTH_REQUEST, CALL_REQUEST, CART_REQUEST } from "../../consts";

export default function AppModals() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const active = {};
  // for (const { type } of modals) {
  //   active[type] = useSelector((state) => state[type].modalActive);
  // }
  active[CALL_REQUEST] = useSelector((state) => state[CALL_REQUEST].modalActive);
  active[CART_REQUEST] = useSelector((state) => state[CART_REQUEST].modalActive);
  active[AUTH_REQUEST] = useSelector((state) => state[AUTH_REQUEST].modalActive);
  active[ADMIN_REQUEST] = useSelector((state) => state[ADMIN_REQUEST].modalActive);

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
