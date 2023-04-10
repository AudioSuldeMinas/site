"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./src/pages/api/contact.js":
/*!**********************************!*\
  !*** ./src/pages/api/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    (__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        replyTo: req.body.email,\n        auth: {\n            user: \"audiosuldeminasmg@gmail.com\",\n            pass: \"thebpzrtscuaytmt\"\n        },\n        secure: true\n    });\n    const mailData = {\n        from: \"audiosuldeminasmg@gmail.com\",\n        to: \"audiosuldeminasmg@gmail.com\",\n        subject: `Menssagem de contato de ${req.body.name}`,\n        text: \"Telefone:\" + req.body.tel + \" |Enviado por: \" + req.body.email,\n        html: `<div>\n      <p><b>Telefone: </b>${req.body.tel}</p>\n      </div><p><b>Enviado por: </b>${req.body.email}</p>`\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n    res.status(200);\n    res.send();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZCQUFlLG9DQUFVQSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNqQ0Msb0RBQXdCO0lBRXhCLElBQUlFLGFBQWFGLG1CQUFPQSxDQUFDO0lBQ3pCLE1BQU1HLGNBQWNELFdBQVdFLGVBQWUsQ0FBQztRQUM3Q0MsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFNBQVNULElBQUlVLElBQUksQ0FBQ0MsS0FBSztRQUN2QkMsTUFDQTtZQUNFQyxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBQyxRQUFRLElBQUk7SUFDZDtJQUNBLE1BQU1DLFdBQVc7UUFDZkMsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRW5CLElBQUlVLElBQUksQ0FBQ1UsSUFBSSxDQUFDLENBQUM7UUFDbkRDLE1BQU0sY0FBY3JCLElBQUlVLElBQUksQ0FBQ1ksR0FBRyxHQUFFLG9CQUFvQnRCLElBQUlVLElBQUksQ0FBQ0MsS0FBSztRQUNwRVksTUFBTSxDQUFDOzBCQUNlLEVBQUV2QixJQUFJVSxJQUFJLENBQUNZLEdBQUcsQ0FBQzttQ0FDTixFQUFFdEIsSUFBSVUsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3ZEO0lBQ0FOLFlBQVltQixRQUFRLENBQUNSLFVBQVUsU0FBVVMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7UUFDbEQsSUFBSUQsS0FDRkUsUUFBUUMsR0FBRyxDQUFDSDthQUVaRSxRQUFRQyxHQUFHLENBQUNGO0lBQ2hCO0lBQ0F6QixJQUFJNEIsTUFBTSxDQUFDO0lBQ1g1QixJQUFJNkIsSUFBSTtBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QuanM/YmNiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcblxuICBsZXQgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKVxuICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICBwb3J0OiA0NjUsXG4gICAgaG9zdDogXCJzbXRwLmdtYWlsLmNvbVwiLFxuICAgIHJlcGx5VG86IHJlcS5ib2R5LmVtYWlsLFxuICAgIGF1dGg6XG4gICAge1xuICAgICAgdXNlcjogJ2F1ZGlvc3VsZGVtaW5hc21nQGdtYWlsLmNvbScsXG4gICAgICBwYXNzOiAndGhlYnB6cnRzY3VheXRtdCcsXG4gICAgfSxcbiAgICBzZWN1cmU6IHRydWUsXG4gIH0pXG4gIGNvbnN0IG1haWxEYXRhID0ge1xuICAgIGZyb206ICdhdWRpb3N1bGRlbWluYXNtZ0BnbWFpbC5jb20nLFxuICAgIHRvOiAnYXVkaW9zdWxkZW1pbmFzbWdAZ21haWwuY29tJyxcbiAgICBzdWJqZWN0OiBgTWVuc3NhZ2VtIGRlIGNvbnRhdG8gZGUgJHtyZXEuYm9keS5uYW1lfWAsXG4gICAgdGV4dDogXCJUZWxlZm9uZTpcIiArIHJlcS5ib2R5LnRlbCsgXCIgfEVudmlhZG8gcG9yOiBcIiArIHJlcS5ib2R5LmVtYWlsLFxuICAgIGh0bWw6IGA8ZGl2PlxuICAgICAgPHA+PGI+VGVsZWZvbmU6IDwvYj4ke3JlcS5ib2R5LnRlbH08L3A+XG4gICAgICA8L2Rpdj48cD48Yj5FbnZpYWRvIHBvcjogPC9iPiR7cmVxLmJvZHkuZW1haWx9PC9wPmBcbiAgfVxuICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsRGF0YSwgZnVuY3Rpb24gKGVyciwgaW5mbykge1xuICAgIGlmIChlcnIpXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgZWxzZVxuICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgfSlcbiAgcmVzLnN0YXR1cygyMDApXG4gIHJlcy5zZW5kKClcbn0iXSwibmFtZXMiOlsicmVxIiwicmVzIiwicmVxdWlyZSIsImNvbmZpZyIsIm5vZGVtYWlsZXIiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInBvcnQiLCJob3N0IiwicmVwbHlUbyIsImJvZHkiLCJlbWFpbCIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInNlY3VyZSIsIm1haWxEYXRhIiwiZnJvbSIsInRvIiwic3ViamVjdCIsIm5hbWUiLCJ0ZXh0IiwidGVsIiwiaHRtbCIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/contact.js"));
module.exports = __webpack_exports__;

})();