import axios from "axios";

import api from "../api";

export default class ProductService {
  static async getAllProducts() {
    const response = await axios.get("/api/products");
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
    // TODO realize how to use FormData
    const formData = image;
    await api.put(`/api/products/image/${productId}`, formData);
  }
  static async deleteImage(productId) {
    await api.delete(`/api/products/image/${productId}`);
  }
}
