import { useState } from "react"
import AuthService from "services/AuthService";
import { useRouter } from 'next/router'


export default function UseForgot() {

  const router = useRouter()

  const [error, setError] = useState(null)
  const [email, setEmail] = useState("");

  const handler = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await AuthService.forgotPassword(email);
      router.push('/auth/resetEmailPassword/waiting')
    } catch (error) {
      const { data: { message } } = error.response;
      if (message) {
        alert(message)
      }

    }
  }

  return (
    {
      handler,
      setEmail,
      error,
    }
  )
}
