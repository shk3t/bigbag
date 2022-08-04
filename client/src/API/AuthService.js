import axios from "axios";
import { saveAccessToken } from "../api";

export default class AuthService {
  static async register(credentials) {
    await axios.post("/api/register", credentials);
    saveAccessToken(response.data.access_token);
  }
  static async login(credentials) {
    await axios.post("/api/login", credentials);
    saveAccessToken(response.data.access_token);
  }
  static async logout() {
    localStorage.removeItem("access_token");
    // TODO remove cookie
    document.cookie = "refresh_token=; max-age=-1";
    // TODO update isAuth value
  }
}
