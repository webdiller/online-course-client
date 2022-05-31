/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import clsx from 'clsx';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
// TODO: Сделать отображение плейсхолдера
import imgPlaceholder from "@/base/placeholder.png";

export default function Product({ id, name, rating, images, stars, views, previusPrice, currentPrice, classNames }) {

  const ratingArr = []
  for (let x = 1; x < 6; x++) {
    x > rating ? ratingArr.push(false) : ratingArr.push(true)
  }

  return (
    <div className={clsx('shared-product', classNames && classNames)}>
      <div className="shared-product__container">
        <Link href={`/product/${id}`} passHref><a className="shared-product__link"></a></Link>

        <img
          className="shared-product__img shared-product__img_catalog"
          alt={name}
          src={images[0]}
        />
        <div className="shared-product__content">
        <span className="shared-product__views">Популярность: {views}</span>
          <h3 className="shared-product__name">{name} </h3>
          <div className="shared-product__stars">
            {ratingArr.map((el, indx, arr) => (
              el === true
                ? (<AiFillHeart key={indx} className="shared-product__star active" />)
                : (<AiOutlineHeart key={indx} className="shared-product__star" />)
            )
            )}
          </div>
          <div className="shared-product__prices">
            <p className="shared-product__price shared-product__price_previus">{previusPrice}</p>
            <p className="shared-product__price shared-product__price_current">{currentPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}