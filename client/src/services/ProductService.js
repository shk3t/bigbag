import axios from "axios"

export default class ProductService {
  static async getProductById(id) {
    const response = await axios.get(`/api/products/${id}`)
    return response.data
  }
}
