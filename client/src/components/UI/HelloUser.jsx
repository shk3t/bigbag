import React from "react";
import "../.././styles/main.css";

const HelloUser = () => {
  const isAuth = false;
  return (
    //header__hello__invisible -- если горит кнопка Войти
    <div className={isAuth ? "header__hello invisible" : "header__hello"}>
      {/* // откуда импортирую user? */}
      Здравствуйте, UserName
    </div>
  );
};

export default HelloUser;
