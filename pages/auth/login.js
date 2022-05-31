import { routes } from '@/base/routes';
import { getLayout } from '@/components/layouts/DefaultLayout';
import { Auth } from '@/sections/Auth'
import Breadcrumbs from '@/sections/Breadcrumbs';
import UseLogin from 'hooks/UseLogin'
import Head from 'next/head'

const LoginPage = () => {
  const { error, handler, setEmail, setPassword } = UseLogin();

  return (
    <>
      <Head>
        <title>Вход</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Breadcrumbs routes={routes.login} />
      <Auth
        handler={handler}
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}
        title="Вход"
        description="Введите почту и пароль входа"
        innerLinkHref="/auth/registration"
        submitText="Войти"
        innerLinkTitle="Еще нет аккаунта? Зарегистрироваться"
        innerLinkForgotHref="/auth/forgot"
        titleForgot="Забыли данные для входа?"

        emailLabel="Почта"
        passwordLabel="Пароль"
      />
    </>
  )
}

LoginPage.getLayout = getLayout
export default LoginPage