import axios from 'axios'
import {JWT_TOKEN} from "../utils/Utils";

axios.defaults.headers.common['Authorization'] = JWT_TOKEN ? `Bearer ${JWT_TOKEN}` : ''

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    return response
  },

  (error) => {
    return Promise.reject(error)
  },
)

export default instance
