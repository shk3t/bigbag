import { publicApi, withCredentialsApi } from "../api";

export default class AuthService {
  static async register(credentials) {
    const response = await publicApi.post("/api/register", credentials);
    return response.data;
  }
  static async login(credentials) {
    const response = await publicApi.post("/api/login", credentials);
    return response.data;
  }
  static async logout() {
    await publicApi.post("api/logout");
  }
  static async refreshTokens() {
    const response = await withCredentialsApi.post("/api/tokens/refresh");
    return response.data;
  }
}
