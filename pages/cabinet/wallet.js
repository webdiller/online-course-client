import { getLayout } from "@/components/layouts/ProfileLayout";
import Head from 'next/head'
import MiddleNav from "@/sections/MiddleNav";
import Breadcrumbs from "@/sections/Breadcrumbs";
import { routes } from "@/base/routes";
import Wallet from "@/sections/Cabinet/Wallet";

const CabinetMainPage = () => {

  return (
    <>
      <Head>
        <title>Кошелек</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MiddleNav title="Кошелек" />
      <Breadcrumbs routes={routes.cainetWallet} />
      <Wallet />
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