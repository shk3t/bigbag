import React from "react";
import "../.././styles/main.css";
import { useSelector } from "react-redux";

const HelloUser = ({ name }) => {
  const isAuth = false;
  return (
    <div className={isAuth ? "header__hello invisible" : "header__hello"}>
      Здравствуйте, {name}
    </div>
  );
};

export default HelloUser;
