import $api from "@/http/index";

export default class SizeService {
  static async getAll() {
    return $api.get(`/sizes`)
  }
}