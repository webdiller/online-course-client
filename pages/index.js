import Welcome from '@/sections/Welcome'
import Head from 'next/head'
import Reviews from '@/sections/Reviews'
import { getLayout } from '@/components/layouts/DefaultLayout'
import About from '@/sections/About'
import WhatYouWillLearn from '@/sections/WhatYouWillLearn'
import ProductService from 'services/ProductService'
import Faq from '@/sections/Faq'

const HomePage = ({ products }) => {
  console.log(products);
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Reviews products={products} />
      <Welcome />
      <About />
      <WhatYouWillLearn />
      <Faq />
    </>
  )
}

HomePage.getLayout = getLayout
export default HomePage

export const getServerSideProps = async ({ query }) => {
  const { skip = 0, take, category, mostPopular, mostPrice } = query;
  const { status, data: products } = await ProductService.getAll({ category: 'free', skip, take, mostPopular, mostPrice });

  return {
    props: {
      products
    }
  }
}

