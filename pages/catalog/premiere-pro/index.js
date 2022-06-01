import Head from 'next/head'
import { Catalog, TopFilter } from '@/sections/Catalog'
import Breadcrumbs from '@/sections/Breadcrumbs'
import MiddleNav from '@/sections/MiddleNav'
import ProductService from 'services/ProductService'
import Pagination from '@/sections/Catalog/Pagination'
import { getLayout } from '@/components/layouts/DefaultLayout'
import { routes } from '@/base/routes'

const catalogPremiereProPage = ({ products, count }) => {

  return (
    <>
      <Head>
        <title>Курсы Premiere Pro</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MiddleNav title="Курсы Premiere Pro" />
      <Breadcrumbs routes={routes.catalogPremierePro} />
      <TopFilter />
      <Catalog products={products} />
    </>
  )
}

catalogPremiereProPage.getLayout = getLayout
export default catalogPremiereProPage

export const getServerSideProps = async ({ query }) => {
  const { skip = 0, take, category, mostPopular, mostPrice } = query;

  const { data: count } = await ProductService.getCount('premiere-pro');
  const { status, data: products } = await ProductService.getAll({ category: 'premiere-pro', skip, take, mostPopular, mostPrice });

  return {
    props: {
      count,
      products
    }
  }
}