import axios from "axios";
import { API_URL, saveAccessToken } from "../api";

export default class AuthService {
  static async register(name, email, password) {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    saveAccessToken(response.data.access_token);
  }
  static async login(email, password) {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    saveAccessToken(response.data.access_token);
  }
  static async logout() {
    localStorage.removeItem("access_token");
    // TODO remove cookie
    document.cookie = "refresh_token=; max-age=-1"
    // TODO update isAuth value
  }
}
