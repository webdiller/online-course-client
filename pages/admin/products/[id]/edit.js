import Head from 'next/head'
import { AdminEditProducts, AdminNav } from "@/sections/Admin";
import { getLayout } from '@/components/layouts/AdminLayout';
import ProductService from 'services/ProductService';

const AdminProductEditPage = ({ product }) => {
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
          <AdminEditProducts product={product} />
        </div>
      </div>
    </>
  )
}

AdminProductEditPage.getLayout = getLayout
export default AdminProductEditPage


export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const { data } = await ProductService.getById(id)
  return {
    props: {
      product: data
    }
  }
}
