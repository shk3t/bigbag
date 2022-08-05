import axios from "axios";
import { removeAccessToken, setAccessToken } from "../utils/accessToken";

export default class AuthService {
  static async register(credentials) {
    const response = await axios.post("/api/register", credentials);
    setAccessToken(response.data.access_token);
  }
  static async login(credentials) {
    const response = await axios.post("/api/login", credentials);
    setAccessToken(response.data.access_token);
  }
  static async logout() {
    await axios.post("api/logout");
    removeAccessToken();
  }
  static async refreshTokens() {
    const response = await axios.post(`/api/tokens/refresh`, {
      withCredentials: true,
    });
    setAccessToken(response.data.access_token);
  }
}
