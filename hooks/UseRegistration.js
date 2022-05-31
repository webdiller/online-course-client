import { useState } from "react"
import AuthService from "services/AuthService";
import { useRouter } from 'next/router'

export default function useRegistration() {

  const router = useRouter()

  const [error, setError] = useState(null)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handler = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await AuthService.registerByEmail(email, password);
      if (status === 200) {
        const { tokens: { accessToken } } = data;
        localStorage.setItem('token', accessToken)
        setError(null)
        router.push('/auth/success')
      }
    } catch (error) {
      const { status, data: {message} } = error.response;
      setError(message)
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
