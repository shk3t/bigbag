import React from "react";
import BtnSaveUser from "../Buttons/BtnSaveUser";
import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../ErrorMsg";
import { setUserAction } from "../../../reducers/userReducer";

export default function UserForm() {
  const dispatch = useDispatch();
  const errorMessages = useSelector(
    (state) => state.adminRequestReducer.errorMessages
  );
  const user = useSelector((state) => state.userReducer.user);

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
              dispatch(setUserAction({ ...user, is_admin: event.target.checked }))
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
          <BtnSaveUser />
        </div>
      </form>
    </div>
  );
}
