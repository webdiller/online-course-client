import $api from "@/http/index";

export default class AuthService {

  static async registerByEmail(email, password) {
    return $api.post('/auth/registerByEmail', {
      email,
      password
    })
  }

  static async loginByEmail(email, password) {
    return $api.post('/auth/loginByEmail', {
      email,
      password
    })
  }

  static async logout() {
    localStorage.removeItem('token')
    return $api.post('/auth/logout')
  }

  static async refresh() {
    return $api.get('/auth/refresh', {
      withCredentials: true,
      baseURL: process.env.API
    })
  }

  static async activateLinkByEmail(activationLink) {
    return $api.post(`/auth/activateLinkByEmail/${activationLink}`)
  }

  static async forgotPassword(email) {
    return $api.post(`/auth/forgotPassword/`, {
      email
    })
  }

  static async forgotPasswordLinkCheck(resetPasswordLink) {
    return $api.get(`/auth//forgotPassword/${resetPasswordLink}/check`)
  }

  static async forgotPasswordReset(resetPasswordLink, newPassword, newPasswordConfirm) {
    return $api.post(`/auth/forgotPassword/${resetPasswordLink}`, {
      newPassword,
      newPasswordConfirm
    })
  }
}