import AuthService from "services/AuthService";
import { useRouter } from 'next/router'
import { useAuthStore } from "@/store/auth";
import { useProfileStore } from "@/store/profile";

export default function useLogout() {

  const { roleSet, isAuth, isAuthLoading, authSet, authLoadingSet } = useAuthStore(state => state)
  const { userEmail, userEmailSet } = useProfileStore(state => state)

  const router = useRouter()

  const handler = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await AuthService.logout();
      if (status === 200) {
        authSet(false)
        userEmailSet("")
        roleSet("")
        router.push('/')
      }
    } catch (error) {
      authSet(false)
      userEmailSet("")
      roleSet("")
      router.push('/')
    }
  }

  return {
    handler
  }
}
