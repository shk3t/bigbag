import axios from "axios";

import api, { API_URL } from "../api";

export default class ProductService {
  static async getAllProducts() {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  }
  static async getProduct(id) {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  }
  static async createProduct(product) {
    const response = await api.post("/products", product);
    return response.data;
  }
  static async updateProduct(id, newData) {
    const response = await api.put(`/products/${id}`, newData);
    return response.data;
  }
  static async deleteProduct(id) {
    await api.delete(`products/${id}`);
  }

  static async uploadImage(productId, newImage) {
    // TODO realize how to use FormData
    const formData = newImage;
    await api.put(`/products/image/${productId}`, formData);
  }
  static async deleteImage(productId) {
    await api.delete(`/products/image/${productId}`);
  }
}
