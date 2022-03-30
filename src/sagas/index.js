import { all, fork } from 'redux-saga/effects'
import getListProduct from './getListProduct.saga'
import getListCategory from './getListCategory.saga'
import Login from './login.saga'
import getDetail from './getDetail.saga.js'
import orderProduct from './orderProduct.saga'
const arrSaga = {
  getListProduct,
  getListCategory,
  Login,
  getDetail,
  orderProduct,
}
const arrFork = []
for (let key in arrSaga) {
  arrFork.push(fork(arrSaga[key]))
}

function* rootSaga() {
  yield all(arrFork)
}
export default rootSaga
