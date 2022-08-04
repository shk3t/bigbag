import React from "react";
import classes from "./ButtonMore.module.css";
import { LOGIN_PATH } from "../../../routes";
import { useNavigate } from "react-router-dom";

const BtnLoginLogout = (props) => {
  const isAuth = true;
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        console.log("It work");
        navigate(LOGIN_PATH);
      }}
      className={classes.header__login_btn}
    >
      {isAuth ? "Войти" : "Выйти"}
    </button>
  );
};

export default BtnLoginLogout;
