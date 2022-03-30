import * as types from './types'

const initialState = {
  isLoading: false,
  listCart: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SHOW_LOADING: {
      return { ...state, isLoading: true }
    }
    case types.HIDE_LOADING: {
      return { ...state, isLoading: false }
    }
    case types.SAVE_CART: {
      return {
        ...state,
        listCart: action.payload,
      }
    }
    default:
      return state
  }
}
