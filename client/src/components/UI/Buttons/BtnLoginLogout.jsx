import { React, useEffect, useState } from "react";
import classes from "./ButtonMore.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorMessageAction,
  logoutAction,
} from "../../../reducers/authReducer";
import Modal from "../../Modal/Modal";
import AuthPage from "./../../../pages/AuthPage";

const BtnLoginLogout = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authReducer.authUser);

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    setModalActive(false);
  }, [authUser]);

  function loginOrLogout(event) {
    event.preventDefault();
    if (authUser) {
      dispatch(logoutAction());
    } else {
      dispatch(clearErrorMessageAction());
      setModalActive(true);
    }
  }

  return (
    <div>
      <button onClick={loginOrLogout} className={classes.header__login_btn}>
        {authUser ? "Выйти" : "Войти"}
      </button>
      <Modal active={!authUser && modalActive} setActive={setModalActive}>
        <AuthPage />
      </Modal>
    </div>
  );
};

export default BtnLoginLogout;
