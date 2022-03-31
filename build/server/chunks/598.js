"use strict";
exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 1598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(384);
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5614);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function UploadProduct(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "App",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
      children: "Using CKEditor 5 build in React"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_1__.CKEditor, {
      editor: (_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default()),
      data: "<p>Hello from CKEditor 5!</p>",
      onReady: editor => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor);
      },
      onChange: (event, editor) => {
        const data = editor.getData();
        console.log({
          event,
          editor,
          data
        });
      },
      onBlur: (event, editor) => {
        console.log('Blur.', editor);
      },
      onFocus: (event, editor) => {
        console.log('Focus.', editor);
      }
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadProduct);

/***/ })

};
;