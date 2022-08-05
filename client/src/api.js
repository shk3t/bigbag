import axios from "axios";
import AuthService from "./API/AuthService";
import { getAccessToken } from "./utils/accessToken";

const api = axios.create({
  withCredentials: true,
});
export default api;

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getAccessToken()}`;
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
        // TODO process error of expired refresh token
        // TODO update isAuth if expired
        await AuthService.refreshTokens();
        return api.request(originalRequest);
      } catch (exception) {
        // TODO
      }
    } else {
      throw error;
    }
  }
);
