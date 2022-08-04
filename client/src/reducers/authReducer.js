import AuthService from "../API/AuthService";
import UserService from "../API/UserService";

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export function authReducer(state = { activeUser: null }) {
  switch (action.type) {
    case REGISTER:
      return {
        activeUser: action.payload.user,
        errorMessage: action.payload.error,
      };
    case LOGIN:
      return { activeUser: action.payload };
    case LOGOUT:
      return { activeUser: null };
    default:
      return state;
  }
}

export const registerAction = (credentials) => async (dispatch) => {
  const error = null;
  try {
    await AuthService.register(credentials);
    const user = await UserService.getActiveUser();
  } catch (exception) {
    error = exception;
  }
  dispatch({ type: REGISTER, payload: { user, error } });
};

export const loginAction = (credentials) => async (dispatch) => {
  await AuthService.login(credentials);
  const user = await UserService.getActiveUser();
  dispatch({ type: LOGIN, payload: user });
};

export const logoutAction = (credentials) => async (dispatch) => {
  await AuthService.logout();
  dispatch({ type: LOGOUT });
};
