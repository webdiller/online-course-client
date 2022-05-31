import Profile from "@/sections/Cabinet/Profile";
import { getLayout } from "@/components/layouts/ProfileLayout";
import Head from 'next/head'
import MiddleNav from "@/sections/MiddleNav";
import Breadcrumbs from "@/sections/Breadcrumbs";
import { routes } from "@/base/routes";

const CabinetMainPage = () => {

  return (
    <>
      <Head>
        <title>Личный кабинет</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MiddleNav title="Личный кабинет" />
      <Breadcrumbs routes={routes.cainetMain} />
      <Profile />
    </>
  )
}

CabinetMainPage.getLayout = getLayout
export default CabinetMainPage

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