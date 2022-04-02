import Request from './middleware/request'
import { configAPI } from '../configs/api.config'
const apiTTDB = {
  //USER
  getListProduct({ ...arg }) {
    return apiTTDB.callAPI('GET', '/api/v1/product', { ...arg })
  },

  getListCategory({ ...arg }) {
    return apiTTDB.callAPI('GET', '/api/v1/category', { ...arg })
  },

  getDetail({ ...arg }) {
    return apiTTDB.callAPI('GET', `/api/v1/product/detail?code=${arg.code}`)
  },

  orderProduct({ ...arg }) {
    return apiTTDB.callAPI('POST', `/api/v1/order`, { ...arg })
  },

  //ADMIN
  login({ ...arg }) {
    return apiTTDB.callAPI('POST', '/api/v1/login', { ...arg })
  },

  getListProductAdmin({ ...arg }) {
    return apiTTDB.callAPI('GET', '/api/admin/v1/product', { ...arg })
  },

  getListOrderAdmin({ ...arg }) {
    return apiTTDB.callAPI('GET', '/api/admin/v1/order', { ...arg })
  },

  callAPI(method, pathUrl, body) {
    return Request.callAPI(method, configAPI.apiCall.url, pathUrl, body)
  },
}
export default apiTTDB
