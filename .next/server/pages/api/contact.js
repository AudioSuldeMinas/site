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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    (__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        replyTo: req.body.email,\n        auth: {\n            user: process.env.usermail,\n            pass: process.env.password\n        },\n        secure: true\n    });\n    const mailData = {\n        from: process.env.usermail,\n        to: process.env.usermail,\n        subject: `Menssagem de contato de ${req.body.name}`,\n        text: \"Telefone:\" + req.body.tel + \" |Enviado por: \" + req.body.email,\n        html: `<div>\n      <p><b>Telefone: </b>${req.body.tel}</p>\n      </div><p><b>Enviado por: </b>${req.body.email}</p>`\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n        res.send();\n    });\n    res.status(200);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZCQUFlLG9DQUFVQSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNqQ0Msb0RBQXdCO0lBRXhCLElBQUlFLGFBQWFGLG1CQUFPQSxDQUFDO0lBQ3pCLE1BQU1HLGNBQWNELFdBQVdFLGVBQWUsQ0FBQztRQUM3Q0MsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFNBQVNULElBQUlVLElBQUksQ0FBQ0MsS0FBSztRQUN2QkMsTUFDQTtZQUNFQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFFBQVE7WUFDMUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csUUFBUTtRQUM1QjtRQUNBQyxRQUFRLElBQUk7SUFDZDtJQUNBLE1BQU1DLFdBQVc7UUFDZkMsTUFBTVAsUUFBUUMsR0FBRyxDQUFDQyxRQUFRO1FBQzFCTSxJQUFJUixRQUFRQyxHQUFHLENBQUNDLFFBQVE7UUFDeEJPLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRXZCLElBQUlVLElBQUksQ0FBQ2MsSUFBSSxDQUFDLENBQUM7UUFDbkRDLE1BQU0sY0FBY3pCLElBQUlVLElBQUksQ0FBQ2dCLEdBQUcsR0FBRSxvQkFBb0IxQixJQUFJVSxJQUFJLENBQUNDLEtBQUs7UUFDcEVnQixNQUFNLENBQUM7MEJBQ2UsRUFBRTNCLElBQUlVLElBQUksQ0FBQ2dCLEdBQUcsQ0FBQzttQ0FDTixFQUFFMUIsSUFBSVUsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3ZEO0lBQ0FOLFlBQVl1QixRQUFRLENBQUNSLFVBQVUsU0FBVVMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7UUFDbEQsSUFBSUQsS0FDRkUsUUFBUUMsR0FBRyxDQUFDSDthQUVaRSxRQUFRQyxHQUFHLENBQUNGO1FBQ1o3QixJQUFJZ0MsSUFBSTtJQUNaO0lBQ0FoQyxJQUFJaUMsTUFBTSxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9hcGkvY29udGFjdC5qcz9iY2I3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICByZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxuXG4gIGxldCBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHBvcnQ6IDQ2NSxcbiAgICBob3N0OiBcInNtdHAuZ21haWwuY29tXCIsXG4gICAgcmVwbHlUbzogcmVxLmJvZHkuZW1haWwsXG4gICAgYXV0aDpcbiAgICB7XG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi51c2VybWFpbCxcbiAgICAgIHBhc3M6IHByb2Nlc3MuZW52LnBhc3N3b3JkLFxuICAgIH0sXG4gICAgc2VjdXJlOiB0cnVlLFxuICB9KVxuICBjb25zdCBtYWlsRGF0YSA9IHtcbiAgICBmcm9tOiBwcm9jZXNzLmVudi51c2VybWFpbCxcbiAgICB0bzogcHJvY2Vzcy5lbnYudXNlcm1haWwsXG4gICAgc3ViamVjdDogYE1lbnNzYWdlbSBkZSBjb250YXRvIGRlICR7cmVxLmJvZHkubmFtZX1gLFxuICAgIHRleHQ6IFwiVGVsZWZvbmU6XCIgKyByZXEuYm9keS50ZWwrIFwiIHxFbnZpYWRvIHBvcjogXCIgKyByZXEuYm9keS5lbWFpbCxcbiAgICBodG1sOiBgPGRpdj5cbiAgICAgIDxwPjxiPlRlbGVmb25lOiA8L2I+JHtyZXEuYm9keS50ZWx9PC9wPlxuICAgICAgPC9kaXY+PHA+PGI+RW52aWFkbyBwb3I6IDwvYj4ke3JlcS5ib2R5LmVtYWlsfTwvcD5gXG4gIH1cbiAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIGZ1bmN0aW9uIChlcnIsIGluZm8pIHtcbiAgICBpZiAoZXJyKVxuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIGVsc2VcbiAgICAgIGNvbnNvbGUubG9nKGluZm8pXG4gICAgICByZXMuc2VuZCgpXG4gIH0pXG4gIHJlcy5zdGF0dXMoMjAwKVxufSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJyZXF1aXJlIiwiY29uZmlnIiwibm9kZW1haWxlciIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwicG9ydCIsImhvc3QiLCJyZXBseVRvIiwiYm9keSIsImVtYWlsIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwidXNlcm1haWwiLCJwYXNzIiwicGFzc3dvcmQiLCJzZWN1cmUiLCJtYWlsRGF0YSIsImZyb20iLCJ0byIsInN1YmplY3QiLCJuYW1lIiwidGV4dCIsInRlbCIsImh0bWwiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwic2VuZCIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/contact.js\n");

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