import axios from "axios";

export default class AuthService {
  static async register(credentials) {
    const response = await axios.post("/api/register", credentials);
    return response.data;
  }
  static async login(credentials) {
    const response = await axios.post("/api/login", credentials);
    return response.data;
  }
  static async logout() {
    await axios.post("api/logout");
  }
  static async refreshTokens() {
    const response = await axios.post(`/api/tokens/refresh`, {
      withCredentials: true,
    });
    return response.data;
  }
}
