"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./store.js + 11 modules
var store = __webpack_require__(7029);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(6537);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/redux/actions.js
var actions = __webpack_require__(6577);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Home/components/ProductItem.js






function ProductItem(props) {
  const {
    product,
    addToCart
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: product && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "col-custom",
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        onClick: () => addToCart(product),
        className: "fas fa-shopping-cart"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: `/chi-tiet?code=${product.code}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: product.image,
            height: "80%",
            alt: "yenvua"
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "icon-freeship",
            src: "/assets/img/freeship-icon.svg",
            alt: "free ship"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "bl-price",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Gi\xE1: "
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [product.price && new Intl.NumberFormat('de-DE').format(product.price), ' ', "\u0111"]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "title",
            children: product.name
          })]
        })
      })]
    })
  });
}

/* harmony default export */ const components_ProductItem = (ProductItem);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: ./src/components/Home/components/ProductList.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function ProductList(props) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    listProduct
  } = props;
  const {
    0: productsCart,
    1: setProductsCart
  } = (0,external_react_.useState)([]);
  const {
    0: stateAddCart,
    1: setStateAddCart
  } = (0,external_react_.useState)(0);
  const toastId = external_react_default().useRef(null);

  const addToCart = product => {
    const item = _objectSpread(_objectSpread({}, product), {}, {
      quantity: 1
    });

    setProductsCart([...productsCart, item]);
    setStateAddCart(stateAddCart + 1);

    if (!external_react_toastify_.toast.isActive(toastId.current)) {
      toastId.current = external_react_toastify_.toast.success('Thêm vào giỏ hàng thành công.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined
      });
    }
  };

  (0,external_react_.useEffect)(() => {
    dispatch((0,actions/* saveCart */.FP)(productsCart));
    localStorage.setItem('products', JSON.stringify(productsCart)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateAddCart]);
  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem('products')) {
      setProductsCart(JSON.parse(localStorage.getItem('products')));
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [listProduct.map((item, key) => {
      return /*#__PURE__*/jsx_runtime_.jsx(components_ProductItem, {
        addToCart: addToCart,
        product: item
      }, item._id);
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: false,
      draggable: false,
      pauseOnHover: false
    })]
  });
}

/* harmony default export */ const components_ProductList = (ProductList);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Home/components/SlideProduct.js
function SlideProduct_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SlideProduct_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SlideProduct_ownKeys(Object(source), true).forEach(function (key) { SlideProduct_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SlideProduct_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SlideProduct_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function SlideProduct(props) {
  const {
    listProduct
  } = props;
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
  };
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), SlideProduct_objectSpread(SlideProduct_objectSpread({}, settings), {}, {
    children: listProduct && listProduct.map(item => {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "p-2 slider-custom",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: `/chi-tiet?code=${item.code}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: item.image,
            alt: "yenvua"
          })
        })
      }, item.code);
    })
  }));
}

/* harmony default export */ const components_SlideProduct = (SlideProduct);
// EXTERNAL MODULE: ./src/components/admin/components/Pagination.js + 1 modules
var Pagination = __webpack_require__(9761);
;// CONCATENATED MODULE: ./src/components/Home/index.js










