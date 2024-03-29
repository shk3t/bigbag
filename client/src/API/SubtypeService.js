import { publicApi, authApi } from "../api";

export default class SubtypeService {
  static async getAllSubtypes(type) {
    const response = await publicApi.get(`/api/subtypes/${type}`);
    return response.data;
  }
  static async createSubtype(type, data) {
    const response = await authApi.post(`/api/subtypes/${type}`, data);
    return response.data;
  }
  static async updateSubtype(type, subtype, data) {
    const response = await authApi.put(`/api/subtypes/${type}/${subtype}`, data);
    return response.data;
  }
  static async deleteSubtype(type, subtype) {
    await authApi.delete(`/api/subtypes/${type}/${subtype}`);
  }
}
