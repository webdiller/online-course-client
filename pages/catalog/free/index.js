import Head from 'next/head'
import { Catalog, TopFilter } from '@/sections/Catalog'
import Breadcrumbs from '@/sections/Breadcrumbs'
import MiddleNav from '@/sections/MiddleNav'
import ProductService from 'services/ProductService'
import { routes } from '@/base/routes'
import { getLayout } from '@/components/layouts/DefaultLayout'

const catalogDavinchiPage = ({products, count }) => {
  return (
    <>
      <Head>
        <title>Бесплатные видеокурсы</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MiddleNav title="Бесплатные видеокурсы" />
      <Breadcrumbs routes={routes.catalogDavinchi} />
      <TopFilter />
      <Catalog products={products} />
    </>
  )
}

catalogDavinchiPage.getLayout = getLayout
export default catalogDavinchiPage

export const getServerSideProps = async ({ query }) => {
  const { skip = 0, take, category, mostPopular, mostPrice } = query;

  const { data: count } = await ProductService.getCount('free');
  const { status, data: products } = await ProductService.getAll({category: 'free', skip, take, mostPopular, mostPrice});

  return {
    props: {
      count,
      products
    }
  }
}