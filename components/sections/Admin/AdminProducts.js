import React, { useEffect, useState } from 'react'
import ProductService from 'services/ProductService'
import imgPlaceholder from '@/base/placeholder.png'
import Link from "next/link";
import { useRouter } from 'next/router'

export default function AdminProducts({ products }) {
  const router = useRouter()

  const onDelete = async (id) => {
    try {
      const { data } = await ProductService.deleteOne(id)
      console.log(data);
      router.reload()
      alert('Успешное удаление подукта')
    } catch (error) {
      alert('Ошибка во время удаления подукта')
    }
  }

  return (
    <div className="admin-products">
      <div className="container admin-products__container">
        <p className="admin-products__title">Список курсов</p>

        <div className="admin-products__products">
          {products.map((product) => {
            const {
              id,
              category: { category: { slug: categorySlug } },
              available,
              currentPrice,
              description,
              images,
              name,
              previousPrice,
              rating,
              slug,
              mainImg,
              link
            } = product;

            return (
              <div key={id} className="admin-products__product">
                <img src={mainImg ? mainImg : imgPlaceholder.src} alt="products" className="admin-products__img" />

                <div className="admin-products__group ui-input">
                  <label className="text ui-input__label">Название: {name}</label>
                </div>

                <div className="admin-products__group ui-input mb-3">
                  <label className="text ui-input__label">Цена: {currentPrice}</label>
                </div>

                <Link href={`/product/${id}`}><a className="btn btn-outline-primary admin-products__edit mb-2">Перейти</a></Link>
                <Link href={`/admin/products/${id}/edit`}><a className="btn btn-outline-dark admin-products__edit mb-2">Редактировать</a></Link>
                <button onClick={() => onDelete(id)} className="btn btn-outline-danger  admin-products__edit">Удалить</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
