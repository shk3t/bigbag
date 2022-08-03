import axios from "axios";

import api from "../api";

export default class CategoryService {
  static async getAllCategories() {
    const response = await axios.get("/api/categories");
    return response.data;
  }
  static async getCategory(id) {
    const response = await axios.get(`/api/categories/${id}`);
    return response.data;
  }
  static async createCategory(name) {
    const response = await api.post("/api/categories", { name });
    return response.data;
  }
  // TODO code this endpoint on the backend
  static async updateCategory(id, newName) {
    const response = await api.put(`/api/categories/${id}`, { name: newName });
    return response.data;
  }
  static async deleteCategory(id) {
    await api.delete(`/api/categories/${id}`);
  }
}
