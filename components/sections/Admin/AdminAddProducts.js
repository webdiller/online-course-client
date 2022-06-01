import Select from 'react-select';
import React, { useEffect, useState } from 'react'
import CategoryService from 'services/CategoryService';
import ProductService from 'services/ProductService';
import { useRouter } from 'next/router'

export default function AdminAddProducts() {

  const router = useRouter()

  const [dbCategories, dbCategoriesSet] = useState([])

  const [newProduct, newProductSet] = useState({
    name: "",
    description: "",
    previousPrice: 0,
    currentPrice: 0,
    rating: 0,
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
      const { data: { id }, status } = await ProductService.createOne({
        name: newProduct.name,
        description: newProduct.name,
        previousPrice: newProduct.previousPrice,
        currentPrice: newProduct.currentPrice,
        rating: newProduct.rating,

        available: selectPublished.value,
        categoryId: selectedCategory.categoryId
      })
      alert(`Курс успешно создан`)
      router.push(`/product/${id}`)
    } catch (error) {
      console.log(error);
      alert(`Не удалось создать курс`)
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
        <p className="admin-products__title">Добавить курс</p>

        <div className="admin-products__products">
          <form onSubmit={onSubmitHandler} className="admin-products__product">
            {/* <img src="/product.png" alt="products" className="admin-products__img" /> */}

            <div className="admin-products__group ui-input">
              <label className="text ui-input__label">Название:</label>
              <input onChange={e => newProductSet({ ...newProduct, name: e.target.value })} defaultValue={newProduct.name} type="text" className="ui-input__field" />
            </div>

            <div className="admin-products__group ui-input">
              <label className="text ui-input__label">Описание:</label>
              <input onChange={e => newProductSet({ ...newProduct, description: e.target.value })} defaultValue={newProduct.description} type="text" className="ui-input__field" />
            </div>

            <div className="admin-products__group ui-input">
              <label className="text ui-input__label">Старая цена:</label>
              <input onChange={e => newProductSet({ ...newProduct, previousPrice: e.target.value })} defaultValue={newProduct.previousPrice} type="number" className="ui-input__field" />
            </div>

            <div className="admin-products__group ui-input">
              <label className="text ui-input__label">Текущая цена:</label>
              <input onChange={e => newProductSet({ ...newProduct, currentPrice: e.target.value })} defaultValue={newProduct.currentPrice} type="number" className="ui-input__field" />
            </div>

            <div className="admin-products__group ui-input">
              <label className="text ui-input__label">Рейтинг:</label>
              <input onChange={e => newProductSet({ ...newProduct, rating: e.target.value })} defaultValue={newProduct.rating} type="text" className="ui-input__field" />
            </div>

            <div className="admin-products__group ui-input">
              <label className="text ui-input__label">Категория:</label>
              <Select
                defaultValue={selectedCategory}
                onChange={selectedCategorySet}
                options={dbCategories}
                placeholder="Выбрать категорию"
              />
            </div>

            <div className="admin-products__group ui-input">
              <label className="text ui-input__label">Статус:</label>
              <Select
                defaultValue={{ ...optionsPublished[1] }}
                onChange={selectPublishedSet}
                options={optionsPublished}
                placeholder="Выбрать тип публикации"
              />
            </div>

            <div className="admin-products__actions">
              <button type='reset' className="ui-link ui-link ui-link_red-border admin-products__submit">Отмена</button>
              <button type='submit' className="ui-link ui-link ui-link_green-border admin-products__submit">Добавить</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}