import AuthService from "../API/AuthService";
import UserService from "../API/UserService";
import { extractErrorMessages } from "../utils/error";

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const initialState = { authUser: null, authErrorMessages: null };

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        authUser: action.payload.user,
        authErrorMessages: action.payload.messages,
      };
    case LOGIN:
      return {
        authUser: action.payload.user,
        authErrorMessages: action.payload.messages,
      };
    case LOGOUT:
      return { authUser: null, authErrorMessages: null };
    default:
      return state;
  }
}

export const registerAction = (credentials) => async (dispatch) => {
  try {
    await AuthService.register(credentials);
    const user = await UserService.getAuthenticatedUser();
    dispatch({ type: REGISTER, payload: { user, messages: null } });
  } catch (error) {
    const messages = extractErrorMessages(error)
    dispatch({ type: REGISTER, payload: { user: null, messages } });
  }
};

export const loginAction = (credentials) => async (dispatch) => {
  try {
    await AuthService.login(credentials);
    const user = await UserService.getAuthenticatedUser();
    dispatch({ type: LOGIN, payload: { user, messages: null } });
  } catch (error) {
    const messages = extractErrorMessages(error)
    dispatch({ type: LOGIN, payload: { user: null, messages } });
  }
};

export const logoutAction = () => async (dispatch) => {
  await AuthService.logout();
  dispatch({ type: LOGOUT });
};
