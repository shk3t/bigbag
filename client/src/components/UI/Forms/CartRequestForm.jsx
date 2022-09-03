import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BUTTON_INIT,
  requestAction,
} from "../../../reducers/modalRequestReducer";
import ErrorMsg from "../ErrorMsg";
import EmailService from "../../../API/EmailService";

export default function CartRequestForm() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authReducer.authUser);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const errorMessages = useSelector(
    (state) => state.modalRequestReducer.errorMessages
  );
  const buttonLabel = useSelector(
    (state) => state.modalRequestReducer.buttonLabel
  );
  const [request, setRequest] = useState({ name: "", phone: "", comment: "" });

  useEffect(() => {
    if (authUser) {
      setRequest({ ...request, name: authUser.name });
    }
  }, [authUser]);

  async function sendRequest(event) {
    event.preventDefault();
    dispatch(
      requestAction(
        async () =>
          await EmailService.sendCart({
            request,
            cart: Object.values(cartItems),
          })
      )
    );
  }

  return (
    <div>
      <div className="auth-card call__card">
        <h2>Отправьте заявку</h2>
        <p className="call_description">Наш менеджер вам перезвонит!</p>
        {errorMessages && <ErrorMsg messages={errorMessages} />}
        <form className="auth-forms__form" action="">
          <div className="auth-forms"></div>
          <input
            value={request.name}
            onChange={(event) =>
              setRequest({ ...request, name: event.target.value })
            }
            type="text"
            placeholder="Ваше имя"
          />
          <input
            value={request.phone}
            onChange={(event) =>
              setRequest({ ...request, phone: event.target.value })
            }
            type="tel"
            placeholder="8-999-123-45-67"
          />
          <textarea
            value={request.comment}
            onChange={(event) =>
              setRequest({ ...request, comment: event.target.value })
            }
            type="textarea"
            field="comment"
            placeholder="Укажите комментарий, если требуется. Например, удобное время для звонка или интересующий вопрос"
          />
          <button onClick={sendRequest} disabled={buttonLabel !== BUTTON_INIT}>
            {buttonLabel}
          </button>
        </form>
      </div>
    </div>
  );
}
