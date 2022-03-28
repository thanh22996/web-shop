import Request from './middleware/request'
import { configAPI } from '../configs/api.config'

const apiTTDB = {
  getListBank({ ...arg }) {
    return apiTTDB.callAPI('POST', '/v1/Payment/Bank/BankCode', { ...arg })
  },
  getListProduct({ ...arg }) {
    return apiTTDB.callAPI('GET', '/api/v1/product', { ...arg })
  },
  getListCategory({ ...arg }) {
    return apiTTDB.callAPI('GET', '/api/v1/category', { ...arg })
  },
  callAPI(method, pathUrl, body, headers = {}) {
    console.log('pathUrl: ', pathUrl)
    return Request.callAPI(
      method,
      configAPI.test.url,
      pathUrl,
      body,
      (headers = { Authorization: configAPI.test.token })
    )
  },
}
export default apiTTDB
