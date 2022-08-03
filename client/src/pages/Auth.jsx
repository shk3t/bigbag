import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { REGISTRATION_PATH } from "../routes";
import { LOGIN_PATH } from "../routes";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_PATH;
  return (
    <div>
      <div className="auth-card">
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <div className="auth-forms">
          <input type="text" placeholder="Электронная почта"></input>
          <input type="text" placeholder="Пароль"></input>
        </div>
        <button>{isLogin ? "Войти" : "Зарегистрироваться"}</button>
        {isLogin ? (
          <div className="auth_no-akk">
            Нет аккаунта?
            <NavLink to={REGISTRATION_PATH}> Зарегистрируйтесь </NavLink>
          </div>
        ) : (
          <div className="auth_no-akk">
            Есть аккаунт?
            <NavLink to={LOGIN_PATH}> Войдите </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
