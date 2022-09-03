import { extractErrorMessages } from "../utils/errors";
import { delay } from "../utils/delay";

const UPDATE_REQUEST_STATUS = "UPDATE_REQUEST_STATUS";
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

export const BUTTON_INIT = "Отправить";
const BUTTON_WAIT = "Отправляем...";
const BUTTON_OK = "Отправлено!";
const BUTTON_ERROR = "Ошибка";

const initialState = {
  modalActive: false,
  errorMessages: null,
  buttonLabel: BUTTON_INIT,
};

export default function modalRequestReducer(state = initialState, action) {
  const { messages, button } = action.payload || {};
  switch (action.type) {
    case UPDATE_REQUEST_STATUS:
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

export const requestAction =
  (callback, delayed = true, postCallback = null) =>
  async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_REQUEST_STATUS,
        payload: { messages: null, button: BUTTON_WAIT },
      });
      await callback();
      dispatch({
        type: UPDATE_REQUEST_STATUS,
        payload: { messages: null, button: BUTTON_OK },
      });
      if (delayed) await delay(1500);
      dispatch({ type: CLOSE_MODAL });
      if (postCallback) postCallback();
    } catch (error) {
      const messages = extractErrorMessages(error);
      dispatch({
        type: UPDATE_REQUEST_STATUS,
        payload: { messages, button: BUTTON_ERROR },
      });
      await delay(1500);
      dispatch({
        type: UPDATE_REQUEST_STATUS,
        payload: { messages, button: BUTTON_INIT },
      });
    }
  };

export const setModalAction = (activate) => (dispatch) => {
  dispatch({ type: activate ? OPEN_MODAL : CLOSE_MODAL });
};
