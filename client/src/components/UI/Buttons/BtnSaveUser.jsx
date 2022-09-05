import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BUTTON_INIT,
  requestAction,
} from "../../../reducers/modalRequestReducer";
import { updateUserAction } from "../../../reducers/userListReducer";
import { store } from "../../../store";

export default function BtnSaveUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const buttonLabel = useSelector(
    (state) => state.modalRequestReducer.buttonLabel
  );

  function sendRequest(event) {
    event.preventDefault();
    dispatch(
      requestAction(
        async () => await store.dispatch(updateUserAction(user.id, user)),
        false
      )
    );
  }

  return (
    <div>
      <button disabled={buttonLabel !== BUTTON_INIT} onClick={sendRequest}>
        {buttonLabel === BUTTON_INIT ? "Сохранить" : BUTTON_INIT}
      </button>
    </div>
  );
}
