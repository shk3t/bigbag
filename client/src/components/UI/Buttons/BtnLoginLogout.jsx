import { React, useState } from "react";
import classes from "./ButtonMore.module.css";
import { LOGIN_PATH } from "../../../routes";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../reducers/authReducer";
import Modal from "../../Modal/Modal";
import AuthPage from "./../../../pages/AuthPage";

const BtnLoginLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.authReducer);

  const [modalActive, setModalActive] = useState();
  const [isLogin, setIsLogin] = useState();

  function loginOrLogout(event) {
    event.preventDefault();
    if (authUser) {
      dispatch(logoutAction());
    } else {
      // navigate(LOGIN_PATH);
      setIsLogin(true);
      setModalActive(true);
    }
  }

  return (
    <div>
      <button onClick={loginOrLogout} className={classes.header__login_btn}>
        {authUser ? "Выйти" : "Войти"}
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        {<AuthPage />}
      </Modal>
    </div>
  );
};

export default BtnLoginLogout;
