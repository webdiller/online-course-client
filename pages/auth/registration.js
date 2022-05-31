import { routes } from '@/base/routes';
import { getLayout } from '@/components/layouts/DefaultLayout';
import { Auth } from '@/sections/Auth'
import Breadcrumbs from '@/sections/Breadcrumbs';
import UseRegistration from 'hooks/UseRegistration';
import Head from 'next/head'

  const RegistrationPage = () => {

  const { error, handler, setEmail, setPassword } = UseRegistration();

  return (
    <>
      <Head>
        <title>Регистрация</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs routes={routes.registration} />
      <Auth
        handler={handler}
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}

        title="Регистрация"
        description="Заполните данные для регистрациии"
        innerLinkHref="/auth/login"
        submitText="Зарегистрироваться"
        innerLinkTitle="Уже есть аккаунт? Войти"
        emailLabel="Почта"
        passwordLabel="Пароль"
      />
    </>
  )
}

RegistrationPage.getLayout = getLayout
export default RegistrationPage