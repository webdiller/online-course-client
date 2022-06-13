import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import CategoryService from 'services/CategoryService';
import ProductService from 'services/ProductService';

import { useRouter } from 'next/router'

export default function AdminEditProducts({ product }) {

  const router = useRouter()
  const [dbCategories, dbCategoriesSet] = useState([])

  const [newProduct, newProductSet] = useState({
    name: product.name,
    description: product.description,
    previousPrice: product.previousPrice,
    currentPrice: product.currentPrice,
    rating: product.rating,
    mainImg: product.mainImg || "",
    link: product.link || ""
  });


  const [selectedCategory, selectedCategorySet] = useState([])
  const [selectPublished, selectPublishedSet] = useState([])

  const optionsPublished = [
    { value: 'true', label: 'Опубликованный' },
    { value: 'false', label: 'Неопубликованный' },
  ]

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data: { id }, status } = await ProductService.updateOne({
        id: product.id,
        name: newProduct.name,
        description: newProduct.name,
        previousPrice: newProduct.previousPrice,
        currentPrice: newProduct.currentPrice,
        rating: newProduct.rating,
        mainImg: newProduct.mainImg,
        link: newProduct.link,

        available: selectPublished.value,
        categoryId: selectedCategory.categoryId,
      })
      alert(`Данные успешно обновлены`)
      router.push(`/product/${product.id}`)
    } catch (error) {
      console.log(error);
      alert(`Ошибка во время создания курса`)
    }
  }

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data, status } = await CategoryService.getAll();
        const filteredCategories = data.map(category => ({ label: category.name, value: category.id, categoryId: category.id }))
        dbCategoriesSet(filteredCategories)
      } catch (error) {
        console.log(error);
      }
    }
    getCategories()
  }, [])

  return (
    <div className="admin-products">
      <div className="container admin-products__container">
        <p className="admin-products__title">Редактировать курс</p>

        <div className="admin-products__form-area">
          <form onSubmit={onSubmitHandler} className="admin-products__product">

            <div className="auth__group mb-3">
              <label className="form-label mb-0">Id курса:</label>
              <input readOnly defaultValue={product.id} placeholder="Id" type="text" className="form-control" />
            </div>
            <div className="auth__group mb-3">
              <label className="form-label mb-0">Главное изображение:</label>
              <input onChange={e => newProductSet({ ...newProduct, mainImg: e.target.value })} defaultValue={newProduct.mainImg} type="text" className="form-control" />
            </div>
            <div className="auth__group mb-3">
              <label className="form-label mb-0">Ссылка на скачивание:</label>
              <input onChange={e => newProductSet({ ...newProduct, link: e.target.value })} defaultValue={newProduct.link} type="text" className="form-control" />
            </div>
            <div className="auth__group mb-3">
              <label className="form-label mb-0">Название:</label>
              <input onChange={e => newProductSet({ ...newProduct, name: e.target.value })} value={newProduct.name} type="text" className="form-control" />
            </div>
            <div className="auth__group mb-3">
              <label className="form-label mb-0">Описание:</label>
              <input onChange={e => newProductSet({ ...newProduct, description: e.target.value })} value={newProduct.description} type="text" className="form-control" />
            </div>
            <div className="auth__group mb-3">
              <label className="form-label mb-0">Старая цена:</label>
              <input onChange={e => newProductSet({ ...newProduct, previousPrice: e.target.value })} value={newProduct.previousPrice} type="number" className="form-control" />
            </div>
            <div className="auth__group mb-3">
              <label className="form-label mb-0">Текущая цена:</label>
              <input onChange={e => newProductSet({ ...newProduct, currentPrice: e.target.value })} value={newProduct.currentPrice} type="number" className="form-control" />
            </div>
            <div className="auth__group mb-3">
              <label className="form-label mb-0">Рейтинг:</label>
              <input onChange={e => newProductSet({ ...newProduct, rating: e.target.value })} value={newProduct.rating} type="number" className="form-control" />
            </div>
            <div className="admin-products__group ui-input mb-3">
              <label className="form-label mb-0">Категория:</label>
              <Select
                defaultValue={{ value: product.category.category.id, label: product.category.category.name, categoryId: product.category.category.id }}
                onChange={selectedCategorySet}
                options={dbCategories}
                placeholder="Выбрать категорию"
              />
            </div>

            <div className="admin-products__actions">
              <button type='submit' className="btn btn-outline-primary admin-products__submit">Сохранить</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}