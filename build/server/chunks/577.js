"use strict";
exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 6577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xH": () => (/* binding */ getListProduct),
/* harmony export */   "dw": () => (/* binding */ getListCategory),
/* harmony export */   "FP": () => (/* binding */ saveCart),
/* harmony export */   "y": () => (/* binding */ loginAction),
/* harmony export */   "RZ": () => (/* binding */ getDetailAction),
/* harmony export */   "Dg": () => (/* binding */ orderAction)
/* harmony export */ });
/* unused harmony export getListBank */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3322);

const getListBank = (payload, callback) => {
  return {
    type: types.GET_LIST_BANK,
    payload,
    callback
  };
};
const getListProduct = (payload, callback) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .GET_LIST_PRODUCT */ .Ly,
    payload,
    callback
  };
};
const getListCategory = (payload, callback) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .GET_LIST_CATEGORY */ .NP,
    payload,
    callback
  };
};
const saveCart = payload => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SAVE_CART */ .uy,
    payload: payload
  };
};
const loginAction = (payload, callback) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN */ .ym,
    payload,
    callback
  };
};
const getDetailAction = (payload, callback) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .GET_DETAIL_PRODUCT */ .et,
    payload,
    callback
  };
};
const orderAction = (payload, callback) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .ORDER_PRODUCT */ .sv,
    payload,
    callback
  };
};

/***/ }),

/***/ 3322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P_": () => (/* binding */ SHOW_LOADING),
/* harmony export */   "Uf": () => (/* binding */ HIDE_LOADING),
/* harmony export */   "Ly": () => (/* binding */ GET_LIST_PRODUCT),
/* harmony export */   "NP": () => (/* binding */ GET_LIST_CATEGORY),
/* harmony export */   "uy": () => (/* binding */ SAVE_CART),
/* harmony export */   "ym": () => (/* binding */ LOGIN),
/* harmony export */   "et": () => (/* binding */ GET_DETAIL_PRODUCT),
/* harmony export */   "sv": () => (/* binding */ ORDER_PRODUCT)
/* harmony export */ });
/* unused harmony export GET_LIST_BANK */
const SHOW_LOADING = 'SHOW_LOADING';
const HIDE_LOADING = 'HIDE_LOADING';
const GET_LIST_BANK = 'GET_LIST_BANK';
const GET_LIST_PRODUCT = 'GET_LIST_PRODUCT';
const GET_LIST_CATEGORY = 'GET_LIST_CATEGORY';
const SAVE_CART = 'SAVE_CART';
const LOGIN = 'LOGIN';
const GET_DETAIL_PRODUCT = 'GET_DETAIL_PRODUCT';
const ORDER_PRODUCT = 'ORDER_PRODUCT';

/***/ })

};
;