import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalAction } from "../../../reducers/modalRequestReducer";
import { setUserAction } from "../../../reducers/userReducer";
import { ADMIN_REQUEST } from "../../../consts";

export default function UserTable() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userListReducer.users);

  return (
    <div>
      <div className="all-products__title">
        <div>№</div>
        <div>Имя</div>
        <div>Почта</div>
        <div>Админ</div>
        <div>Менеджер</div>
        <div></div>
        {/*<div className="admin__edit-title"></div>*/}
      </div>
      {users.map((user) => (
        <div className="all-products__title" key={user.id}>
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.is_admin ? "Да" : "Нет"}</div>
          <div>{user.is_manager ? "Да" : "Нет"}</div>
          <div
            className="admin__edit"
            onClick={() => {
              dispatch(setUserAction(user));
              dispatch(setModalAction(ADMIN_REQUEST, true));
            }}
          >
            Изменить
          </div>
          {/*<div
            className="admin__edit"
            onClick={async () => {
              await store.dispatch(deleteUserAction(user.id));
            }}
          >
            Удалить
          </div>*/}
        </div>
      ))}
    </div>
  );
}
