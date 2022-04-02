import axios from 'axios'
import _ from 'lodash'
const Request = {
  callAPI(
    method,
    url,
    pathUrl,
    args,
    headers,
    isSecurity = false,
    publicKey = null,
    privateKey = null
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('args token: ', args)
        let accessToken = ''
        if (args && args.accessToken) {
          accessToken = `${args.accessToken}`
          delete args.accessToken
        }
        if (args && args.lang) {
          lang = `${args.lang}`
          delete args.lang
        }
        let apiUrl = `${url}${pathUrl}`
        console.log('accessToken req: ', accessToken)
        let apiHeader = {
          Authorization: `Bearer ${accessToken}`,
          ...headers,
          'Content-Type': 'application/json; charset=utf-8',
        }
        let apiBody = args

        const option = {
          method,
          url: apiUrl,
          headers: apiHeader,
        }
        if (method.toUpperCase() !== 'GET') {
          option.data = apiBody
        } else {
          option.params = apiBody
        }
        const response = await axios(option)

        resolve(response)
      } catch (error) {
        if (error) console.log(error)
        resolve({
          code: -1001,
          data: { message: 'Lỗi kết nối server, Vui lòng quay lại sau' },
        })
      }
    })
  },
}

export default Request
