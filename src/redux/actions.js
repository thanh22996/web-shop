import * as types from "./types";

export const getListBank = (payload, callback) => {
  return {
    type: types.GET_LIST_BANK,
    payload,
    callback,
  };
};
