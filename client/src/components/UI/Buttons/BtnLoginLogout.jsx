import React from "react";
import classes from "./ButtonMore.module.css";
import { LOGIN_PATH } from "../../../routes";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../reducers/authReducer";

const BtnLoginLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.authReducer);

  function loginOrLogout(event) {
    event.preventDefault();
    if (authUser) {
      dispatch(logoutAction());
    } else {
      navigate(LOGIN_PATH);
    }
  }

  return (
    <button onClick={loginOrLogout} className={classes.header__login_btn}>
      {authUser ? "Выйти" : "Войти"}
    </button>
  );
};

export default BtnLoginLogout;
