import React from "react";
import "../.././styles/main.css";
import { useSelector } from "react-redux";

const HelloUser = () => {
  const { authUser, errorMessages } = useSelector((state) => state.authReducer);

  const isAuth = false;
  return (
    <div className={isAuth ? "header__hello invisible" : "header__hello"}>
      Здравствуйте, {authUser.name}
    </div>
  );
};

export default HelloUser;
