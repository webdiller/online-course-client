import Link from "next/link";
import { CgCloseO } from 'react-icons/cg';
import { useAuthStore } from "@/store/auth";
import { useProfileStore } from "@/store/profile";
import UserProductService from "services/UserProductService";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import imgPlaceholder from '@/base/placeholder.png'

export default function CabinetCart({ basket }) {
  const router = useRouter()

  const { userId } = useAuthStore(state => state)
  const {
    userName, userNameSet,
    userEmail, userEmailSet,
    userCity, userCitySet,
    userStreet, userStreetSet,
    userPostCode, userPostCodeSet,
    userPhone, userPhoneSet,
    userCurrentPassword, userCurrentPasswordSet,
    userNewPassword, userNewPasswordSet,

    getProfile,
    updateInfo,
  } = useProfileStore(state => state)

  const deleteProduct = async (userProductId) => {
    if (userId) {
      try {
        const { data, status } = await UserProductService.removeOneProduct(userId, userProductId);
        const deteletProductId = data.id;
        const filteredProducts = basketState.userProducts.filter(product => product.id !== deteletProductId)
        basketStateSet({ ...basketState, userProducts: filteredProducts })
      } catch (error) {
        console.log(error);
      }
    }
  }

  const [basketState, basketStateSet] = useState([])
  const [basketCount, basketCountSet] = useState(0)

  useEffect(() => {
    basketStateSet(basket)
  }, [basket])

  useEffect(() => {
    if (basketState && basketState.userProducts && basketState.userProducts.length > 0) {
      let total = 0;
      basketState.userProducts.forEach(productItem => {
        const { quantity, product: { name, currentPrice } } = productItem;
        total += (currentPrice * quantity)
      })
      basketCountSet(total)
    }
  }, [basketState])

  return (
    <div className="cabinet-cart">
      <div className="container cabinet-cart__container">
        <div className="cabinet-cart__product-and-actions">

          <div className="cabinet-cart__products">

            {basketState && basketState.userProducts && basketState.userProducts.length > 0 ?
              basketState.userProducts.map(product => {
                const {
                  productId,
                  quantity: quantityUserProduct,
                  id: userProductId,
                  product: {
                    available,
                    collection,
                    currentPrice,
                    images,
                    name,
                    previousPrice,
                    quantity: quantityCurrentProduct,
                    rating,
                    slug,
                    views
                  }
                } = product;

                return (
                  <div key={userProductId} className="cabinet-cart__product">
                    {(images && images.length > 0) ? (
                      <img src={images[0]} alt="product" className="cabinet-cart__product-img" />
                    ) : (
                      <img src={imgPlaceholder.src} alt="product" className="cabinet-cart__product-img" />
                    )}
                    <div className="cabinet-cart__product-content">
                      <button onClick={() => deleteProduct(userProductId)} className="reset-btn cabinet-cart__product-close"><CgCloseO /></button>
                      <p className="text cabinet-cart__product-name">{name}</p>
                      <div className="cabinet-cart__product-characteristics">
                        <div className="cabinet-cart__product-characteristic">
                          <p className="text cabinet-cart__product-characteristic-key">ЦЕНА:</p>
                          <p className="text cabinet-cart__product-characteristic-value">${currentPrice} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              : (
                <p className="cabinet-cart__title">Нет продуктов</p>
              )
            }
          </div>

          {basketState && basketState.userProducts && basketState.userProducts.length > 0 && (
            <div className="cabinet-cart__actions">
              <button className="btn btn-outline-danger cabinet-cart__actions-item">Удалить все товары</button>
            </div>
          )}
        </div>

        {basketState && basketState.userProducts && basketState.userProducts.length > 0 && (

          <div className="cabinet-cart__info">
            <form className="cabinet-cart__info-item">
              <div className="cabinet-cart__billing">
                <p className="cabinet-cart__billing-title">Адрес доставки</p>
                <Link href="/cabinet#contactData"><a className="cabinet-cart__billing-subtitle">Изменить данные</a></Link>

                <div className="cabinet-cart__billing-group ui-input">
                  <label className="text ui-input__label">Город</label>
                  <input readOnly defaultValue={userCity} placeholder="Город" type="text" className="ui-input__field" />
                </div>

                <div className="cabinet-cart__billing-group ui-input">
                  <label className="text ui-input__label">Улица</label>
                  <input readOnly defaultValue={userStreet} placeholder="Улица" type="text" className="ui-input__field" />
                </div>

                <div className="cabinet-cart__billing-group ui-input">
                  <label className="text ui-input__label">Индекс</label>
                  <input readOnly defaultValue={userPostCode} placeholder="Индекс" type="text" className="ui-input__field" />
                </div>

              </div>
            </form>

            <form className="cabinet-cart__info-item">
              <div className="cabinet-cart__billing">
                <p className="cabinet-cart__billing-title">Контактные данные</p>

                <div className="cabinet-cart__billing-group ui-input">
                  <label className="text ui-input__label">Email</label>
                  <input readOnly defaultValue={userEmail} placeholder="Email" type="text" className="ui-input__field" />
                </div>

                <div className="cabinet-cart__billing-group ui-input">
                  <label className="text ui-input__label">ФИО</label>
                  <input readOnly defaultValue={userName} placeholder="ФИО" type="text" className="ui-input__field" />
                </div>

                <div className="cabinet-cart__billing-group ui-input">
                  <label className="text ui-input__label">Номер телефона</label>
                  <input readOnly defaultValue={userPhone} placeholder="Номер телефона" type="text" className="ui-input__field" />
                </div>

              </div>

              <div className="cabinet-cart__total">
                {/* TODO: Зачем промеджуточная? */}
                {/* <div className="cabinet-cart__total-row">
                  <p className="cabinet-cart__total-key">ПРОМЕЖУТОЧНАЯ СУММА</p>
                  <p className="cabinet-cart__total-value">$900</p>
                </div> */}
                <div className="cabinet-cart__total-row">
                  <p className="cabinet-cart__total-key cabinet-cart__total-key_lg">ОБЩАЯ СУММА</p>
                  <p className="cabinet-cart__total-value cabinet-cart__total-value_lg">{basketCount.toLocaleString('ru-RU')} руб.</p>
                </div>
                <div className="cabinet-cart__total-separator"></div>
                <button className="ui-link ui-link_green-border cabinet-cart__total-submit">ОФОРМИТЬ ЗАКАЗ</button>
              </div>
            </form>
          </div>

        )}

      </div>
    </div>
  )
}
