import axios from "axios";

import api from "../api";

export default class SubtypeService {
  static async getAllSubtypes(type) {
    const response = await axios.get(`/api/subtypes/${type}`);
    return response.data;
  }
  static async createSubtype(type, data) {
    const response = await api.post(`/api/subtypes/${type}`, data);
    return response.data;
  }
  static async updateSubtype(type, name, data) {
    const response = await api.put(`/api/subtypes/${type}/${name}`, data);
    return response.data;
  }
  static async deleteSubtype(type, name) {
    await api.delete(`/api/subtypes/${type}/${name}`);
  }
}
