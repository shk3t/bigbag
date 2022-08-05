import React from "react";

const ErrorAuthMsg = ({ messages }) => {
  return (
    <div>
      <div className="auth_error">
        {messages.map((message, i) => (
          <p key={i}>
            {message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ErrorAuthMsg;
