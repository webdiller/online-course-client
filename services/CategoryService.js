import $api from "@/http/index";

export default class CategoryService {
  static async getAll() {
    return $api.get(`/categories`)
  }
}