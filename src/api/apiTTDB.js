import Request from './middleware/request'
import { configAPI } from '../configs/api.config'
const apiTTDB = {
  login({ ...arg }) {
    console.log('arg: ', arg)
    return apiTTDB.callAPI('POST', '/api/v1/login', { ...arg })
  },

  getListProduct({ ...arg }) {
    console.log('arg: ', arg)
    return apiTTDB.callAPI('GET', '/api/v1/product', { ...arg })
  },

  getListCategory({ ...arg }) {
    return apiTTDB.callAPI('GET', '/api/v1/category', { ...arg })
  },

  getDetail({ ...arg }) {
    console.log(arg)
    return apiTTDB.callAPI('GET', `/api/v1/product/detail?code=${arg.code}`)
  },

  orderProduct({ ...arg }) {
    console.log(arg)
    return apiTTDB.callAPI('POST', `/api/v1/order`, { ...arg })
  },

  callAPI(method, pathUrl, body) {
    console.log('pathUrl: ', pathUrl)
    return Request.callAPI(method, configAPI.apiCall.url, pathUrl, body)
  },
}
export default apiTTDB
