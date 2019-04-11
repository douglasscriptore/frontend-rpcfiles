import axios from 'axios'

const api = axios.create({
  baseURL: 'https://rpcfiles-backend.herokuapp.com'
})

export default api;