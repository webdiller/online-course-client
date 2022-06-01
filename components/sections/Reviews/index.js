/* eslint-disable @next/next/no-img-element */
import { Pagination } from "swiper";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import imgPlaceholder from '@/base/placeholder.png'

const reviews = [
  {
    id: 0,
    title: `Comfortable And met all my expectation! ordered a medium and it fit perfectly`,
    description: `
    `,
    authorImg: "/reviews/review-1.jpg",
    authorName: "Anisa Zahra",
    authorRole: "Customer"
  },
  {
    id: 1,
    title: `Comfortable And met all my expectation! ordered a medium and it fit perfectly`,
    description: `
    Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Грамматики, сих! Лучше решила жизни своего живет, себя вдали? Своих.

    `,
    authorImg: "/reviews/review-2.jpg",
    authorName: "Anisa Zahra",
    authorRole: "Customer"
  },
  {
    id: 3,
    title: `Comfortable And met all my expectation! ordered a medium and it fit perfectly`,
    description: `
    Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Грамматики, сих! Лучше решила жизни своего живет, себя вдали? Своих.

    `,
    authorImg: "/reviews/review-1.jpg",
    authorName: "Anisa Zahra",
    authorRole: "Customer"
  },
  {
    id: 4,
    title: `Comfortable And met all my expectation! ordered a medium and it fit perfectly`,
    description: `
    Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Грамматики, сих! Лучше решила жизни своего живет, себя вдали? Своих.
    `,
    authorImg: "/reviews/review-2.jpg",
    authorName: "Anisa Zahra",
    authorRole: "Customer"
  }
]

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews__container">
        <div className="reviews__top">
          <h1 className="reviews__title">Все видеокурсы</h1>
        </div>

        <Swiper
          className="reviews__swiper"
          modules={[Pagination]}
          loop={true}
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
          {reviews.map((slide => {
            const { id, title, description, authorImg, authorName, authorRole } = slide;
            return (
              <SwiperSlide
                key={id}
                className="reviews__item">
                <div className="card">
                  <img style={{ padding: '10px', opacity: .3 }} src={imgPlaceholder.src} alt="products" className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">Описание курса</p>
                  </div>
                  <div className="card-body">
                    <Link href="#"><a className="card-link">Подробнее</a></Link>
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
