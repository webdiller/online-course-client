import $api from "@/http/index";

export default class ProductService {
  static async getAll({ skip = 0, take = 10, category, mostPopular, mostSize, mostPrice } = {}) {
    return $api.get(`/products`, {
      params: {
        skip,
        take,
        category,
        mostPopular,
        mostSize,
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

  static async createOne({name, description, collection, previousPrice, currentPrice, quantity, rating, available, sizes, colors, categoryId}) {
    return $api.post(`/products`, {
      name, description, collection, previousPrice, currentPrice, quantity, rating, available, sizes, colors, categoryId
    })
  }

  static async updateOne({id, name, description, collection, previousPrice, currentPrice, quantity, rating, available, sizes, colors, categoryId}) {
    return $api.patch(`/products/${id}`, {
      name, description, collection, previousPrice, currentPrice, quantity, rating, available, sizes, colors, categoryId
    })
  }


}