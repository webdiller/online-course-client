/*
  router.get('/:id', authMIddleware, userProductController.getUserProducts)
  router.post('/:id', authMIddleware, userProductController.createOne)
  router.delete('/:id', authMIddleware, userProductController.removeAllProducts)
  router.delete('/:id/one-product', authMIddleware, userProductController.removeOneProduct)
*/

import $api from "../http";

export default class UserProductService {
  static async getUserProducts(userId) {
    return $api.get(`/userProducts/${userId}`)
  }

  static async createOne(userId, basketId, productId) {
    return $api.post(`/userProducts/${userId}`, {
      basketId,
      productId
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