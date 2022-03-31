"use strict";
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 7029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// UNUSED EXPORTS: makeStore

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(6537);
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: ./src/redux/types.js
var types = __webpack_require__(3322);
;// CONCATENATED MODULE: ./src/redux/listCart.reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isLoading: false,
  listCart: []
};
/* harmony default export */ function listCart_reducer(state = initialState, action) {
  switch (action.type) {
    case types/* SHOW_LOADING */.P_:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: true
        });
      }

    case types/* HIDE_LOADING */.Uf:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: false
        });
      }

    case types/* SAVE_CART */.uy:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          listCart: action.payload
        });
      }

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./src/configs/reducer.config.js

 // import student

const rootReducer = (0,external_redux_.combineReducers)({
  listCart: listCart_reducer
});
/* harmony default export */ const reducer_config = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ./src/api/middleware/request.js
function request_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function request_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { request_ownKeys(Object(source), true).forEach(function (key) { request_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { request_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function request_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Request = {
  callAPI(method, url, pathUrl, args, headers, isSecurity = false, publicKey = null, privateKey = null) {
    return new Promise(async (resolve, reject) => {
      try {
        let accessToken = '';

        if (args && args.accessToken) {
          accessToken = `${args.accessToken}`;
          delete args.accessToken;
        }

        if (args && args.lang) {
          lang = `${args.lang}`;
          delete args.lang;
        }

        let apiUrl = `${url}${pathUrl}`;

        let apiHeader = request_objectSpread(request_objectSpread({}, headers), {}, {
          'Content-Type': 'application/json; charset=utf-8'
        });

        let apiBody = args;
        const option = {
          method,
          url: apiUrl,
          headers: apiHeader
        };

        if (method.toUpperCase() !== 'GET') {
          option.data = apiBody;
        } else {
          option.params = apiBody;
        }

        const response = await external_axios_default()(option);
        resolve(response);
      } catch (error) {
        if (error) console.log(error);
        resolve({
          code: -1001,
          data: {
            message: 'Lỗi kết nối server, Vui lòng quay lại sau'
          }
        });
      }
    });
  }

};
/* harmony default export */ const request = (Request);
;// CONCATENATED MODULE: ./src/configs/api.config.js
const api = {
  // sbx
  apiCall: {
    url: 'http://api.yenvua.com.vn',
    token: '',
    urlRedirect: 'https://test.vn'
  }
};
const configAPI = api;
;// CONCATENATED MODULE: ./src/api/apiTTDB.js
function apiTTDB_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function apiTTDB_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { apiTTDB_ownKeys(Object(source), true).forEach(function (key) { apiTTDB_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { apiTTDB_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function apiTTDB_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const apiTTDB = {
  login(_ref) {
    let arg = Object.assign({}, _ref);
    return apiTTDB.callAPI('POST', '/api/v1/login', apiTTDB_objectSpread({}, arg));
  },

  getListProduct(_ref2) {
    let arg = Object.assign({}, _ref2);
    return apiTTDB.callAPI('GET', '/api/v1/product', apiTTDB_objectSpread({}, arg));
  },

  getListCategory(_ref3) {
    let arg = Object.assign({}, _ref3);
    return apiTTDB.callAPI('GET', '/api/v1/category', apiTTDB_objectSpread({}, arg));
  },

  getDetail(_ref4) {
    let arg = Object.assign({}, _ref4);
    return apiTTDB.callAPI('GET', `/api/v1/product/detail?code=${arg.code}`);
  },

  orderProduct(_ref5) {
    let arg = Object.assign({}, _ref5);
    return apiTTDB.callAPI('POST', `/api/v1/order`, apiTTDB_objectSpread({}, arg));
  },

  callAPI(method, pathUrl, body) {
    return request.callAPI(method, configAPI.apiCall.url, pathUrl, body);
  }

};
/* harmony default export */ const api_apiTTDB = (apiTTDB);
;// CONCATENATED MODULE: ./src/sagas/getListProduct.saga.js





function* doAction(action) {
  try {
    yield (0,effects_.put)({
      type: types/* SHOW_LOADING */.P_
    });
    const {
      data
    } = yield (0,effects_.call)(api_apiTTDB.getListProduct, action.payload);
    yield (0,effects_.put)({
      type: types/* HIDE_LOADING */.Uf
    });

    switch (data.status) {
      case 'success':
        {
          if (action.callback) {
            action.callback(true, data.data);
          }

          break;
        }

      default:
        {
          if (action.callback) {
            action.callback(false, data);
          }

          break;
        }
    }
  } catch (error) {
    yield (0,effects_.put)({
      type: types/* HIDE_LOADING */.Uf
    });
  }
}

function* watchAction() {
  yield (0,effects_.takeLatest)(types/* GET_LIST_PRODUCT */.Ly, doAction);
}
;// CONCATENATED MODULE: ./src/sagas/getListCategory.saga.js





function* getListCategory_saga_doAction(action) {
  try {
    yield (0,effects_.put)({
      type: types/* SHOW_LOADING */.P_
    });
    const {
      data
    } = yield (0,effects_.call)(api_apiTTDB.getListCategory, action.payload);
    yield (0,effects_.put)({
      type: types/* HIDE_LOADING */.Uf
    });

    switch (data.status) {
      case 'success':
        {
          if (action.callback) {
            action.callback(true, data.data);
          }

          break;
        }

      default:
        {
          if (action.callback) {
            action.callback(false, data);
          }

          break;
        }
    }
  } catch (error) {
    yield (0,effects_.put)({
      type: types/* HIDE_LOADING */.Uf
    });
  }
}

function* getListCategory_saga_watchAction() {
  yield (0,effects_.takeLatest)(types/* GET_LIST_CATEGORY */.NP, getListCategory_saga_doAction);
}
;// CONCATENATED MODULE: ./src/sagas/login.saga.js





function* login_saga_doAction(action) {
  try {
    yield (0,effects_.put)({
      type: types/* SHOW_LOADING */.P_
    });
    const {
      data
    } = yield (0,effects_.call)(api_apiTTDB.login, action.payload);
    yield (0,effects_.put)({
      type: types/* HIDE_LOADING */.Uf
    });

    switch (data.status) {
      case 'success':
        {
          localStorage.setItem('token', data.accessToken);

          if (action.callback) {
            action.callback(true, data.data);
          }

          break;
        }

      default:
        {
          if (action.callback) {
            action.callback(false, data);
          }

          break;
        }
    }
  } catch (error) {
    yield (0,effects_.put)({
      type: types/* HIDE_LOADING */.Uf
    });
  }
}

function* login_saga_watchAction() {
  yield (0,effects_.takeLatest)(types/* LOGIN */.ym, login_saga_doAction);
}
;// CONCATENATED MODULE: ./src/sagas/getDetail.saga.js.js





function* getDetail_saga_js_doAction(action) {
  try {
    yield (0,effects_.put)({
      type: types/* SHOW_LOADING */.P_
    });
    const {
      data
    } = yield (0,effects_.call)(api_apiTTDB.getDetail, action.payload);
    yield (0,effects_.put)({
      type: types/* HIDE_LOADING */.Uf
    });

    switch (data.status) {
      case 'success':
        {
          if (action.callback) {
            action.callback(true, data.data);
          }

          break;
        }

      default:
        {
          if (action.callback) {
            action.callback(false, data);
          }

          break;
        }
    }
  } catch (error) {
    yield (0,effects_.put)({
      type: types/* HIDE_LOADING */.Uf
    });
  }
}

function* getDetail_saga_js_watchAction() {
  yield (0,effects_.takeLatest)(types/* GET_DETAIL_PRODUCT */.et, getDetail_saga_js_doAction);
}
;// CONCATENATED MODULE: ./src/sagas/orderProduct.saga.js





function* orderProduct_saga_doAction(action) {
  try {
    yield (0,effects_.put)({
      type: types/* SHOW_LOADING */.P_
    });
    const {
      data
    } = yield (0,effects_.call)(api_apiTTDB.orderProduct, action.payload);
    yield (0,effects_.put)({
      type: types/* HIDE_LOADING */.Uf
    });

    switch (data.status) {
      case 'success':
        {
          if (action.callback) {
            action.callback(true, data.data);
          }

          break;
        }

      default:
        {
          if (action.callback) {
            action.callback(false, data);
          }

          break;
        }
    }
  } catch (error) {
    yield (0,effects_.put)({
      type: types/* HIDE_LOADING */.Uf
    });
  }
}

function* orderProduct_saga_watchAction() {
  yield (0,effects_.takeLatest)(types/* ORDER_PRODUCT */.sv, orderProduct_saga_doAction);
}
;// CONCATENATED MODULE: ./src/sagas/index.js






const arrSaga = {
  getListProduct: watchAction,
  getListCategory: getListCategory_saga_watchAction,
  Login: login_saga_watchAction,
  getDetail: getDetail_saga_js_watchAction,
  orderProduct: orderProduct_saga_watchAction
};
const arrFork = [];

for (let key in arrSaga) {
  arrFork.push((0,effects_.fork)(arrSaga[key]));
}

function* rootSaga() {
  yield (0,effects_.all)(arrFork);
}

/* harmony default export */ const sagas = (rootSaga);
;// CONCATENATED MODULE: ./store.js






const bindMiddleware = middleware => {
  if (false) {}

  return (0,external_redux_.applyMiddleware)(...middleware);
};

const makeStore = context => {
  const sagaMiddleware = external_redux_saga_default()();
  const store = (0,external_redux_.createStore)(reducer_config, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(sagas);
  return store;
};
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makeStore, {
  debug: false
});

/***/ })

};
;