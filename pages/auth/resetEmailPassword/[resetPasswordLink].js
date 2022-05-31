import { routes } from '@/base/routes'
import { getLayout } from '@/components/layouts/DefaultLayout'
import { UpdatePassword } from '@/sections/Auth'
import Breadcrumbs from '@/sections/Breadcrumbs'
import UsePasswordReset from 'hooks/UsePasswordReset'
import Head from 'next/head'
import { useEffect } from 'react'
import AuthService from 'services/AuthService'

const ActivateLinkByEmail = ({ id, email, resetPasswordLink }) => {

  const {
    handler,
    error, setError,
    password, passwordSet,
    confirmPassword, confirmPasswordSet
  } = UsePasswordReset(resetPasswordLink)

  useEffect(() => {
    localStorage.removeItem('token')
  }, [])

  return (
    <>
      <Head>
        <title>{`Сброс пароля для аккаунта ${email}`}</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumbs routes={routes.resetPassword} />
      <UpdatePassword
        email={email}
        handler={handler}
        error={error}
        setError={setError}
        passwordSet={passwordSet}
        confirmPasswordSet={confirmPasswordSet}
      />
    </>
  )
}

ActivateLinkByEmail.getLayout = getLayout
export default ActivateLinkByEmail

/** Если ссылка рабочая, то остаемся на странице, иначе редирект */
export const getServerSideProps = async (ctx) => {
  const { resetPasswordLink } = ctx.query;
  try {
    const { data, status } = await AuthService.forgotPasswordLinkCheck(resetPasswordLink);
    return {
      props: {
        id: data.id,
        email: data.email,
        resetPasswordLink
      }
    }
  } catch (error) {
    const { data, status } = error.response;
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    }
  }

}