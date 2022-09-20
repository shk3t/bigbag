import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  STATUS_INIT,
  requestAction,
} from "../../../reducers/modalRequestReducer";
import ErrorMsg from "../ErrorMsg";
import EmailService from "../../../API/EmailService";
import { CART_REQUEST } from "../../../consts";

export default function CartRequestForm() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authReducer.authUser);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const { modalActive, errorMessages, requestStatus } = useSelector(
    (state) => state.cartRequestReducer
  );
  const emptyRequest = { name: "", phone: "", comment: "" };
  const [request, setRequest] = useState({ ...emptyRequest });

  useMemo(() => {
    if (modalActive) {
      if (authUser) setRequest({ ...emptyRequest, name: authUser.name });
      else setRequest({ ...emptyRequest });
    }
  }, [modalActive]);

  async function sendRequest(event) {
    event.preventDefault();
    dispatch(
      requestAction(
        CART_REQUEST,
        async () =>
          await EmailService.sendCart({
            request,
            cart: Object.values(cartItems),
          }),
        1500
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
          <p className="call_description">Корзина будет прикреплена к заявке</p>
          <button onClick={sendRequest} disabled={requestStatus !== STATUS_INIT}>
            {requestStatus}
          </button>
        </form>
      </div>
    </div>
  );
}
