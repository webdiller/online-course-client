import Head from 'next/head'
import { AdminAddProducts, AdminNav } from "@/sections/Admin";
import { getLayout } from '@/components/layouts/AdminLayout';

const AdminProductAddPage = () => {
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
          <AdminAddProducts />
        </div>
      </div>
    </>
  )
}


AdminProductAddPage.getLayout = getLayout
export default AdminProductAddPage