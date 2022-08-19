import axios from "axios";
import { logoutAction, refreshTokensAction } from "./reducers/authReducer";
import { BASE_URL } from "./consts";

let store;

export const injectStore = (_store) => {
  store = _store;
};

export const publicApi = axios.create({
  baseURL: BASE_URL
});

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.interceptors.request.use((config) => {
  const accessToken = store.getState().authReducer.accessToken;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

authApi.interceptors.response.use(
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
        await store.dispatch(refreshTokensAction());
        return authApi.request(originalRequest);
      } catch (exception) {
        store.dispatch(logoutAction());
      }
    } else {
      throw error;
    }
  }
);
