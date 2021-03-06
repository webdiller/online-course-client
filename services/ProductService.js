import $api from "@/http/index";

export default class ProductService {

  static async getAll({ skip = 0, take = 100, category, mostPopular, mostPrice } = {}) {
    return $api.get(`/products`, {
      params: {
        skip,
        take,
        category,
        mostPopular,
        mostPrice
      }
    })
  }

  static async getById(id) {
    return $api.get(`/products/${id}`)
  }

  static async getCount(slug) {
    return $api.get(`/products/count/${slug}`)
  }

  static async createOne({name, description, previousPrice, currentPrice, rating, available, categoryId, mainImg, link}) {
    return $api.post(`/products`, {
      name, description, previousPrice, currentPrice, rating, available, categoryId, mainImg, link
    })
  }

  static async updateOne({id, name, description, previousPrice, currentPrice, rating, available, categoryId, mainImg, link}) {
    return $api.patch(`/products/${id}`, {
      name, description, previousPrice, currentPrice, rating, available, categoryId, mainImg, link
    })
  }

  static async deleteOne(id) {
    return $api.delete(`/products/${id}`, {
      id
    });
  }

}