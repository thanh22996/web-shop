"use strict";
exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Cart)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./src/redux/actions.js
var actions = __webpack_require__(6577);
;// CONCATENATED MODULE: ./src/helpers/validate.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function validate(data) {
  let err = null;
  let phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (data.phone !== '') {
    if (phone_regex.test(data.phone) === false) {
      err = _objectSpread(_objectSpread({}, err), {}, {
        phone: 'Số điện thoại không hợp lệ'
      });
    }
  } else {
    err = _objectSpread(_objectSpread({}, err), {}, {
      phone: 'Vui lòng điền thông tin'
    });
  }

  if (data.name === '') {
    err = _objectSpread(_objectSpread({}, err), {}, {
      name: 'Vui lòng điền thông tin'
    });
  }

  if (data.gender === '') {
    err = _objectSpread(_objectSpread({}, err), {}, {
      gender: 'Vui lòng chọn giới tính'
    });
  }

  if (data.address === '') {
    err = _objectSpread(_objectSpread({}, err), {}, {
      address: 'Vui lòng điền thông tin'
    });
  }

  if (data.email !== '') {
    if (email_regex.test(data.email) === false) {
      err = _objectSpread(_objectSpread({}, err), {}, {
        email: 'Email không hợp lệ'
      });
    }
  } else {
    err = _objectSpread(_objectSpread({}, err), {}, {
      email: 'Vui lòng điền thông tin'
    });
  }

  return err;
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Cart/components/CartConfirm.js
function CartConfirm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function CartConfirm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CartConfirm_ownKeys(Object(source), true).forEach(function (key) { CartConfirm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CartConfirm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CartConfirm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function CartConfirm(props) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)();
  const toastId = external_react_default().useRef(null);
  const {
    0: formData,
    1: setFormData
  } = (0,external_react_.useState)({
    name: '',
    phone: '',
    gender: '',
    address: '',
    email: ''
  });
  const {
    0: errForm,
    1: setErrForm
  } = (0,external_react_.useState)({
    name: '',
    phone: '',
    gender: '',
    address: '',
    email: ''
  });

  const onChangeField = e => {
    setFormData(CartConfirm_objectSpread(CartConfirm_objectSpread({}, formData), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = async () => {
    try {
      let err = {};
      err = validate(formData);
      setErrForm(err);

      if (!err) {
        const cartList = JSON.parse(localStorage.getItem('products'));
        const data = {
          customerInfo: formData,
          orderInfo: cartList.map(item => {
            return {
              productId: item._id,
              quantity: item.quantity
            };
          })
        };
        dispatch((0,actions/* orderAction */.Dg)(data, (status, data) => {
          if (status) {
            if (!external_react_toastify_.toast.isActive(toastId.current)) {
              toastId.current = external_react_toastify_.toast.success('Đặt hàng thành công', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined
              });
            }

            dispatch((0,actions/* saveCart */.FP)([]));
            localStorage.removeItem('products');
            router.push('/');
          }
        }));
      } else {
        external_react_toastify_.toast.error('Đặt hàng không thành công');
      }
    } catch (error) {}
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bl-list-cart",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bl-total-item",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "X\xE1c nh\u1EADn \u0111\u1EB7t h\xE0ng"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row bl-cart-confirm mb-3",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "user-location",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "custom-input",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "H\u1ECD t\xEAn"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            name: "name",
            onChange: onChangeField
          }), errForm && errForm.name && /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-error",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              children: errForm.name
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "custom-input",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            name: "phone",
            onChange: onChangeField
          }), errForm && errForm.phone && /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-error",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              children: errForm.phone
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "custom-input",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Gi\u1EDBi t\xEDnh"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
            id: "cars",
            name: "gender",
            onChange: onChangeField,
            children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "",
              children: "L\u1EF1a ch\u1ECDn gi\u1EDBi t\xEDnh"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "MALE",
              children: "Nam"
            }), /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: "FEMALE",
              children: "N\u1EEF"
            })]
          }), errForm && errForm.gender && /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-error",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              children: errForm.gender
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "custom-input",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Email"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            name: "email",
            onChange: onChangeField
          }), errForm && errForm.email && /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-error",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              children: errForm.email
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "custom-input",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "\u0110\u1ECBa ch\u1EC9"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            name: "address",
            onChange: onChangeField
          }), errForm && errForm.address && /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-error",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              children: errForm.address
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: onSubmit,
          className: "submit",
          children: "\u0110\u1EB6T H\xC0NG NGAY"
        })]
      })
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

