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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Formulario; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Formulario() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function sendEmail(e) {\n        e.preventDefault();\n        if (name === \"\" || email === \"\" || message === \"\") {\n            alert(\"Preencha todos os campos\");\n            return;\n        }\n        alert(\"teste\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-60\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: sendEmail,\n                className: \"flex flex-col p-4 bg-slate-600 rounded-2xl px-4 border-double border-4 border-slate-300 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2\",\n                        children: \"Nome:\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\",\n                        className: \"rounded p-2\",\n                        placeholder: \"Digite o seu nome\",\n                        onChange: (e)=>setName(e.target.value),\n                        value: name\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2\",\n                        children: \"E-mail:\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\",\n                        className: \"rounded p-2\",\n                        placeholder: \"Digite seu e-mail\",\n                        onChange: (e)=>setEmail(e.target.value),\n                        value: email\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2\",\n                        children: \"Mensagem:\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        placeholder: \"Digite sua mensagem...\",\n                        className: \"rounded p-2\",\n                        onChange: (e)=>setMessage(e.target.value),\n                        value: message\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Enviar \",\n                        className: \"p-2 mt-2 bg-slate-700 hover:bg-slate-300 hover:text-slate-700 rounded-2xl px-4 border-double border-4 border-slate-300 hover:border-slate-700 text-white\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(Formulario, \"RRZHkkL1zEvDzxfy/n8TaoP+d9E=\");\n_c = Formulario;\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm11bGFyaW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQWdDO0FBR2pCLFNBQVNDLGFBQWE7O0lBQ2pDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLFNBQVNRLFVBQVVDLENBQUMsRUFBRTtRQUNsQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJUixTQUFTLE1BQU1FLFVBQVUsTUFBTUUsWUFBWSxJQUFJO1lBQy9DSyxNQUFNO1lBQ047UUFDSixDQUFDO1FBQ0RBLE1BQU07SUFDVjtJQUVBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0M7Z0JBQ0dDLFVBQVVQO2dCQUNWSyxXQUFVOztrQ0FFViw4REFBQ0c7d0JBQU1ILFdBQVU7a0NBQU87Ozs7OztrQ0FHeEIsOERBQUNJO3dCQUFNQyxNQUFLO3dCQUFPaEIsTUFBSzt3QkFDeEJXLFdBQVU7d0JBQ1ZNLGFBQVk7d0JBQ1JDLFVBQVUsQ0FBQ1gsSUFBTU4sUUFBUU0sRUFBRVksTUFBTSxDQUFDQyxLQUFLO3dCQUN2Q0EsT0FBT3BCOzs7Ozs7a0NBR1gsOERBQUNjO3dCQUFNSCxXQUFVO2tDQUFPOzs7Ozs7a0NBR3hCLDhEQUFDSTt3QkFBTUMsTUFBSzt3QkFBT2hCLE1BQUs7d0JBQ3hCVyxXQUFVO3dCQUNWTSxhQUFZO3dCQUVSQyxVQUFVLENBQUNYLElBQU1KLFNBQVNJLEVBQUVZLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDeENBLE9BQU9sQjs7Ozs7O2tDQUVYLDhEQUFDWTt3QkFBTUgsV0FBVTtrQ0FBTzs7Ozs7O2tDQUd4Qiw4REFBQ1U7d0JBQ0dKLGFBQVk7d0JBQ1pOLFdBQVU7d0JBQ1ZPLFVBQVUsQ0FBQ1gsSUFBTUYsV0FBV0UsRUFBRVksTUFBTSxDQUFDQyxLQUFLO3dCQUMxQ0EsT0FBT2hCOzs7Ozs7a0NBRVgsOERBQUNXO3dCQUFNQyxNQUFLO3dCQUFTSSxPQUFNO3dCQUUzQlQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE5QixDQUFDO0dBN0R1Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtdWxhcmlvLmpzeD8zMDM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtdWxhcmlvKCkge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cbiAgICBmdW5jdGlvbiBzZW5kRW1haWwoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIgfHwgZW1haWwgPT09IFwiXCIgfHwgbWVzc2FnZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgYWxlcnQoXCJQcmVlbmNoYSB0b2RvcyBvcyBjYW1wb3NcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhbGVydChcInRlc3RlXCIpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjBcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17c2VuZEVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNCBiZy1zbGF0ZS02MDAgcm91bmRlZC0yeGwgcHgtNCAgYm9yZGVyLWRvdWJsZSBib3JkZXItNCBib3JkZXItc2xhdGUtMzAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vbWU6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgbyBzZXUgbm9tZVwiICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFLW1haWw6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc2V1IGUtbWFpbFwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTWVuc2FnZW06XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc3VhIG1lbnNhZ2VtLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkVudmlhclxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgbXQtMiBiZy1zbGF0ZS03MDAgaG92ZXI6Ymctc2xhdGUtMzAwIGhvdmVyOnRleHQtc2xhdGUtNzAwIHJvdW5kZWQtMnhsIHB4LTQgIGJvcmRlci1kb3VibGUgYm9yZGVyLTQgYm9yZGVyLXNsYXRlLTMwMCBob3Zlcjpib3JkZXItc2xhdGUtNzAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybXVsYXJpbyIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Formulario.jsx\n"));

/***/ })

});