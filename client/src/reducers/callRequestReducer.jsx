import EmailService from "../API/EmailService";
import { extractErrorMessages } from "../utils/errors";
import { delay } from "../utils/delay";

const UPDATE_STATUS = "UPDATE_STATUS";
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

export const BUTTON_INIT = "Жду звонка!";
const BUTTON_WAIT = "Отправляем...";
const BUTTON_OK = "Отправлено!";
const BUTTON_ERROR = "Ошибка";

const initialState = {
  modalActive: false,
  errorMessages: null,
  buttonLabel: BUTTON_INIT,
};

export default function callRequestReducer(state = initialState, action) {
  const { messages, button } = action.payload || {};
  switch (action.type) {
    case UPDATE_STATUS:
      return { ...state, errorMessages: messages, buttonLabel: button };
    case OPEN_MODAL:
      return {
        modalActive: true,
        errorMessages: null,
        buttonLabel: BUTTON_INIT,
      };
    case CLOSE_MODAL:
      return { ...state, modalActive: false };
    default:
      return state;
  }
}

async function genericRequest(dispatch, callback) {
  try {
    dispatch({
      type: UPDATE_STATUS,
      payload: { messages: null, button: BUTTON_WAIT },
    });
    await callback();
    dispatch({
      type: UPDATE_STATUS,
      payload: { messages: null, button: BUTTON_OK },
    });
    await delay(1500);
    dispatch({ type: CLOSE_MODAL });
  } catch (error) {
    const messages = extractErrorMessages(error);
    dispatch({
      type: UPDATE_STATUS,
      payload: { messages, button: BUTTON_ERROR },
    });
    await delay(1500);
    dispatch({
      type: UPDATE_STATUS,
      payload: { messages, button: BUTTON_INIT },
    });
  }
}

export const requestCallAction = (data) => async (dispatch) => {
  await genericRequest(
    dispatch,
    async () => await EmailService.requestCall(data)
  );
};

export const sendCartAction = (requestData, cartData) => async (dispatch) => {
  await genericRequest(
    dispatch,
    async () =>
      await EmailService.sendCart({ request: requestData, cart: cartData })
  );
};

export const setModalAction = (toOpen) => (dispatch) => {
  dispatch({ type: toOpen ? OPEN_MODAL : CLOSE_MODAL });
};
