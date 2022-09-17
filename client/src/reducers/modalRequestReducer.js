import { extractErrorMessages } from "../utils/errors";
import { delay } from "../utils/delay";

const UPDATE_REQUEST_STATUS = "UPDATE_REQUEST_STATUS";
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const CLEAR_ERRORS = "CLEAR_ERRORS";

export const STATUS_INIT = "Отправить";
const STATUS_WAIT = "Отправляем...";
const STATUS_OK = "Отправлено!";
const STATUS_ERROR = "Ошибка";

const initialState = {
  modalActive: false,
  errorMessages: null,
  requestStatus: STATUS_INIT,
};

const createModalRequestReducer =
  (reducerName = "") =>
  (state = initialState, action) => {
    if (action.name !== reducerName) return state;
    const { messages, status } = action.payload || {};
    switch (action.type) {
      case UPDATE_REQUEST_STATUS:
        const newState = { ...state };
        if (messages) newState["errorMessages"] = messages;
        if (status) newState["requestStatus"] = status;
        return newState;
      case OPEN_MODAL:
        return {
          modalActive: true,
          errorMessages: null,
          requestStatus: STATUS_INIT,
        };
      case CLOSE_MODAL:
        return { ...state, modalActive: false };
      case CLEAR_ERRORS:
        return { ...state, errorMessages: null };
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
        payload: { messages: null, status: STATUS_WAIT },
      });
      await callback();
      dispatch({
        name,
        type: UPDATE_REQUEST_STATUS,
        payload: { messages: null, status: STATUS_OK },
      });
      if (timeout > 0) await delay(timeout);
      dispatch({ name, type: CLOSE_MODAL });
    } catch (error) {
      const messages = extractErrorMessages(error);
      dispatch({
        name,
        type: UPDATE_REQUEST_STATUS,
        payload: { messages, status: STATUS_ERROR },
      });
      await delay(1500);
      dispatch({
        name,
        type: UPDATE_REQUEST_STATUS,
        payload: { status: STATUS_INIT },
      });
    }
  };

export const setModalAction = (name, activate) => (dispatch) => {
  dispatch({ name, type: activate ? OPEN_MODAL : CLOSE_MODAL });
};

export const clearErrorsAction = (name) => (dispatch) => {
  dispatch({ name, type: CLEAR_ERRORS });
};
