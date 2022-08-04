import React from "react";
import "../.././styles/main.css";

const ErrorAuthMsg = () => {
  return (
    <div>
      <div className="auth_error">
        <p>Неправильный логин и/или пароль</p>
      </div>
    </div>
  );
};

export default ErrorAuthMsg;
