import Head from 'next/head'
import { AdminAddProducts, AdminNav } from "@/sections/Admin";
import { getLayout } from '@/components/layouts/AdminLayout';
import Script from 'next/script'

const AdminProductAddPage = () => {
  return (
    <>
      <Head>
        <title>Административная панель</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script id="UPLOADCARE_PUBLIC_KEY">
        UPLOADCARE_PUBLIC_KEY=`{process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY}`;
      </Script>

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