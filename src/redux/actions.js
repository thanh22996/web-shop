import * as types from './types'

export const getListBank = (payload, callback) => {
  return {
    type: types.GET_LIST_BANK,
    payload,
    callback,
  }
}

export const getListProduct = (payload, callback) => {
  console.log('payload: ', payload)
  return {
    type: types.GET_LIST_PRODUCT,
    payload,
    callback,
  }
}

export const getListCategory = (payload, callback) => {
  console.log('payload: ', payload)
  return {
    type: types.GET_LIST_CATEGORY,
    payload,
    callback,
  }
}
