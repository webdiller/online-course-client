import { routes } from "@/base/routes";
import { getLayout } from "@/components/layouts/ProfileLayout";
import Breadcrumbs from "@/sections/Breadcrumbs";
import CabinetCart from "@/sections/Cabinet/CabinetCart";
import MiddleNav from "@/sections/MiddleNav";
import Head from 'next/head'
import { useEffect } from "react";
import { useAuthStore } from "@/store/auth";
import { useProfileStore } from "@/store/profile";

const CabinetCartPage = () => {

  const { userId } = useAuthStore(state => state)
  const { basket, getProfile } = useProfileStore(state => state)

  useEffect(() => {
    getProfile(userId)
  }, [getProfile, userId])

  return (
    <>
      <Head>
        <title>Мои курсы</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MiddleNav title="Мои курсы" />
      <Breadcrumbs routes={routes.cainetCart} />
      <CabinetCart basket={basket} />
    </>
  )
}

CabinetCartPage.getLayout = getLayout
export default CabinetCartPage

export const getServerSideProps = async ({ req }) => {
  if (!req.cookies.refreshToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
      props: {},
    };
  } else {
    return {
      props: {
        refreshToken: null
      }
    }
  }
}