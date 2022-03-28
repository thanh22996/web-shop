import { all, fork } from 'redux-saga/effects'
import getListBank from './getListBank.saga'
import getListProduct from './getListProduct.saga'
import getListCategory from './getListCategory.saga'
const arrSaga = {
  getListBank,
  getListProduct,
  getListCategory,
}
const arrFork = []
for (let key in arrSaga) {
  arrFork.push(fork(arrSaga[key]))
}

function* rootSaga() {
  yield all(arrFork)
}
export default rootSaga
