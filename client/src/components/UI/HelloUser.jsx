import React from "react";
import "../.././styles/main.css";

const HelloUser = ({ name }) => {
  return <div className="header__hello">Здравствуйте, {name}</div>;
};

export default HelloUser;
