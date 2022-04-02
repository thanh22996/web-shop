import * as types from './types'

export const getListBank = (payload, callback) => {
  return {
    type: types.GET_LIST_BANK,
    payload,
    callback,
  }
}

export const getListProduct = (payload, callback) => {
  return {
    type: types.GET_LIST_PRODUCT,
    payload,
    callback,
  }
}

export const getListCategory = (payload, callback) => {
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

export const getListProductAdminAction = (payload, callback) => {
  return {
    type: types.GET_LIST_PRODUCT_ADMIN,
    payload,
    callback,
  }
}

export const getListOrderAdminAction = (payload, callback) => {
  return {
    type: types.GET_ORDER_PRODUCT_ADMIN,
    payload,
    callback,
  }
}
