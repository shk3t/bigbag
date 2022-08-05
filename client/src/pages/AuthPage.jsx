import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { REGISTRATION_PATH, LOGIN_PATH, MAIN_PATH } from "../routes";

import ErrorAuthMsg from "../components/UI/ErrorAuthMsg";

import { loginAction } from "../reducers/authReducer";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeUser, errorMessage] = useSelector(
    (state) => state.authReducer.activeUser
  );

  // TODO заменить на что-нибудь другое
  const isLogin = location.pathname === LOGIN_PATH;

  async function registerOrLogin(event) {
    event.preventDefault();
    if (isLogin) {
      dispatch(loginAction(user));
    } else {
      dispatch(registerAction(user));
    }
  }

  useEffect(() => {
    if (activeUser) {
      navigate(MAIN_PATH);
    }
  }, [activeUser]);

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
