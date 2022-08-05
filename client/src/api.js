import axios from "axios";
import AuthService from "./API/AuthService";
import { logoutAction } from "./reducers/authReducer";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const api = axios.create({
  withCredentials: true,
});
export default api;

api.interceptors.request.use((config) => {
  const accessToken = store.getState().authReducer.accessToken;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      originalRequest &&
      !originalRequest._is_retry
    ) {
      originalRequest._is_retry = true;
      try {
        await AuthService.refreshTokens();
        return api.request(originalRequest);
      } catch (exception) {
        store.dispatch(logoutAction());
      }
    } else {
      throw error;
    }
  }
);
