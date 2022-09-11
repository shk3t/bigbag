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

const createModalRequestReducer =
  (reducerName = "") =>
  (state = initialState, action) => {
    if (action.name !== reducerName) return state;
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
  };
export default createModalRequestReducer;

export const requestAction =
  (name, callback, timeout = 0) =>
  async (dispatch) => {
    try {
      dispatch({
        name,
        type: UPDATE_REQUEST_STATUS,
        payload: { messages: null, button: BUTTON_WAIT },
      });
      await callback();
      dispatch({
        name,
        type: UPDATE_REQUEST_STATUS,
        payload: { messages: null, button: BUTTON_OK },
      });
      if (timeout > 0) await delay(timeout);
      dispatch({ name, type: CLOSE_MODAL });
    } catch (error) {
      const messages = extractErrorMessages(error);
      dispatch({
        name,
        type: UPDATE_REQUEST_STATUS,
        payload: { messages, button: BUTTON_ERROR },
      });
      await delay(1500);
      dispatch({
        name,
        type: UPDATE_REQUEST_STATUS,
        payload: { messages, button: BUTTON_INIT },
      });
    }
  };

export const setModalAction = (name, activate) => (dispatch) => {
  dispatch({ name, type: activate ? OPEN_MODAL : CLOSE_MODAL });
};
