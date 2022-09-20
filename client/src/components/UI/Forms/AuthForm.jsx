import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../ErrorMsg";
import { registerAction, loginAction } from "../../../reducers/authReducer";
import { store } from "../../../store";
import { STATUS_INIT, clearErrorsAction, requestAction } from "../../../reducers/modalRequestReducer";
import { AUTH_REQUEST } from "../../../consts";

// TODO сообщение об ошибке о существующем email
export default function AuthForm() {
  const dispatch = useDispatch();
  const { errorMessages, modalActive, requestStatus } = useSelector(
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
    dispatch(clearErrorsAction(AUTH_REQUEST));
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
            disabled={requestStatus !== STATUS_INIT}
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
