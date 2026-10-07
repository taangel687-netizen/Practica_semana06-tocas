import axios from 'axios'

// Instancia de axios con la URL base de la API de prueba
const api = axios.create({ baseURL: 'https://dummyjson.com', timeout: 10000 })

// async/await (sin .then().catch()). El signal permite cancelar la petición (AbortController)
export async function getProducts(signal) {
  const { data } = await api.get('/products', { params: { limit: 20 }, signal })
  return data.products
}
