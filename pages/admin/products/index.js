import Head from 'next/head'
import { AdminNav, AdminProducts } from "@/sections/Admin";
import { getLayout } from '@/components/layouts/AdminLayout';
import ProductService from 'services/ProductService';

const AdminProductsPage = ({ products }) => {
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
          <AdminProducts products={products} />
        </div>
      </div>
    </>
  )
}

AdminProductsPage.getLayout = getLayout
export default AdminProductsPage

export const getServerSideProps = async () => {
  const { data: products } = await ProductService.getAll({ take: 1000000 })

  return {
    props: {
      products
    }
  }
}
