import { publicApi, authApi } from "../api";

export default class ProductService {
  static async getAllProducts(params = null) {
    const response = await publicApi.get("/api/products", { params });
    return response.data;
  }
  static async getProduct(id) {
    const response = await publicApi.get(`/api/products/${id}`);
    return response.data;
  }
  static async createProduct(data) {
    const response = await authApi.post("/api/products", data);
    return response.data;
  }
  static async updateProduct(id, data) {
    const response = await authApi.put(`/api/products/${id}`, data);
    return response.data;
  }
  static async deleteProduct(id) {
    await authApi.delete(`/api/products/${id}`);
  }

  static async uploadImage(productId, image) {
    const formData = new FormData();
    formData.append("image", image);
    const response = await authApi.put(
      `/api/products/${productId}/image`,
      formData
    );
    return response.data;
  }
  static async deleteImage(productId) {
    await authApi.delete(`/api/products/${productId}/image`);
  }
}
