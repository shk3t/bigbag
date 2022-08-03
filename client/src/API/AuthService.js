import axios from "axios";
import { saveAccessToken } from "../api";

export default class AuthService {
  static async register(userData) {
    const response = await axios.post("/api/register", userData);
    saveAccessToken(response.data.access_token);
    return response
  }
  static async login(userData) {
    const response = await axios.post("/api/login", userData);
    saveAccessToken(response.data.access_token);
    return response;
  }
  static async logout() {
    localStorage.removeItem("access_token");
    // TODO remove cookie
    document.cookie = "refresh_token=; max-age=-1";
    // TODO update isAuth value
  }
}
