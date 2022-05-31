import axios from 'axios'

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.API
})

if (typeof window !== 'undefined') {
  $api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  })

  $api.interceptors.response.use((config) => {
    return config
  }, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const { data } = await axios.get(`/auth/refresh`, {
          withCredentials: true,
          baseURL: process.env.API
        })
        localStorage.setItem('token', data.tokens.accessToken)
        return $api.request(originalRequest)
      } catch (error) {
      }
    }
    throw error
  })
}

export default $api
