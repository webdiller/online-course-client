import { getLayout } from '@/components/layouts/DefaultLayout'
import { Waiting } from '@/sections/Auth'
import Head from 'next/head'

const InviteToEmailPage = () => {

  return (
    <>
      <Head>
        <title>Восстановление пароля</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Waiting />
    </>
  )
}

InviteToEmailPage.getLayout = getLayout
export default InviteToEmailPage