import axios from "axios";
import api from "../api";

export default class UserService {
  static async getAuthenticatedUser() {
    const response = await api.get("/api/users/authenticated");
    return response.data;
  }
}
