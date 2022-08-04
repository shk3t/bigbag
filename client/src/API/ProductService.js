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
  static async createProduct(product) {
    const response = await api.post("/api/products", product);
    return response.data;
  }
  static async updateProduct(id, newData) {
    const response = await api.put(`/api/products/${id}`, newData);
    return response.data;
  }
  static async deleteProduct(id) {
    await api.delete(`/api/products/${id}`);
  }

  static async uploadImage(productId, newImage) {
    // TODO realize how to use FormData
    const formData = newImage;
    await api.put(`/api/products/image/${productId}`, formData);
  }
  static async deleteImage(productId) {
    await api.delete(`/api/products/image/${productId}`);
  }
}
