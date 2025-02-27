import axios, { AxiosInstance } from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com"

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000
})

// TODO: Agregar la logica para insertar el token en la solicitud
api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// TODO: Agregar la logica adicional para retornar respuestas
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
