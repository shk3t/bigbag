import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendRequestAction, setRequestAction } from "../../../reducers/callRequestReducer";
import CallRequestInput from "../Inputs/CallRequestInput";
import SendCallRequestButton from "../Buttons/SendCallRequestButton";

export default function CallRequestForm() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (authUser) {
      dispatch(setRequestAction({name: authUser.name}));
    }
  }, [])

  return (
    <div>
      <div className="auth-card call__card">
        <h2>Закажите звонок</h2>
        <p className="call_description">Наш менеджер вам перезвонит!</p>
        <form className="auth-forms__form" action="">
          <div className="auth-forms"></div>
          <CallRequestInput
            type="text"
            field="name"
            placeholder="Ваше имя"
          ></CallRequestInput>
          <CallRequestInput
            type="tel"
            field="phone"
            placeholder="8-999-123-45-67"
          ></CallRequestInput>
          <CallRequestInput
            type="textarea"
            field="comment"
            placeholder="Укажите комментарий, если требуется. Например, удобное время для звонка или интересующий вопрос"
          />

          <SendCallRequestButton />
        </form>
      </div>
    </div>
  );
}
