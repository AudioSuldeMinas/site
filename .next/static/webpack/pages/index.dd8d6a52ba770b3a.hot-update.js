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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Formulario; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Formulario() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [telefone, setTelefones] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function sendEmail(e) {\n        e.preventDefault();\n        if (name === \"\" || email === \"\" || telefone === \"\") {\n            alert(\"Preencha todos os campos\");\n            return;\n        }\n        alert(\"teste\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-60\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: sendEmail,\n                className: \"flex flex-col justify-center items-center p-20 bg-tema-site rounded-3xl px-4 border-double border-4 border-branco text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Ligamos para voc\\xea!\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Preencha o formulario abaixo,e receba nosso contato\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2 text-sm p-1\",\n                        children: \"Nome:\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\",\n                        className: \"rounded-3xl p-2\",\n                        placeholder: \"Digite o seu nome\",\n                        onChange: (e)=>setName(e.target.value),\n                        value: name\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2 text-sm p-1\",\n                        children: \"E-mail:\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\",\n                        className: \"rounded-3xl p-2\",\n                        placeholder: \"Digite seu e-mail\",\n                        onChange: (e)=>setEmail(e.target.value),\n                        value: email\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"mt-2 text-sm p-1\",\n                        children: \"Telefone\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Digite seu telefone\",\n                        className: \"rounded-3xl p-2\",\n                        onChange: (e)=>setTelefones(e.target.value),\n                        value: telefone\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Enviar \",\n                        className: \"p-2 mt-2 bg-tema-site hover:bg-branco hover:text-tema-site rounded-2xl px-4 border-double border-4 border-branco hover:border-tema-site text-white text-sm\"\n                    }, void 0, false, {\n                        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/hebertdev82/Projetos/audioSuldeMinas/site/components/Formulario.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(Formulario, \"B6aQUSaxYrwJu0tBxfxaPBOvb1o=\");\n_c = Formulario;\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm11bGFyaW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQWdDO0FBR2pCLFNBQVNDLGFBQWE7O0lBQ2pDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxVQUFVQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTFDLFNBQVNRLFVBQVVDLENBQUMsRUFBRTtRQUNsQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJUixTQUFTLE1BQU1FLFVBQVUsTUFBTUUsYUFBYSxJQUFJO1lBQ2hESyxNQUFNO1lBQ047UUFDSixDQUFDO1FBQ0RBLE1BQU07SUFDVjtJQUVBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0M7Z0JBQ0dDLFVBQVVQO2dCQUNWSyxXQUFVOztrQ0FFViw4REFBQ0c7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0M7d0JBQU1MLFdBQVU7a0NBQW1COzs7Ozs7a0NBR3BDLDhEQUFDTTt3QkFBTUMsTUFBSzt3QkFBT2xCLE1BQUs7d0JBQ3BCVyxXQUFVO3dCQUNWUSxhQUFZO3dCQUNaQyxVQUFVLENBQUNiLElBQU1OLFFBQVFNLEVBQUVjLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDdkNBLE9BQU90Qjs7Ozs7O2tDQUdYLDhEQUFDZ0I7d0JBQU1MLFdBQVU7a0NBQW1COzs7Ozs7a0NBR3BDLDhEQUFDTTt3QkFBTUMsTUFBSzt3QkFBT2xCLE1BQUs7d0JBQ3BCVyxXQUFVO3dCQUNWUSxhQUFZO3dCQUVaQyxVQUFVLENBQUNiLElBQU1KLFNBQVNJLEVBQUVjLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDeENBLE9BQU9wQjs7Ozs7O2tDQUVYLDhEQUFDYzt3QkFBTUwsV0FBVTtrQ0FBbUI7Ozs7OztrQ0FHcEMsOERBQUNNO3dCQUNHRSxhQUFZO3dCQUNaUixXQUFVO3dCQUNWUyxVQUFVLENBQUNiLElBQU1GLGFBQWFFLEVBQUVjLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDNUNBLE9BQU9sQjs7Ozs7O2tDQUVYLDhEQUFDYTt3QkFBTUMsTUFBSzt3QkFBU0ksT0FBTTt3QkFFdkJYLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEMsQ0FBQztHQS9EdUJaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybXVsYXJpby5qc3g/MzAzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybXVsYXJpbygpIHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFt0ZWxlZm9uZSwgc2V0VGVsZWZvbmVzXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgZnVuY3Rpb24gc2VuZEVtYWlsKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiIHx8IGVtYWlsID09PSBcIlwiIHx8IHRlbGVmb25lID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIlByZWVuY2hhIHRvZG9zIG9zIGNhbXBvc1wiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFsZXJ0KFwidGVzdGVcIilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02MFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtzZW5kRW1haWx9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMjAgYmctdGVtYS1zaXRlIHJvdW5kZWQtM3hsIHB4LTQgIGJvcmRlci1kb3VibGUgYm9yZGVyLTQgYm9yZGVyLWJyYW5jbyB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5MaWdhbW9zIHBhcmEgdm9jw6ohPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+UHJlZW5jaGEgbyBmb3JtdWxhcmlvIGFiYWl4byxlIHJlY2ViYSBub3NzbyBjb250YXRvPC9wPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm9tZTpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0zeGwgcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gc2V1IG5vbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFLW1haWw6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIHAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzZXUgZS1tYWlsXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUZWxlZm9uZVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIHNldSB0ZWxlZm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCBwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZWxlZm9uZXMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RlbGVmb25lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiRW52aWFyXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgbXQtMiBiZy10ZW1hLXNpdGUgaG92ZXI6YmctYnJhbmNvIGhvdmVyOnRleHQtdGVtYS1zaXRlIHJvdW5kZWQtMnhsIHB4LTQgIGJvcmRlci1kb3VibGUgYm9yZGVyLTQgYm9yZGVyLWJyYW5jbyBob3Zlcjpib3JkZXItdGVtYS1zaXRlIHRleHQtd2hpdGUgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybXVsYXJpbyIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInRlbGVmb25lIiwic2V0VGVsZWZvbmVzIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJoMiIsInAiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Formulario.jsx\n"));

/***/ })

});