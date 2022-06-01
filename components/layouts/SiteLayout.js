
import { useAuthStore } from '@/store/auth'
import { useEffect } from 'react';
import AuthService from 'services/AuthService';
import { useProfileStore } from "@/store/profile";

const SiteLayout = ({ children }) => {
  const {
    isAuth,
    userId,
    userIdSet,
    authSet,
    userEmailSet,
    authLoadingSet
  } = useAuthStore(state => state)

  const { basket, getProfile } = useProfileStore(state => state)

  useEffect(() => {
    const refresh = async () => {
      try {
        const { data: { id, email, basketId, tokens: { accessToken } }, status } = await AuthService.refresh()
        localStorage.setItem('token', accessToken)
        authSet(true)
        authLoadingSet(false)
        userIdSet(id);
        userEmailSet(email);
      } catch (error) {
        const { status } = error.response;
        authSet(false)
        authLoadingSet(false)
      }
    }
    refresh()
  }, [authLoadingSet, authSet, userEmailSet, userIdSet])

  useEffect(() => {
    if (isAuth && userId) {
      getProfile(userId)
    }
  }, [isAuth, getProfile, userId])

  return (
    <>
      <div className="site-layout">{children}</div>
    </>
  )
}

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
