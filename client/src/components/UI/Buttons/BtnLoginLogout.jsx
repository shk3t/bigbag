import { React, useState } from "react";
import classes from "./ButtonMore.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../reducers/authReducer";
import Modal from "../../Modal/Modal";
import AuthPage from "./../../../pages/AuthPage";

const BtnLoginLogout = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.authReducer);

  const [modalActive, setModalActive] = useState();

  function loginOrLogout(event) {
    event.preventDefault();
    if (authUser) {
      dispatch(logoutAction());
    } else {
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
