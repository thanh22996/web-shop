import * as types from "./types";

const initialState = {
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SHOW_LOADING: {
      return { ...state, isLoading: true };
    }
    case types.HIDE_LOADING: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
}


