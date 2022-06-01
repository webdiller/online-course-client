import $api from "@/http/index";

export default class UserService {

  static async getProfile(id) {
    return $api.get(`/users/${id}`)
  }

  static async updateInfo({id, name, phone}) {
    return $api.patch(`/users/${id}/update`, {
      name, phone
    })
  }

  static async updateBalance(userId, balance) {
    return $api.patch(`/users/${userId}/balance`, {
      balance
    })
  }

  static async resetPassword({id, currentPassword, newPassword}) {
    return $api.patch(`/users/${id}/resetPassword`, {
      currentPassword, newPassword
    })
  }
}