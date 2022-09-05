import { authApi } from "../api";

export default class UserService {
  static async getAuthenticatedUser() {
    const response = await authApi.get("/api/users/authenticated");
    return response.data;
  }
  static async getAllUsers() {
    const response = await authApi.get("/api/users");
    return response.data
  }
  static async getUser(id) {
    const response = await authApi.get(`/api/users/${id}`);
    return response.data
  }
  static async updateUser(id, data) {
    const response = await authApi.put(`/api/users/${id}`, data);
    return response.data
  }
  static async deleteUser(id) {
    const response = await authApi.delete(`/api/users/${id}`);
    return response.data
  }
}