function Test() {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)();
  const {
    0: listPd,
    1: setListPd
  } = (0,external_react_.useState)([]);
  const {
    0: listCategories,
    1: setListCategories
  } = (0,external_react_.useState)([]);
  const {
    0: listProductByCategory,
    1: setListProductByCategory
  } = (0,external_react_.useState)({});

  const handleBooking = e => {
    e.preventDefault();
    router.push('chi-tiet');
  };

  const getProduct = () => {
    dispatch((0,actions/* getListProduct */.xH)({}, (status, data) => {
      if (status) {
        setListPd(data.products);
      }
    }));
  };

  const getCattegoryList = () => {
    dispatch((0,actions/* getListCategory */.dw)({}, (status, data) => {
      if (status) {
        setListCategories(data.categories);
      }
    }));
  };

  (0,external_react_.useEffect)(() => {
    getProduct();
    getCattegoryList();
  }, []); // const

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bl-home",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bl-banner",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row custom-row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-8",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "image-banner",
              width: '100%',
              height: '100%',
              src: "/assets/imgs/top-banner.png",
              alt: "banner"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "icon__item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/assets/img/customer-service-icon.svg",
                    alt: "customer service logo"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "T\u01B0 v\u1EA5n mua h\xE0ng"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "icon__item icon__100",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/assets/img/percent-green-icon.svg",
                    alt: "customer service logo"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "S\u1EA3n ph\u1EA9m ch\xEDnh h\xE3ng"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "icon__item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/assets/img/delivery-green-icon.svg",
                    alt: "customer service logo"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "Giao h\xE0ng to\xE0n qu\u1ED1c"
                  })]
                })
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bl-content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "bl-prominent",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row row-custom",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "T\u1EA5t c\u1EA3 c\xE1c s\u1EA3n ph\u1EA9m"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: ["Xem th\xEAm ", '>']
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/jsx_runtime_.jsx(components_ProductList, {
              listProduct: listPd
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "bl-today",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row title",
            children: "S\u1EA3n ph\u1EA9m n\u1ED7i b\u1EADt"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-md-8",
              children: /*#__PURE__*/jsx_runtime_.jsx(components_SlideProduct, {
                listProduct: listPd
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-md-4 text-center",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                width: '80%',
                src: "/assets/img/feature-product-banner.png",
                alt: "promote"
              })
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "bl-selling-product",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row row-custom",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "S\u1EA3n ph\u1EA9m b\xE1n ch\u1EA1y"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: ["Xem th\xEAm ", '>']
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/jsx_runtime_.jsx(components_ProductList, {
              listProduct: listPd
            })
          })]
        })
      })]
    })]
  });
}

/* harmony default export */ const Home = (Test);
// EXTERNAL MODULE: ./src/layouts/main/MainLayout.js + 2 modules
var MainLayout = __webpack_require__(7411);
;// CONCATENATED MODULE: ./pages/index.js






function home() {
  return /*#__PURE__*/jsx_runtime_.jsx(MainLayout/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Home, {})
  });
}
const getStaticProps = store/* wrapper.getStaticProps */.Y.getStaticProps(async ({
  store
}) => {// console.log('aaaaaaabbbbbbbbbbccccccc')
  // store.dispatch(
  //   getListBank({}, (status, data) => {
  //     console.log("status: ", data);
  //     if (status) {
  //       setListBank(data.items);
  //     } else {
  //       Swal.fire({
  //         title: data.data.message,
  //         icon: "error",
  //       });
  //     }
  //   })
  // );
  // store.dispatch(END);
  // await store.sagaTask.toPromise();
});

/***/ }),

/***/ 9761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Pagination)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-bootstrap/Pagination"
const Pagination_namespaceObject = require("react-bootstrap/Pagination");
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/admin/components/Pagination.js





function PaginationCustom(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Pagination_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx((Pagination_default()).First, {}), /*#__PURE__*/jsx_runtime_.jsx((Pagination_default()).Prev, {}), /*#__PURE__*/jsx_runtime_.jsx((Pagination_default()).Item, {
      active: true,
      children: 1
    }), /*#__PURE__*/jsx_runtime_.jsx((Pagination_default()).Item, {
      children: 2
    }), /*#__PURE__*/jsx_runtime_.jsx((Pagination_default()).Item, {
      children: 3
    }), /*#__PURE__*/jsx_runtime_.jsx((Pagination_default()).Item, {
      children: 4
    }), /*#__PURE__*/jsx_runtime_.jsx((Pagination_default()).Item, {
      children: 5
    }), /*#__PURE__*/jsx_runtime_.jsx((Pagination_default()).Next, {}), /*#__PURE__*/jsx_runtime_.jsx((Pagination_default()).Last, {})]
  });
}

/* harmony default export */ const Pagination = (PaginationCustom);

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

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

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
var __webpack_exports__ = __webpack_require__.X(0, [400,664,577,411,29], () => (__webpack_exec__(9210)));
module.exports = __webpack_exports__;

})();