"use strict";
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 3362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/layouts/sidebar/index.js
 // import { Link, useLocation } from 'react-router-dom'





const sidebarNavItems = [{
  display: 'Sản phẩm',
  icon: /*#__PURE__*/jsx_runtime_.jsx("i", {
    class: "fas fa-crow"
  }),
  to: '/admin/product-list',
  section: '',
  active: 1
}, {
  display: 'Đơn hàng',
  icon: /*#__PURE__*/jsx_runtime_.jsx("i", {
    class: "fas fa-list"
  }),
  to: '/admin/order',
  section: 'order',
  active: 2
}, {
  display: 'Thêm sản phẩm',
  icon: /*#__PURE__*/jsx_runtime_.jsx("i", {
    class: "fas fa-plus-circle"
  }),
  to: '/admin/add-product',
  section: 'add',
  active: 3
}];

const Sidebar = () => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,external_react_.useState)(0);
  const {
    0: stepHeight,
    1: setStepHeight
  } = (0,external_react_.useState)(0);
  const sidebarRef = (0,external_react_.useRef)();
  const indicatorRef = (0,external_react_.useRef)();
  const router = (0,router_.useRouter)();
  const curPath = router.pathname;
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []); // change active index

  (0,external_react_.useEffect)(() => {
    sidebarNavItems.map(item => {
      if (curPath === item.to) {
        setActiveIndex(item.active);
      }
    });
  }, [curPath]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "sidebar",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      ref: sidebarRef,
      className: "sidebar__menu",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        ref: indicatorRef,
        className: "sidebar__menu__indicator",
        style: {
          transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
        }
      }), sidebarNavItems.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: item.to,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `sidebar__menu__item ${activeIndex === index + 1 ? 'active' : ''}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "sidebar__menu__item__icon",
            children: item.icon
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "sidebar__menu__item__text",
            children: item.display
          })]
        })
      }, index))]
    })
  });
};

/* harmony default export */ const sidebar = (Sidebar);
;// CONCATENATED MODULE: ./src/layouts/header/HeaderAdmin.js





function HeaderAdmin() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("header", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "header container",
        style: {
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: "/",
          className: "header__logo",
          children: "Y\u1EBEN VUA"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__search",
          style: {
            color: '#ffde9d',
            fontSize: '30px',
            fontWeight: '700'
          },
          children: "Admin page"
        })]
      })
    })
  });
}

/* harmony default export */ const header_HeaderAdmin = (HeaderAdmin);
;// CONCATENATED MODULE: ./src/layouts/main/MainLayoutAdmin.js





function MainLayout(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container-box",
    children: [/*#__PURE__*/jsx_runtime_.jsx(header_HeaderAdmin, {}), /*#__PURE__*/jsx_runtime_.jsx(sidebar, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "content-admin",
      children: props.children
    })]
  });
}

/***/ })

};
;