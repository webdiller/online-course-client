import { routes } from '@/base/routes';
import { getLayout } from '@/components/layouts/DefaultLayout';
import { Forgot } from '@/sections/Auth'
import Breadcrumbs from '@/sections/Breadcrumbs';
import UseForgot from 'hooks/UseForgot';
import Head from 'next/head'

const ForgotPage = () => {

  const { handler, setEmail, error } = UseForgot();

  return (
    <>
      <Head>
        <title>Восстановление пароля</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs routes={routes.forgot} />
      <Forgot
        handler={handler}
        setEmail={setEmail}
        error={error}
        innerLinkHref="/auth/registration"
        submitText="Восстановить пароль"
        disablePassword
        innerLinkTitle="Еще нет аккаунта? Зарегистрироваться"
      />
    </>
  )
}

ForgotPage.getLayout = getLayout
export default ForgotPage