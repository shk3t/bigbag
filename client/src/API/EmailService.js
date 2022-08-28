import { publicApi } from "../api";

export default class EmailService {
  static async requestCall(data) {
    const response = await publicApi.post("/api/call-request", data);
    return response.data;
  }
}
