import axios from "axios";

import api from "../api";

export default class ProductService {
  static async getAllProducts(params = null) {
    const response = await axios.get("/api/products", { params });
    return response.data;
  }
  static async getProduct(id) {
    const response = await axios.get(`/api/products/${id}`);
    return response.data;
  }
  static async createProduct(data) {
    const response = await api.post("/api/products", data);
    return response.data;
  }
  static async updateProduct(id, data) {
    const response = await api.put(`/api/products/${id}`, data);
    return response.data;
  }
  static async deleteProduct(id) {
    await api.delete(`/api/products/${id}`);
  }

  static async uploadImage(productId, image) {
    const formData = new FormData()
    formData.append("image", image)
    const response = await api.put(`/api/products/${productId}/image`, formData);
    return response.data
  }
  static async deleteImage(productId) {
    await api.delete(`/api/products/${productId}/image`);
  }
}
