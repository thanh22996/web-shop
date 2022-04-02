import { all, fork } from 'redux-saga/effects'
import getListProduct from './getListProduct.saga'
import getListCategory from './getListCategory.saga'
import Login from './login.saga'
import getDetail from './getDetail.saga.js'
import orderProduct from './orderProduct.saga'
import getListProductAdmin from './admin/getListProduct.saga'
import getListOrder from './admin/getListOrder.saga'

const arrSaga = {
  getListProduct,
  getListCategory,
  Login,
  getDetail,
  orderProduct,
  getListProductAdmin,
  getListOrder,
}
const arrFork = []
for (let key in arrSaga) {
  arrFork.push(fork(arrSaga[key]))
}

function* rootSaga() {
  yield all(arrFork)
}
export default rootSaga
