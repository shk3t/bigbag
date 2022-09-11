import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_REQUEST } from "../../../consts";
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
    (state) => state.adminRequestReducer.buttonLabel
  );

  function sendRequest(event) {
    event.preventDefault();
    dispatch(
      requestAction(
        ADMIN_REQUEST,
        async () => await store.dispatch(updateUserAction(user.id, user))
      )
    );
  }

  return (
    <div>
      <button disabled={buttonLabel !== BUTTON_INIT} onClick={sendRequest}>
        {"Сохранить"}
      </button>
    </div>
  );
}
