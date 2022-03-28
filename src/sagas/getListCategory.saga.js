import { call, put, takeLatest } from 'redux-saga/effects'
import * as responseCode from '../configs/responseCode.config'
import * as types from '../redux/types'
import apiTTDB from '../api/apiTTDB'

function* doAction(action) {
  console.log('action: ', action)
  try {
    yield put({ type: types.SHOW_LOADING })
    const { data } = yield call(apiTTDB.getListCategory, action.payload)
    console.log('aaaaaaaaaaa category: ', data)

    yield put({ type: types.HIDE_LOADING })
    switch (data.status) {
      case 'success': {
        if (action.callback) {
          action.callback(true, data.data)
        }
        break
      }
      default: {
        if (action.callback) {
          action.callback(false, data)
        }
        break
      }
    }
  } catch (error) {
    yield put({ type: types.HIDE_LOADING })
  }
}

export default function* watchAction() {
  yield takeLatest(types.GET_LIST_CATEGORY, doAction)
}
