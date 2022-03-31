"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./store.js + 11 modules
var store = __webpack_require__(7029);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function App({
  Component,
  pageProps
}) {
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    localStorage.setItem('lang', router.locale);
  }, [router.locale]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "root-next",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Y\u1EBFn vua"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ const _app = (store/* wrapper.withRedux */.Y.withRedux(App));

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

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 6537:
/***/ ((module) => {

module.exports = require("redux-saga");

/***/ }),

/***/ 6477:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [29], () => (__webpack_exec__(5680)));
module.exports = __webpack_exports__;

})();