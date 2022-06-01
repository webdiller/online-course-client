/* eslint-disable @next/next/no-img-element */
import Product from "@/components/shared/Produt";
import TopFilter from "./TopFilter";
import imgPlaceholder from '@/base/placeholder.png'

export default function Catalog({ products }) {
  console.log(products);
  return (
    <div className="catalog">
      <div className="container catalog__container">
        {products.map((product) => {
          const {
            id,
            name,
            slug,
            description,
            previousPrice,
            currentPrice,
            views,
            rating,
            available,
            category,
            images
          } = product;

          return (
            <Product
              views={views}
              key={id}
              id={id}
              rating={rating}
              classNames="catalog__product"
              images={images}
              name={name}
              previusPrice={`${previousPrice} руб.`}
              currentPrice={`${currentPrice} руб.`}
            />
          )
        })}

      </div>
    </div>
  )
}
