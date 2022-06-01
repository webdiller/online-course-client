import { useState } from "react"
import AuthService from "services/AuthService";
import { useRouter } from 'next/router'

import { useAuthStore } from "@/store/auth";

export default function UseLogin() {

  const { authSet, authLoadingSet, userEmailSet, userIdSet } = useAuthStore(state => state)

  const router = useRouter()

  const [error, setError] = useState(null)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handler = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await AuthService.loginByEmail(email, password);

      if (status === 200) {
        const { id, email, isActivated, tokens: { accessToken } } = data;
        /** Если в ответе не 200, то нужно подтвердить аккаунт */
        if (!isActivated) {
          authSet(false)
          authLoadingSet(false)
          setError(`Подтвердите регистрацию аккаунта ${email} на почте`)
        /** Иначе, по инструкции */
        } else {
          localStorage.setItem('token', accessToken)
          authSet(true)
          userIdSet(id)
          authLoadingSet(false)
          userEmailSet(email)
          router.push('/cabinet')
          alert(`Упешный вход на сайт`)
        }
      }
    } catch (error) {
      const { status, data: { message } } = error.response;
      setError(message)
      authSet(false)
      authLoadingSet(false)
    }
  }

  return (
    {
      handler,
      setEmail,
      error,
      setPassword
    }
  )
}
