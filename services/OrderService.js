import $api from "@/http/index";

export default class OrderService {

  static async getAll() {
    return $api.get(`/orders`)
  }

  static async createOne({
    userName,
    userEmail
  }) {
    return $api.post(`/orders`, {
      userName,
      userEmail
    })
  }


}