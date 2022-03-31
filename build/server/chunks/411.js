"use strict";
exports.id = 411;
exports.ids = [411];
exports.modules = {

/***/ 7411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/redux/actions.js
var actions = __webpack_require__(6577);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/layouts/header/Header.js








function Header() {
  const productsCart = (0,external_react_redux_.useSelector)(state => state.listCart.listCart);
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();

  const handleSubmit = e => {
    e.preventDefault();
  };

  const redirectCart = () => {
    router.push('/gio-hang');
  };

  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem('products')) {
      dispatch((0,actions/* saveCart */.FP)(JSON.parse(localStorage.getItem('products'))));
    }
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("header", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "header container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: "/",
          className: "header__logo",
          children: "Y\u1EBEN VUA"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "header__search",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            onSubmit: handleSubmit,
            className: "header__search-main",
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              // onChange={handleInputChange}
              // value={inputSearch}
              type: "text",
              placeholder: "T\xECm ki\u1EBFm y\u1EBFn vua..."
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              type: "submit",
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fas fa-search"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "T\xECm ki\u1EBFm"
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "header__search-product",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: "T\u1EA5t c\u1EA3"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "header__cart",
          onClick: redirectCart,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "cart__noti-number",
            children: productsCart.length
          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-shopping-cart"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Gi\u1ECF h\xE0ng"
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const header_Header = (Header);
;// CONCATENATED MODULE: ./src/layouts/footer/Footer.js



function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "footer",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "wrap-footer",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "title",
              children: "V\u1EC0 Y\u1EBEN S\xC0O Y\u1EBEN VUA"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Chuy\xEAn cung c\u1EA5p y\u1EBFn th\xF4 v\xE0 y\u1EBFn ch\u01B0ng cao c\u1EA5p Y\u1EBFn nh\xE0 nu\xF4i 100% kh\xF4ng qua trung gian. Y\u1EBFn s\u1EA1ch, kh\xF4ng pha, kh\xF4ng tr\u1ED9n"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "title",
              children: "TH\xD4NG TIN LI\xCAN H\u1EC6"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
                children: "\u0110\u1ECBa ch\u1EC9: "
              }), "15/4 \u0111\u01B0\u1EDDng 98, ph\u01B0\u1EDDng ph\u01B0\u1EDBc long A, qu\u1EADn 9. TPHCM"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
                children: "\u0110i\u1EC7n tho\u1EA1i: "
              }), "0934888078"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
                children: "Th\u1EDDi gian l\xE0m vi\u1EC7c: "
              }), "8h00 - 20h00"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
                children: "Email: "
              }), "nhungngocnguyen58@gmail.com"]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "title",
              children: "CH\xCDNH S\xC1CH MUA H\xC0NG"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: "Cam k\u1EBFt 100% ch\xEDnh h\xE3ng"
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: "Giao h\xE0ng d\u1EF1 ki\u1EBFn: Th\u1EE9 2 - Th\u1EE9 6 t\u1EEB 9h00 - 17h00"
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: "H\u1ED7 tr\u1EE3 24/7 v\u1EDBi c\xE1c k\xEAnh chat, email & phone"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "title",
              children: "LI\xCAN H\u1EBET CH\xDANG T\xD4I"
            })]
          })]
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/layouts/main/MainLayout.js





function MainLayout(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container-box",
    children: [/*#__PURE__*/jsx_runtime_.jsx(header_Header, {}), props.children, /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}

/***/ })

};
;