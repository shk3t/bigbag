import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { REGISTRATION_PATH, LOGIN_PATH, MAIN_PATH } from "../routes";
import AuthService from "../API/AuthService";
import ErrorAuthMsg from "../components/UI/ErrorAuthMsg";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const isLogin = location.pathname === LOGIN_PATH;

  async function registerOrLogin(event) {
    event.preventDefault();
    try {
      await (isLogin ? AuthService.login(user) : AuthService.register(user));
      navigate(MAIN_PATH);
      alert("Авторизация прошла успешно!");
      // TODO как-то сохарнять и обновлять состояние в глобальном isAuth
    } catch (error) {
      console.log(error.response.data);
      alert("Ошибка авторизации!");
    }
  }

  return (
    <div>
      <div className="auth-card">
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <ErrorAuthMsg />
        <form className="auth-forms__form">
          <div className="auth-forms">
            {!isLogin && (
              <input
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                type="text"
                placeholder="Имя"
              ></input>
            )}
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="text"
              placeholder="Электронная почта"
            ></input>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="text"
              placeholder="Пароль"
            ></input>
          </div>
          <button onClick={registerOrLogin}>
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>
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
