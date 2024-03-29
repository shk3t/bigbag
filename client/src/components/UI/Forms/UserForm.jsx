import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../ErrorMsg";
import { setUserAction } from "../../../reducers/userReducer";
import { STATUS_INIT, requestAction } from "../../../reducers/modalRequestReducer";
import { ADMIN_REQUEST } from "../../../consts";
import { store } from "../../../store";
import { updateUserAction } from "../../../reducers/userListReducer";

export default function UserForm() {
  const dispatch = useDispatch();
  const errorMessages = useSelector(
    (state) => state.adminRequestReducer.errorMessages
  );
  const requestStatus = useSelector(
    (state) => state.adminRequestReducer.requestStatus
  );
  const user = useSelector((state) => state.userReducer.user);

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
      {errorMessages && <ErrorMsg messages={errorMessages} />}
      <form className="admin_add-meshki" encType="multipart/form-data">
        <div className="admin__add-description">
          Админ:
          <input
            type="checkbox"
            checked={user.is_admin || false}
            onChange={(event) =>
              dispatch(
                setUserAction({ ...user, is_admin: event.target.checked })
              )
            }
          />
          Менеджер:
          <input
            type="checkbox"
            checked={user.is_manager || false}
            onChange={(event) =>
              dispatch(
                setUserAction({ ...user, is_manager: event.target.checked })
              )
            }
          />
          <div className="button-save">
            <button
              disabled={requestStatus !== STATUS_INIT}
              onClick={sendRequest}
            >
              {"Сохранить"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
