import Head from 'next/head'
import Breadcrumbs from '@/sections/Breadcrumbs'
import { routes } from '@/base/routes'
import MiddleNav from '@/sections/MiddleNav'
import Product from '@/sections/Product'
import ProductService from 'services/ProductService'
import { getLayout } from '@/components/layouts/DefaultLayout'

const ProductPage = ({ product }) => {
  return (
    <>
      <Head>
        <title>Курс</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MiddleNav title={product.name} />
      <Breadcrumbs productId={product.id} productName={`Курс ${product.name}`} routes={routes.productPage} />
      <Product product={product} />
    </>
  )
}


export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const { status, data: product } = await ProductService.getById(id);

  return {
    props: {
      product
    }
  }
}

ProductPage.getLayout = getLayout
export default ProductPage