import axios from "axios"

export default class ProductService {
  static async getById(id) {
    const response = await axios.get(`/api/products/${id}`)
    return response.data
  }
  static async getAll() {
    const response = await axios.get("/api/products")
    return response.data
  }
}
