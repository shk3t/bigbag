import AuthService from "../API/AuthService";
import UserService from "../API/UserService";
import { extractErrorMessages } from "../utils/error";

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const CLEAR_ERROR_MESSAGE = "CLEAR_ERROR_MESSAGE";

const initialState = { authUser: null, errorMessages: null };

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        authUser: action.payload.user,
        accessToken: action.payload.token,
        errorMessages: action.payload.messages,
      };
    case LOGIN:
      return {
        authUser: action.payload.user,
        accessToken: action.payload.token,
        errorMessages: action.payload.messages,
      };
    case LOGOUT:
      return { authUser: null, accessToken: null, errorMessages: null };
    case CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessages: null };
    default:
      return state;
  }
}

export const registerAction = (credentials) => async (dispatch) => {
  try {
    const { user, access_token: token } = await AuthService.register(
      credentials
    );
    dispatch({ type: REGISTER, payload: { user, token, messages: null } });
  } catch (error) {
    const messages = extractErrorMessages(error);
    dispatch({
      type: REGISTER,
      payload: { user: null, token: null, messages },
    });
  }
};

export const loginAction = (credentials) => async (dispatch) => {
  try {
    const { user, access_token: token } = await AuthService.login(credentials);
    dispatch({ type: LOGIN, payload: { user, token, messages: null } });
  } catch (error) {
    const messages = extractErrorMessages(error);
    dispatch({ type: LOGIN, payload: { user: null, token: null, messages } });
  }
};

export const logoutAction = () => async (dispatch) => {
  await AuthService.logout();
  dispatch({ type: LOGOUT, payload: null });
};

export const clearErrorMessageAction = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR_MESSAGE, payload: null });
};
