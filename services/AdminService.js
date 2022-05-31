import $api from "@/http/index";

export default class UserService {

  static async isAdmin(id) {
    return $api.get(`/admin/${id}`)
  }
  
}