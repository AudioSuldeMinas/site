"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Formulario.jsx":
/*!***********************************!*\
  !*** ./components/Formulario.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Formulario; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Formulario() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [telefone, setTelefones] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function sendEmail(e) {\n        e.preventDefault();\n        if (name === \"\" || email === \"\" || telefone === \"\") {\n            alert(\"Preencha todos os campos\");\n            return;\n        }\n        alert(\"teste\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"rodrigo\"\n                }, void 0, false, {\n                    fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: sendEmail,\n                    className: \"flex flex-col justify-center items-center p-8 w-96 bg-tema-site rounded-large px-4 text-white right-32 top-48 absolute\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold\",\n                            children: \"Ligamos para voc\\xea!\"\n                        }, void 0, false, {\n                            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Preencha o formulario abaixo,\"\n                        }, void 0, false, {\n                            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"e receba nosso contato\"\n                        }, void 0, false, {\n                            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"mt-2 text-sm p-1\",\n                            children: \"Nome:\"\n                        }, void 0, false, {\n                            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"name\",\n                            className: \"rounded-3xl w-48 p-1\",\n                            onChange: (e)=>setName(e.target.value),\n                            value: name\n                        }, void 0, false, {\n                            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-sm p-1\",\n                            children: \"E-mail:\"\n                        }, void 0, false, {\n                            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"name\",\n                            className: \"rounded-3xl w-48 p-1\",\n                            onChange: (e)=>setEmail(e.target.value),\n                            value: email\n                        }, void 0, false, {\n                            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"text-sm p-1\",\n                            children: \"Telefone\"\n                        }, void 0, false, {\n                            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"rounded-3xl w-48 p-1\",\n                            onChange: (e)=>setTelefones(e.target.value),\n                            value: telefone\n                        }, void 0, false, {\n                            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"Enviar\",\n                            className: \"p-2 mt-6 rounded-3xl px-4 bg-branco text-tema-site text-sm w-48\"\n                        }, void 0, false, {\n                            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(Formulario, \"B6aQUSaxYrwJu0tBxfxaPBOvb1o=\");\n_c = Formulario;\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm11bGFyaW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQWdDO0FBR2pCLFNBQVNDLGFBQWE7O0lBQ2pDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxVQUFVQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTFDLFNBQVNRLFVBQVVDLENBQUMsRUFBRTtRQUNsQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJUixTQUFTLE1BQU1FLFVBQVUsTUFBTUUsYUFBYSxJQUFJO1lBQ2hESyxNQUFNO1lBQ047UUFDSixDQUFDO1FBQ0RBLE1BQU07SUFDVjtJQUVBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDO29CQUNHQyxVQUFVUjtvQkFDVkssV0FBVTs7c0NBRVYsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFxQjs7Ozs7O3NDQUduQyw4REFBQ0k7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0E7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0M7NEJBQU1MLFdBQVU7c0NBQW1COzs7Ozs7c0NBR3BDLDhEQUFDTTs0QkFBTUMsTUFBSzs0QkFBT2xCLE1BQUs7NEJBQ3BCVyxXQUFVOzRCQUNWUSxVQUFVLENBQUNaLElBQU1OLFFBQVFNLEVBQUVhLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDdkNBLE9BQU9yQjs7Ozs7O3NDQUdYLDhEQUFDZ0I7NEJBQU1MLFdBQVU7c0NBQWM7Ozs7OztzQ0FHL0IsOERBQUNNOzRCQUFNQyxNQUFLOzRCQUFPbEIsTUFBSzs0QkFDcEJXLFdBQVU7NEJBQ1ZRLFVBQVUsQ0FBQ1osSUFBTUosU0FBU0ksRUFBRWEsTUFBTSxDQUFDQyxLQUFLOzRCQUN4Q0EsT0FBT25COzs7Ozs7c0NBRVgsOERBQUNjOzRCQUFNTCxXQUFVO3NDQUFjOzs7Ozs7c0NBRy9CLDhEQUFDTTs0QkFDR04sV0FBVTs0QkFDVlEsVUFBVSxDQUFDWixJQUFNRixhQUFhRSxFQUFFYSxNQUFNLENBQUNDLEtBQUs7NEJBQzVDQSxPQUFPakI7Ozs7OztzQ0FFWCw4REFBQ2E7NEJBQU1DLE1BQUs7NEJBQVNHLE9BQU07NEJBQ3ZCVixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsQyxDQUFDO0dBOUR1Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtdWxhcmlvLmpzeD8zMDM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtdWxhcmlvKCkge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3RlbGVmb25lLCBzZXRUZWxlZm9uZXNdID0gdXNlU3RhdGUoJycpXG5cbiAgICBmdW5jdGlvbiBzZW5kRW1haWwoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIgfHwgZW1haWwgPT09IFwiXCIgfHwgdGVsZWZvbmUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJlZW5jaGEgdG9kb3Mgb3MgY2FtcG9zXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWxlcnQoXCJ0ZXN0ZVwiKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiID5cbiAgICAgICAgICAgICAgICA8aDI+cm9kcmlnbzwvaDI+XG4gICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3NlbmRFbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC04IHctOTYgYmctdGVtYS1zaXRlIHJvdW5kZWQtbGFyZ2UgcHgtNCB0ZXh0LXdoaXRlIHJpZ2h0LTMyIHRvcC00OCBhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaWdhbW9zIHBhcmEgdm9jw6ohXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByZWVuY2hhIG8gZm9ybXVsYXJpbyBhYmFpeG8sPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5lIHJlY2ViYSBub3NzbyBjb250YXRvPC9wPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm9tZTpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0zeGwgdy00OCBwLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRS1tYWlsOlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCB3LTQ4IHAtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUZWxlZm9uZVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIHctNDggcC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGVsZWZvbmVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZWxlZm9uZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkVudmlhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgbXQtNiByb3VuZGVkLTN4bCBweC00IGJnLWJyYW5jbyB0ZXh0LXRlbWEtc2l0ZSB0ZXh0LXNtIHctNDhcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvcm11bGFyaW8iLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJ0ZWxlZm9uZSIsInNldFRlbGVmb25lcyIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJwIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Formulario.jsx\n"));

/***/ })

});