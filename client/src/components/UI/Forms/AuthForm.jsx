import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../ErrorMsg";
import { registerAction, loginAction } from "../../../reducers/authReducer";
import { store } from "../../../store";
import { BUTTON_INIT, requestAction } from "../../../reducers/modalRequestReducer";
import { AUTH_REQUEST } from "../../../consts";

export default function AuthForm() {
  const dispatch = useDispatch();
  const { errorMessages, modalActive, buttonLabel } = useSelector(
    (state) => state.authRequestReducer
  );
  const emptyCredentials = { name: "", email: "", password: "" };
  const [credentials, setCredentials] = useState({ ...emptyCredentials });
  const [isLogin, setIsLogin] = useState(true);

  useMemo(() => {
    if (modalActive) {
      setCredentials({ ...emptyCredentials });
    }
  }, [modalActive]);

  function registerOrLogin(event) {
    event.preventDefault();
    dispatch(
      requestAction(
        AUTH_REQUEST,
        async () =>
          await store.dispatch(
            isLogin ? loginAction(credentials) : registerAction(credentials)
          )
      )
    );
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
          <button
            onClick={registerOrLogin}
            disabled={buttonLabel !== BUTTON_INIT}
          >
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
