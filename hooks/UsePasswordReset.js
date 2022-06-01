import { useState } from "react"
import AuthService from "services/AuthService";
import { useRouter } from 'next/router'

import { useAuthStore } from "@/store/auth";

export default function UsePasswordReset(resetPasswordLink) {

  const { userIdSet, authSet, userEmailSet } = useAuthStore(state => state)

  const router = useRouter()

  const [error, setError] = useState(null)
  const [password, passwordSet] = useState("");
  const [confirmPassword, confirmPasswordSet] = useState("");

  const handler = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError('Введите пароль')
      return
    }
    if (password.length <= 4 || confirmPassword.length <= 4) {
      setError('Длинна пароля не может быть меньше 5 символов')
      return
    }

    if (password !== confirmPassword) {
      setError('Пароли не совападают')
      return
    }

    try {
      const { data: { id, email, tokens: { accessToken } }, status } = await AuthService.forgotPasswordReset(resetPasswordLink, password, confirmPassword);
      localStorage.setItem('token', accessToken)
      authSet(true)
      userIdSet(id)
      userEmailSet(email)
      alert(`Пароль успешно сброшен`)
      setTimeout(() => {
        router.push('/cabinet')
      }, 2000);
    } catch (error) {
      const { data: { message } } = error.response
      setError(message)
    }
  }

  return (
    {
      handler,
      error, setError,
      password, passwordSet,
      confirmPassword, confirmPasswordSet
    }
  )
}
