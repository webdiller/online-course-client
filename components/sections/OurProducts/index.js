import Product from "@/components/shared/Produt"

export default function OurProducts({ products }) {
  return (
    <div className="our-products">
      <div className="container our-products__container">

        <p className="title title_1 our-products__title">Наши продукты</p>
        <nav className="our-products__categories">
          <button className="text our-products__categories-item active">HOT</button>
          <button className="text our-products__categories-item">ON SALE</button>
          <button className="text our-products__categories-item">TRENDING NOW</button>
          <button className="text our-products__categories-item">NEW ARRIVAL</button>
        </nav>

        <div className="our-products__products">
          <Product imgSrc="/collection-img.jpg" name="pastel Long Sleeve" previusPrice="$220" currentPrice="$140"/>
          <Product imgSrc="/collection-img.jpg" name="pastel Long Sleeve" previusPrice="$220" currentPrice="$140"/>
          <Product imgSrc="/collection-img.jpg" name="pastel Long Sleeve" previusPrice="$220" currentPrice="$140"/>
          <Product imgSrc="/collection-img.jpg" name="pastel Long Sleeve" previusPrice="$220" currentPrice="$140"/>
          <Product imgSrc="/collection-img.jpg" name="pastel Long Sleeve" previusPrice="$220" currentPrice="$140"/>
          <Product imgSrc="/collection-img.jpg" name="pastel Long Sleeve" previusPrice="$220" currentPrice="$140"/>
        </div>

      </div>
    </div>
  )
}
