import React from "react";
import { useSelector } from "react-redux";

export default function RequestACall() {
  const { authUser } = useSelector(state => state.authReducer)

  return (
    <div>
      <div className="auth-card call__card">
        <h2>Закажите звонок</h2>
        <p className="call_description">Наш менеджер вам перезвонит!</p>
        <form className="auth-forms__form" action="">
          <div className="auth-forms"></div>
          <input type="text" placeholder="Ваше имя"></input>
          <input type="tel" placeholder="8-999-123-45-67"></input>
          <textarea placeholder="Укажите комментарий, если требуется. Например, удобное время для звонка или интересующий вопрос"></textarea>

          <button>Жду звонка!</button>
        </form>
      </div>
    </div>
  );
}
