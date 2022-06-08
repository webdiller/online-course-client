import Welcome from '@/sections/Welcome'
import Head from 'next/head'
import Reviews from '@/sections/Reviews'
import { getLayout } from '@/components/layouts/DefaultLayout'
import About from '@/sections/About'
import WhatYouWillLearn from '@/sections/WhatYouWillLearn'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Описание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Reviews />
      <Welcome />
      <About />
      <WhatYouWillLearn />
    </>
  )
}

HomePage.getLayout = getLayout
export default HomePage