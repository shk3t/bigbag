import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ErrorAuthMsg from "../components/UI/ErrorAuthMsg";

import {
  registerAction,
  loginAction,
  clearErrorMessageAction,
} from "../reducers/authReducer";

const Auth = () => {
  const dispatch = useDispatch();
  const { errorMessages } = useSelector((state) => state.authReducer);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);


  function registerOrLogin(event) {
    event.preventDefault();
    if (isLogin) {
      dispatch(loginAction(credentials));
    } else {
      dispatch(registerAction(credentials));
    }
  }

  function toggleAuth() {
    dispatch(clearErrorMessageAction());
    setIsLogin(!isLogin);
  }

  return (
    <div>
      <div className="auth-card">
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        {errorMessages && <ErrorAuthMsg messages={errorMessages} />}
        <form className="auth-forms__form">
          <div className="auth-forms">
            {!isLogin && (
              <input
                value={credentials.name}
                onChange={(event) =>
                  setCredentials({ ...credentials, name: event.target.value })
                }
                type="text"
                placeholder="Имя"
              ></input>
            )}
            <input
              value={credentials.email}
              onChange={(event) =>
                setCredentials({ ...credentials, email: event.target.value })
              }
              type="text"
              placeholder="Электронная почта"
            ></input>
            <input
              value={credentials.password}
              onChange={(event) =>
                setCredentials({ ...credentials, password: event.target.value })
              }
              type="password"
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
            <button onClick={toggleAuth}>
              Зарегистрируйтесь
            </button>
          </div>
        ) : (
          <div className="auth_no-akk">
            Есть аккаунт?
            <button onClick={toggleAuth}>
              Войдите
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
