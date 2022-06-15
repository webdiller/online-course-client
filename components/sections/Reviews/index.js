/* eslint-disable @next/next/no-img-element */
import { Pagination } from "swiper";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import imgPlaceholder from '@/base/placeholder.png'

export default function Reviews({ products }) {
  return (
    <div className="reviews">
      <div className="reviews__container">
        <div className="reviews__top">
          <h1 className="reviews__title">Бесплатные видеокурсы</h1>
        </div>

        <Swiper
          className="reviews__swiper"
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: '.reviews__pagination'
          }}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            576: {
              spaceBetween: 15,
              slidesPerView: 3,
            },
            991: {
              spaceBetween: 20,
              slidesPerView: 4,
            },
            1200: {
              spaceBetween: 25,
              slidesPerView: 5,
            },
          }}>
          {products.map((product => {
            const { id, mainImg, name } = product;
            return (
              <SwiperSlide
                key={id}
                className="reviews__item">
                <div className="card">
                  <img style={{ padding: '10px' }} src={mainImg ? mainImg : imgPlaceholder.src} alt="products" className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">{name}</p>
                  </div>
                  <div className="card-body">
                    <Link href={`/product/${id}`}><a className="card-link">Подробнее</a></Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          }))}
        </Swiper>

      </div>
    </div>
  )
}
