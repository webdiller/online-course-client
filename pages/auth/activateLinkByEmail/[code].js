import { Auth } from '@/sections/Auth'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect } from 'react'

import AuthService from 'services/AuthService'
import { getLayout } from '@/components/layouts/DefaultLayout';
import Breadcrumbs from '@/sections/Breadcrumbs';
import { routes } from '@/base/routes';

const ActivateLinkByEmail = ({ code }) => {
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await AuthService.activateLinkByEmail(code)
        window.location.href = `${process.env.HOST}/cabinet`
      } catch (error) {
        alert(`Аккаунт уже активирован`)
        // router.push('/cabinet')
      }
    }
    getData()
  }, [code, router])

  return (
    <>
      <Head>
        <title>Активация</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs routes={routes.activateAccount} />
      <Auth
        title="Активация..."
        innerLinkTitle=""
        showForm={false}
      />
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { code } = ctx.query;
  return {
    props: {
      code
    }
  }
}

ActivateLinkByEmail.getLayout = getLayout
export default ActivateLinkByEmail