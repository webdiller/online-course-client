import Link from "next/link";
import { CgCloseO } from 'react-icons/cg';
import { useAuthStore } from "@/store/auth";
import { useProfileStore } from "@/store/profile";
import UserProductService from "services/UserProductService";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import imgPlaceholder from '@/base/placeholder.png'
import OrderService from "services/OrderService";

export default function CabinetCart({ basket }) {
  const router = useRouter()
  const { userId } = useAuthStore(state => state)
  const {
    userName, userNameSet,
    userEmail, userEmailSet,
    userPhone, userPhoneSet,
    userCurrentPassword, userCurrentPasswordSet,
    userNewPassword, userNewPasswordSet,

    getProfile,
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

  const createPayment = async (e) => {
    e.preventDefault()
    try {
      const { data: order } = await OrderService.createOne({
        userEmail,
        userName
      })
      alert("Успешно оплачено и отправлено на почту")
    } catch (error) {
    }
  }

  useEffect(() => {
    basketStateSet(basket)
  }, [basket])

  useEffect(() => {
    if (basketState && basketState.userProducts && basketState.userProducts.length > 0) {
      let total = 0;
      basketState.userProducts.forEach(productItem => {
        const { product: { currentPrice } } = productItem;
        total += (currentPrice)
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
                  id: userProductId,
                  product: {
                    available,
                    currentPrice,
                    images,
                    name,
                    previousPrice,
                    rating,
                    slug,
                    views,
                    mainImg,
                    link
                  }
                } = product;

                return (
                  <div key={userProductId} className="cabinet-cart__product">
                    <img src={mainImg ? mainImg : imgPlaceholder.src} alt="products" className="cabinet-cart__product-img" />
                    <div className="cabinet-cart__product-content">
                      <button onClick={() => deleteProduct(userProductId)} className="reset-btn cabinet-cart__product-close"><CgCloseO /></button>
                      <p className="text cabinet-cart__product-name">{name}</p>
                      <div className="cabinet-cart__product-characteristics">
                        <div className="cabinet-cart__product-characteristic">
                          <p className="text cabinet-cart__product-characteristic-key">ЦЕНА:</p>
                          <p className="text cabinet-cart__product-characteristic-value">{currentPrice} руб.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              : (
                <p className="cabinet-cart__title">Нет курсов</p>
              )
            }
          </div>
        </div>

        {basketState && basketState.userProducts && basketState.userProducts.length > 0 && (

          <div className="cabinet-cart__info">

            <form onSubmit={e => { createPayment(e) }} className="cabinet-cart__info-item">
              <div className="cabinet-cart__billing">
                <h2 className="cabinet-cart__billing-title">Контактные данные</h2>

                <div className="auth__group mb-3">
                  <label className="form-label m-0">Email</label>
                  <input readOnly defaultValue={userEmail} placeholder="Email" type="text" className="form-control" />
                </div>

                <div className="auth__group mb-3">
                  <label className="form-label m-0">ФИО</label>
                  <input readOnly defaultValue={userName} placeholder="ФИО" type="text" className="form-control" />
                </div>

                <div className="auth__group mb-3">
                  <label className="form-label m-0">Контактный телефон</label>
                  <input readOnly defaultValue={userPhone} placeholder="Контактный телефон" type="text" className="form-control" />
                </div>
              </div>
              <div className="cabinet-cart__total">
                <div className="cabinet-cart__total-row">
                  <h4 className="cabinet-cart__total-key">Сумма:</h4>
                  <h3 className="cabinet-cart__total-value">{basketCount} руб.</h3>
                </div>
                <button className="btn btn-outline-primary cabinet-cart__total-submit">Подтвердить оплату</button>
              </div>
            </form>


          </div>

        )}

      </div>
    </div>
  )
}
