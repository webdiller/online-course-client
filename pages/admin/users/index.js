import Head from 'next/head'
import { AdminNav } from "@/sections/Admin";
import { getLayout } from "@/components/layouts/AdminLayout";

const AdminUsersPage = () => {
  return (
    <>
      <Head>
        <title>Административная панель</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="admin">
        <div className="admin__container">
          <AdminNav />
        </div>
      </div>
    </>
  )
}

AdminUsersPage.getLayout = getLayout
export default AdminUsersPage