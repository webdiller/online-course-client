import Head from 'next/head'
import { Catalog, TopFilter } from '@/sections/Catalog'
import MiddleNav from '@/sections/MiddleNav'
import Pagination from '@/sections/Catalog/Pagination'
import ProductService from 'services/ProductService'
import { getLayout } from '@/components/layouts/DefaultLayout'
import Breadcrumbs from '@/sections/Breadcrumbs'
import { routes } from '@/base/routes'

const catalogAfterEffectsPage = ({ products, count }) => {

  return (
    <>
      <Head>
        <title>Курсы After Effects</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MiddleNav title="Курсы After Effects" />
      <Breadcrumbs routes={routes.catalogAfterEffects} />
      <TopFilter />
      <Catalog products={products} />
    </>
  )
}

catalogAfterEffectsPage.getLayout = getLayout
export default catalogAfterEffectsPage

export const getServerSideProps = async ({ query }) => {
  const { skip = 0, take, category, mostPopular,  mostPrice } = query;

  const { data: count } = await ProductService.getCount('after-effects');
  const { status, data: products } = await ProductService.getAll({ category: 'after-effects', skip, take, mostPopular, mostPrice });

  return {
    props: {
      count,
      products
    }
  }
}

