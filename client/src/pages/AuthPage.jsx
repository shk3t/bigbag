import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { REGISTRATION_PATH, LOGIN_PATH, MAIN_PATH } from "../routes";

import ErrorAuthMsg from "../components/UI/ErrorAuthMsg";

import { registerAction, loginAction } from "../reducers/authReducer";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { authUser, authErrorMessages } = useSelector(
    (state) => state.authReducer
  );

  // TODO заменить на что-нибудь другое
  const isLogin = location.pathname === LOGIN_PATH;

  function registerOrLogin(event) {
    event.preventDefault();
    if (isLogin) {
      dispatch(loginAction(credentials));
    } else {
      dispatch(registerAction(credentials));
    }
  }

  useEffect(() => {
    if (authUser) {
      navigate(MAIN_PATH);
    }
  }, [authUser]);

  return (
    <div>
      <div className="auth-card">
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        {authErrorMessages && <ErrorAuthMsg messages={authErrorMessages} />}
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
