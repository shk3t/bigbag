import axios from "axios";

class ImgService {
  static async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return response.data;
  }
}

export default ImgService;
