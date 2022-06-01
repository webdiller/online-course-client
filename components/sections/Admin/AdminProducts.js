import React, { useEffect, useState } from 'react'
import ProductService from 'services/ProductService'
import imgPlaceholder from '@/base/placeholder.png'
import Link from "next/link";

export default function AdminProducts() {

  const [products, productsSet] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data, status } = await ProductService.getAll({ take: 1000000 })
        productsSet(data)
      } catch (error) {
        alert(`Непредвиденна ошибка`)
      }
    }
    getProducts()
  }, [])

  return (
    <div className="admin-products">
      <div className="container admin-products__container">
        <p className="admin-products__title">Список курсов</p>

        <div className="admin-products__products">
          {products.map((product) => {
            const {
              id,
              category,
              available,
              currentPrice,
              description,
              images,
              name,
              previousPrice,
              rating,
              slug
            } = product;
            return (
              <div key={id} className="admin-products__product">
                <img src={images[0]} alt="products" className="admin-products__img" />

                <div className="admin-products__group ui-input">
                  <label className="text ui-input__label">Название: {name}</label>
                </div>

                <div className="admin-products__group ui-input">
                  <label className="text ui-input__label">Цена: {currentPrice}</label>
                </div>

                <Link href={`/admin/products/${id}/edit`}><a className="btn btn-outline-dark admin-products__edit">Редактировать</a></Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
