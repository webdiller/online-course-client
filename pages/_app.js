import React from 'react'
import App from 'next/app'
import Script from 'next/script';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '@/styles/base.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    const getLayout = Component.getLayout || (page => page)

    return getLayout(
      <>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"></Script>
        <Component {...pageProps}></Component>
      </>
    )
  }
}

export default MyApp
