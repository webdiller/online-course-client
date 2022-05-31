import Head from 'next/head'
import { AdminNav, AdminProducts } from "@/sections/Admin";
import { getLayout } from '@/components/layouts/AdminLayout';

const AdminProductsPage = () => {
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
          <AdminProducts />
        </div>
      </div>
    </>
  )
}

AdminProductsPage.getLayout = getLayout
export default AdminProductsPage