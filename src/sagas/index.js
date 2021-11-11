import { all, fork } from "redux-saga/effects";
import getListBank from "./getListBank.saga";
const arrSaga = {
  getListBank,
};
const arrFork = [];
for (let key in arrSaga) {
  arrFork.push(fork(arrSaga[key]));
}

function* rootSaga() {
  yield all(arrFork);
}
export default rootSaga;
