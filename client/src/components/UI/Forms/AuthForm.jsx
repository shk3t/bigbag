import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../ErrorMsg";
import {
  registerAction,
  loginAction,
  clearErrorMessageAction,
} from "../../../reducers/authReducer";

export default function AuthForm() {
  const dispatch = useDispatch();
  const errorMessages = useSelector((state) => state.authReducer.errorMessages);
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
        {errorMessages && <ErrorMsg messages={errorMessages} />}
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
              // onBlur={checkPassword}
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
            <div>Нет аккаунта?</div>
            <div className="auth_action" onClick={toggleAuth}>
              Зарегистрируйтесь
            </div>
          </div>
        ) : (
          <div className="auth_no-akk">
            <div> Есть аккаунт?</div>
            <div className="auth_action" onClick={toggleAuth}>
              Войдите
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
