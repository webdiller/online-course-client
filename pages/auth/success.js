import { routes } from '@/base/routes'
import { getLayout } from '@/components/layouts/DefaultLayout'
import { Auth } from '@/sections/Auth'
import Breadcrumbs from '@/sections/Breadcrumbs'
import Head from 'next/head'

const SuccessPage = () => {

  return (
    <>
      <Head>
        <title>Подтверждение регистрации</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs routes={routes.success} />
      <Auth
        title="Подтверждение регистрации"
        description="Подтвердите аккаунт на почте"
        innerLinkHref="/auth/registration"
        submitText="Подтвердить"
        disablePassword
        innerLinkTitle={false}
        showForm={false}

        passwordLabel="Пароль подтверждения"
      />
    </>
  )
}

SuccessPage.getLayout = getLayout
export default SuccessPage