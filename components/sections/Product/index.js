/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import UserProductService from "services/UserProductService";
import { useAuthStore } from "@/store/auth";
import { useProfileStore } from "@/store/profile";
import imgPlaceholder from '@/base/placeholder.png'

export default function Product({ product }) {
  const { id, name, slug, description, previousPrice, currentPrice, views, rating, available, images } = product;
  const swiperRef = useRef();

  const { isAuth, userId } = useAuthStore(state => state)
  const { basket } = useProfileStore(state => state)

  const addProduct = async (productId) => {
    if (!isAuth) {
      alert(`Необходимо войти на сайт`)
      return
    }

    if (userId && basket) {
      try {
        const { data, status } = await UserProductService.createOne(userId, basket.id, productId, 1)
        if (status == 200) {
          alert('Успешно добавлено в корзину')
        }
      } catch (error) {
        alert('Уже добавлено в корзину')
      }
    }
  }

  useEffect(() => {
    const resizeFoo = e => {
      try {
        if (swiperRef.current) {
          swiperRef.current.update()
        }
      } catch (error) {

      }
    }
    return window.removeEventListener('resize', resizeFoo)

  }, [swiperRef])

  return (
    <>
      <div className="product">
        <div className="container product__container">
          <img width={900} height={900} src={images[0] ? images[0] : imgPlaceholder.src} alt={name} className="product__img" />
          <form className="product__info">
            <div className="product__info-container">
              <h1 className="text product__info-name">{name}</h1>
              <p className="text product__info-description">
                {description}
              </p>
              <h3 className="text product__info-price-prev">{`${previousPrice} руб.`}</h3>
              <h2 className="text product__info-price-current mb-3">{`${currentPrice} руб.`}</h2>
              <button onClick={() => addProduct(id)} type="button" className="btn btn-outline-primary product__info-submit">Добавить в корзину</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
