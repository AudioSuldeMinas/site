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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Formulario; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Formulario() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [telefone, setTelefones] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function sendEmail(e) {\n        e.preventDefault();\n        if (name === \"\" || email === \"\" || telefone === \"\") {\n            alert(\"Preencha todos os campos\");\n            return;\n        }\n        alert(\"teste\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-60\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: sendEmail,\n                className: \"flex flex-col justify-center items-center p-4 w-96 bg-tema-site rounded-3xl px-4 border-double border-4 border-branco text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold\",\n                        children: \"Ligamos para voc\\xea!\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Preencha o formulario abaixo,\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"e receba nosso contato\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2 text-sm p-1\",\n                        children: \"Nome:\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\",\n                        className: \"rounded-3xl w-56 p-2\",\n                        placeholder: \"Digite o seu nome\",\n                        onChange: (e)=>setName(e.target.value),\n                        value: name\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2 text-sm p-1\",\n                        children: \"E-mail:\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\",\n                        className: \"rounded-3xl w-56 p-2\",\n                        placeholder: \"Digite seu e-mail\",\n                        onChange: (e)=>setEmail(e.target.value),\n                        value: email\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2 text-sm p-1\",\n                        children: \"Telefone\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Digite seu telefone\",\n                        className: \"rounded-3xl w-56 p-2\",\n                        onChange: (e)=>setTelefones(e.target.value),\n                        value: telefone\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Enviar\",\n                        className: \"p-2 mt-9 rounded-3xl px-4 bg-branco text-tema-site text-sm w-56\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(Formulario, \"B6aQUSaxYrwJu0tBxfxaPBOvb1o=\");\n_c = Formulario;\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm11bGFyaW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQWdDO0FBR2pCLFNBQVNDLGFBQWE7O0lBQ2pDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxVQUFVQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTFDLFNBQVNRLFVBQVVDLENBQUMsRUFBRTtRQUNsQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJUixTQUFTLE1BQU1FLFVBQVUsTUFBTUUsYUFBYSxJQUFJO1lBQ2hESyxNQUFNO1lBQ047UUFDSixDQUFDO1FBQ0RBLE1BQU07SUFDVjtJQUVBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0M7Z0JBQ0dDLFVBQVVQO2dCQUNWSyxXQUFVOztrQ0FFViw4REFBQ0c7d0JBQUdILFdBQVU7a0NBQXFCOzs7Ozs7a0NBR25DLDhEQUFDSTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQzt3QkFBTUwsV0FBVTtrQ0FBbUI7Ozs7OztrQ0FHcEMsOERBQUNNO3dCQUFNQyxNQUFLO3dCQUFPbEIsTUFBSzt3QkFDcEJXLFdBQVU7d0JBQ1ZRLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ2IsSUFBTU4sUUFBUU0sRUFBRWMsTUFBTSxDQUFDQyxLQUFLO3dCQUN2Q0EsT0FBT3RCOzs7Ozs7a0NBR1gsOERBQUNnQjt3QkFBTUwsV0FBVTtrQ0FBbUI7Ozs7OztrQ0FHcEMsOERBQUNNO3dCQUFNQyxNQUFLO3dCQUFPbEIsTUFBSzt3QkFDcEJXLFdBQVU7d0JBQ1ZRLGFBQVk7d0JBRVpDLFVBQVUsQ0FBQ2IsSUFBTUosU0FBU0ksRUFBRWMsTUFBTSxDQUFDQyxLQUFLO3dCQUN4Q0EsT0FBT3BCOzs7Ozs7a0NBRVgsOERBQUNjO3dCQUFNTCxXQUFVO2tDQUFtQjs7Ozs7O2tDQUdwQyw4REFBQ007d0JBQ0dFLGFBQVk7d0JBQ1pSLFdBQVU7d0JBQ1ZTLFVBQVUsQ0FBQ2IsSUFBTUYsYUFBYUUsRUFBRWMsTUFBTSxDQUFDQyxLQUFLO3dCQUM1Q0EsT0FBT2xCOzs7Ozs7a0NBRVgsOERBQUNhO3dCQUFNQyxNQUFLO3dCQUFTSSxPQUFNO3dCQUN2QlgsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNsQyxDQUFDO0dBbEV1Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtdWxhcmlvLmpzeD8zMDM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtdWxhcmlvKCkge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3RlbGVmb25lLCBzZXRUZWxlZm9uZXNdID0gdXNlU3RhdGUoJycpXG5cbiAgICBmdW5jdGlvbiBzZW5kRW1haWwoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIgfHwgZW1haWwgPT09IFwiXCIgfHwgdGVsZWZvbmUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJlZW5jaGEgdG9kb3Mgb3MgY2FtcG9zXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWxlcnQoXCJ0ZXN0ZVwiKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYwXCI+XG4gICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3NlbmRFbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC00IHctOTYgYmctdGVtYS1zaXRlIHJvdW5kZWQtM3hsIHB4LTQgIGJvcmRlci1kb3VibGUgYm9yZGVyLTQgYm9yZGVyLWJyYW5jbyB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpZ2Ftb3MgcGFyYSB2b2PDqiFcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+UHJlZW5jaGEgbyBmb3JtdWxhcmlvIGFiYWl4byw8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPmUgcmVjZWJhIG5vc3NvIGNvbnRhdG88L3A+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBOb21lOlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCB3LTU2IHAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIHNldSBub21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRS1tYWlsOlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCB3LTU2IHAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzZXUgZS1tYWlsXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUZWxlZm9uZVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIHNldSB0ZWxlZm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCB3LTU2IHAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRlbGVmb25lcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGVsZWZvbmV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJFbnZpYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIG10LTkgcm91bmRlZC0zeGwgcHgtNCBiZy1icmFuY28gdGV4dC10ZW1hLXNpdGUgdGV4dC1zbSB3LTU2XCJcblxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvcm11bGFyaW8iLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJ0ZWxlZm9uZSIsInNldFRlbGVmb25lcyIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaDIiLCJwIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Formulario.jsx\n"));

/***/ })

});