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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Formulario; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Formulario() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function sendEmail(e) {\n        e.preventDefault();\n        if (name === \"\" || email === \"\" || message === \"\") {\n            alert(\"Preencha todos os campos\");\n            return;\n        }\n        alert(\"teste\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-60\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: sendEmail,\n                className: \"flex flex-col p-4 bg-slate-600 rounded-2xl px-4 border-double border-4 border-slate-300 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2\",\n                        children: \"Nome:\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\",\n                        className: \"rounded p-2\",\n                        placeholder: \"Digite o seu nome\",\n                        onChange: (e)=>setName(e.target.value),\n                        value: name\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2\",\n                        children: \"E-mail:\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\",\n                        className: \"rounded p-2\",\n                        placeholder: \"Digite seu e-mail\",\n                        onChange: (e)=>setEmail(e.target.value),\n                        value: email\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2\",\n                        children: \"Mensagem:\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        placeholder: \"Digite sua mensagem...\",\n                        className: \"rounded p-2\",\n                        onChange: (e)=>setMessage(e.target.value),\n                        value: message\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Enviar \",\n                        className: \"p-2 bg-slate-700 hover:bg-slate-300 hover:text-slate-700 rounded-2xl px-4 border-double border-4 border-slate-300 hover:border-slate-700 text-white\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-slate-700 hover:bg-slate-300 hover:text-slate-700 rounded-2xl px-4 border-double border-4 border-slate-300 hover:border-slate-700 text-white\",\n                        children: \"Learn More\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(Formulario, \"RRZHkkL1zEvDzxfy/n8TaoP+d9E=\");\n_c = Formulario;\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm11bGFyaW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQWdDO0FBR2pCLFNBQVNDLGFBQWE7O0lBQ2pDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLFNBQVNRLFVBQVVDLENBQUMsRUFBRTtRQUNsQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJUixTQUFTLE1BQU1FLFVBQVUsTUFBTUUsWUFBWSxJQUFJO1lBQy9DSyxNQUFNO1lBQ047UUFDSixDQUFDO1FBQ0RBLE1BQU07SUFDVjtJQUVBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0M7Z0JBQ0dDLFVBQVVQO2dCQUNWSyxXQUFVOztrQ0FFViw4REFBQ0c7d0JBQU1ILFdBQVU7a0NBQU87Ozs7OztrQ0FHeEIsOERBQUNJO3dCQUFNQyxNQUFLO3dCQUFPaEIsTUFBSzt3QkFDeEJXLFdBQVU7d0JBQ1ZNLGFBQVk7d0JBQ1JDLFVBQVUsQ0FBQ1gsSUFBTU4sUUFBUU0sRUFBRVksTUFBTSxDQUFDQyxLQUFLO3dCQUN2Q0EsT0FBT3BCOzs7Ozs7a0NBR1gsOERBQUNjO3dCQUFNSCxXQUFVO2tDQUFPOzs7Ozs7a0NBR3hCLDhEQUFDSTt3QkFBTUMsTUFBSzt3QkFBT2hCLE1BQUs7d0JBQ3hCVyxXQUFVO3dCQUNWTSxhQUFZO3dCQUVSQyxVQUFVLENBQUNYLElBQU1KLFNBQVNJLEVBQUVZLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDeENBLE9BQU9sQjs7Ozs7O2tDQUVYLDhEQUFDWTt3QkFBTUgsV0FBVTtrQ0FBTzs7Ozs7O2tDQUd4Qiw4REFBQ1U7d0JBQ0dKLGFBQVk7d0JBQ1pOLFdBQVU7d0JBQ1ZPLFVBQVUsQ0FBQ1gsSUFBTUYsV0FBV0UsRUFBRVksTUFBTSxDQUFDQyxLQUFLO3dCQUMxQ0EsT0FBT2hCOzs7Ozs7a0NBRVgsOERBQUNXO3dCQUFNQyxNQUFLO3dCQUFTSSxPQUFNO3dCQUUzQlQsV0FBVTs7Ozs7O2tDQUVWLDhEQUFDVzt3QkFBT1gsV0FBVTtrQ0FBbUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekwsQ0FBQztHQTlEdUJaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybXVsYXJpby5qc3g/MzAzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybXVsYXJpbygpIHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgZnVuY3Rpb24gc2VuZEVtYWlsKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiIHx8IGVtYWlsID09PSBcIlwiIHx8IG1lc3NhZ2UgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJlZW5jaGEgdG9kb3Mgb3MgY2FtcG9zXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWxlcnQoXCJ0ZXN0ZVwiKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTYwXCI+XG4gICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3NlbmRFbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTQgYmctc2xhdGUtNjAwIHJvdW5kZWQtMnhsIHB4LTQgIGJvcmRlci1kb3VibGUgYm9yZGVyLTQgYm9yZGVyLXNsYXRlLTMwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBOb21lOlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIHAtMlwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gc2V1IG5vbWVcIiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRS1tYWlsOlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIHAtMlwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIHNldSBlLW1haWxcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1lbnNhZ2VtOlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIHN1YSBtZW5zYWdlbS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIHAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJFbnZpYXJcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJnLXNsYXRlLTcwMCBob3ZlcjpiZy1zbGF0ZS0zMDAgaG92ZXI6dGV4dC1zbGF0ZS03MDAgcm91bmRlZC0yeGwgcHgtNCAgYm9yZGVyLWRvdWJsZSBib3JkZXItNCBib3JkZXItc2xhdGUtMzAwIGhvdmVyOmJvcmRlci1zbGF0ZS03MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctc2xhdGUtNzAwIGhvdmVyOmJnLXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXNsYXRlLTcwMCByb3VuZGVkLTJ4bCBweC00ICBib3JkZXItZG91YmxlIGJvcmRlci00IGJvcmRlci1zbGF0ZS0zMDAgaG92ZXI6Ym9yZGVyLXNsYXRlLTcwMCB0ZXh0LXdoaXRlXCI+TGVhcm4gTW9yZTwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvcm11bGFyaW8iLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Formulario.jsx\n"));

/***/ })

});