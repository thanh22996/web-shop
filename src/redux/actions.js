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

export const saveCart = (payload) => {
  return {
    type: types.SAVE_CART,
    payload: payload,
  }
}

export const loginAction = (payload, callback) => {
  return {
    type: types.LOGIN,
    payload,
    callback,
  }
}

export const getDetailAction = (payload, callback) => {
  return {
    type: types.GET_DETAIL_PRODUCT,
    payload,
    callback,
  }
}

export const orderAction = (payload, callback) => {
  return {
    type: types.ORDER_PRODUCT,
    payload,
    callback,
  }
}
