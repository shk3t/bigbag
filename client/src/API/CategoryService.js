import axios from "axios";

import api, { API_URL } from "../api";

export default class CategoryService {
  static async getAllCategories() {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  }
  static async getCategory(id) {
    const response = await axios.get(`${API_URL}/categories/${id}`);
    return response.data;
  }
  static async createCategory(name) {
    const response = await api.post("categories", { name });
    return response.data;
  }
  // TODO code this endpoint on the backend
  static async updateCategory(id, newName) {
    const response = await api.put(`categories/${id}`, { name: newName });
    return response.data;
  }
  static async deleteCategory(id) {
    await api.delete(`api/categories/${id}`);
  }
}
