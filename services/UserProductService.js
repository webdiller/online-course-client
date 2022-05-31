/*
  router.get('/:id', authMIddleware, userProductController.getUserProducts)
  router.post('/:id', authMIddleware, userProductController.createOne)
  router.put('/:id', authMIddleware, userProductController.updateQuantity)
  router.delete('/:id', authMIddleware, userProductController.removeAllProducts)
  router.delete('/:id/one-product', authMIddleware, userProductController.removeOneProduct)
*/

import $api from "../http";

export default class UserProductService {
  static async getUserProducts(userId) {
    return $api.get(`/userProducts/${userId}`)
  }

  static async createOne(userId, basketId, productId, quantity, colorId, sizeId) {
    return $api.post(`/userProducts/${userId}`, {
      basketId,
      productId,
      quantity,
      colorId,
      sizeId
    })
  }

  static async updateQuantity(userId, basketId, productId, quantity, colorId, sizeId) {
    return $api.patch(`/userProducts/${userId}`, {
      basketId,
      productId,
      quantity,
      colorId,
      sizeId
    })
  }

  static async removeOneProduct(userId, userProductId) {
    return $api.delete(`/userProducts/${userId}`, {
      data: {
        userProductId
      }
    })
  }
}