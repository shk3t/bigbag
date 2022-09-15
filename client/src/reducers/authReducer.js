import AuthService from "../API/AuthService";

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REFRESH_TOKENS = "REFRESH_TOKENS";

const initialState = { authUser: null, accessToken: null };

export default function authReducer(state = initialState, action) {
  const { user, token } = action.payload || {};
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      return { authUser: user, accessToken: token };
    case LOGOUT:
      return initialState;
    case REFRESH_TOKENS:
      return { ...state, accessToken: token };
    default:
      return state;
  }
}

export const registerAction = (credentials) => async (dispatch) => {
  const { user, access_token: token } = await AuthService.register(credentials);
  dispatch({ type: REGISTER, payload: { user, token } });
};

export const loginAction = (credentials) => async (dispatch) => {
  const { user, access_token: token } = await AuthService.login(credentials);
  dispatch({ type: LOGIN, payload: { user, token } });
};

export const logoutAction = () => async (dispatch) => {
  await AuthService.logout();
  dispatch({ type: LOGOUT });
};

export const refreshTokensAction = () => async (dispatch) => {
  const { access_token } = await AuthService.refreshTokens();
  dispatch({ type: REFRESH_TOKENS, payload: { token: access_token } });
};
