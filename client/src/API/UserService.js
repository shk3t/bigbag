import { authApi } from "../api";

export default class UserService {
  static async getAuthenticatedUser() {
    const response = await authApi.get("/api/users/authenticated");
    return response.data;
  }
}
