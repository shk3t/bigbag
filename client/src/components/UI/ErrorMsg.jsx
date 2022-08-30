import React from "react";

export default function ErrorMsg({ messages }) {
  return (
    <div>
      <div className="auth_error">
        {messages.map((message, i) => (
          <p key={i}>{message}</p>
        ))}
      </div>
    </div>
  );
};
