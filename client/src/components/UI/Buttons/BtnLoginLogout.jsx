import { React, useEffect } from "react";
import classes from "./ButtonMore.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../reducers/authReducer";
import { setModalAction } from "../../../reducers/modalRequestReducer";
import { AUTH_REQUEST } from "../../../consts";

export default function BtnLoginLogout() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authReducer.authUser);
  const modalActive = useSelector(
    (state) => state.authRequestReducer.modalActive
  );

  useEffect(() => {
    dispatch(setModalAction(AUTH_REQUEST, false));
  }, [authUser]);

  function loginOrLogout(event) {
    event.preventDefault();
    if (authUser) {
      dispatch(logoutAction());
    } else {
      dispatch(setModalAction(AUTH_REQUEST, true));
    }
  }

  return (
    <div>
      <button onClick={loginOrLogout} className={classes.header__login_btn}>
        {authUser ? "Выйти" : "Войти"}
      </button>
    </div>
  );
}
