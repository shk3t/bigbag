import axios from "axios";
import api from "../api";

export default class UserService {
  static async getActiveUser(credentials) {
    const response = await api.get("/api/users/current");
    return response.data;
  }
}