/* harmony default export */ const components_CartConfirm = (CartConfirm);
;// CONCATENATED MODULE: ./src/components/Cart/components/CartItem.js




function CartItem(props) {
  const {
    listCart
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bl-list-cart",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bl-total-item",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Gi\u1ECF h\xE0ng"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["(", listCart.length, " s\u1EA3n ph\u1EA9m)"]
      })]
    }), listCart && listCart.map(item => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row bl-list-cart__item mb-3",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-md-8 d-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "bl-img",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              style: {
                maxWidth: '100px'
              },
              src: "/assets/imgs/san-pham-2.png",
              alt: "yenvua"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "info ml-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "title",
              children: item.name
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "price",
              children: [new Intl.NumberFormat('de-DE').format(item.price), " \u0111"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "count d-flex",
              children: ["S\u1ED1 l\u01B0\u1EE3ng: ", item.quantity]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-md-4 bl-total",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "title-total",
            children: "Th\xE0nh ti\u1EC1n"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "total-price",
            children: [new Intl.NumberFormat('de-DE').format(item.price * item.quantity), ' ', "\u0111"]
          })]
        })]
      }, item.id);
    })]
  });
}

/* harmony default export */ const components_CartItem = (CartItem);
;// CONCATENATED MODULE: ./src/components/Cart/components/CartTotal.js







function CartTotal(props) {
  const router = (0,router_.useRouter)();
  const {
    confirmCart,
    setConfirmCart
  } = props;
  const productsCart = (0,external_react_redux_.useSelector)(state => state.listCart.listCart);
  const {
    0: totalPrice,
    1: setTotalPrice
  } = (0,external_react_.useState)(0);

  const getListCart = () => {
    if (productsCart) {
      let totalProduct = 0;
      productsCart.forEach(element => totalProduct += element.price * element.quantity); // setTotalPrice(cartList || [])

      setTotalPrice(totalProduct);
    }
  };

  const onConfirm = () => {
    setConfirmCart(true);
  };

  (0,external_react_.useEffect)(() => {
    getListCart();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "checkout",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "checkout__save",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "T\u1EA1m T\xEDnh:"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [new Intl.NumberFormat('de-DE').format(totalPrice), " \u0111"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "mb-2 checkout__save",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Th\xE0nh Ti\u1EC1n:"
        }), ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          style: {
            color: '#f32723',
            fontWeight: '700',
            fontSize: '18px'
          },
          children: [new Intl.NumberFormat('de-DE').format(totalPrice), " \u0111"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "(\u0110\xE3 bao g\u1ED3m VAT n\u1EBFu c\xF3)"
      })]
    }), !confirmCart && /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: onConfirm,
      children: "TI\u1EBEN H\xC0NH \u0110\u1EB6T H\xC0NG"
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "back",
      onClick: () => {
        router.back();
      },
      children: "QUAY L\u1EA0I"
    })]
  });
}

/* harmony default export */ const components_CartTotal = (CartTotal);
;// CONCATENATED MODULE: ./src/components/Cart/index.js







function CartComponent(props) {
  const {
    0: listCart,
    1: setListCart
  } = (0,external_react_.useState)([]);
  const {
    0: confirmCart,
    1: setConfirmCart
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setListCart(JSON.parse(localStorage.getItem('products')) || []);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "cart-page",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-7 bl-swapper-list",
          children: !confirmCart ? /*#__PURE__*/jsx_runtime_.jsx(components_CartItem, {
            listCart: listCart
          }) : /*#__PURE__*/jsx_runtime_.jsx(components_CartConfirm, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "bl-cart-total",
            children: /*#__PURE__*/jsx_runtime_.jsx(components_CartTotal, {
              confirmCart: confirmCart,
              setConfirmCart: setConfirmCart
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Cart = (CartComponent);

/***/ })

};
;