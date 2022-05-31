import $api from "@/http/index";

export default class ColorService {
  static async getAll() {
    return $api.get(`/colors`)
  }
}