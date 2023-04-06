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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    (__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        replyTo: req.body.email,\n        auth: {\n            user: process.env.usermail,\n            pass: process.env.password\n        },\n        secure: true\n    });\n    const mailData = {\n        from: \"audiosuldeminasmg@gmail.com\",\n        to: \"audiosuldeminasmg@gmail.com\",\n        subject: `Menssagem de contato de ${req.body.name}`,\n        text: \"Telefone:\" + req.body.message + \" |Enviado por: \" + req.body.email,\n        html: `<div>\n      <p><b>Telefone: </b>${req.body.message}</p>\n      </div><p><b>Enviado por: </b>${req.body.email}</p>`\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n    res.status(200);\n    res.send();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZCQUFlLG9DQUFVQSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNqQ0Msb0RBQXdCO0lBRXhCLElBQUlFLGFBQWFGLG1CQUFPQSxDQUFDO0lBQ3pCLE1BQU1HLGNBQWNELFdBQVdFLGVBQWUsQ0FBQztRQUM3Q0MsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFNBQVNULElBQUlVLElBQUksQ0FBQ0MsS0FBSztRQUN2QkMsTUFDQTtZQUNFQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFFBQVE7WUFDMUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csUUFBUTtRQUM1QjtRQUNBQyxRQUFRLElBQUk7SUFDZDtJQUNBLE1BQU1DLFdBQVc7UUFDZkMsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRXZCLElBQUlVLElBQUksQ0FBQ2MsSUFBSSxDQUFDLENBQUM7UUFDbkRDLE1BQU0sY0FBY3pCLElBQUlVLElBQUksQ0FBQ2dCLE9BQU8sR0FBRyxvQkFBb0IxQixJQUFJVSxJQUFJLENBQUNDLEtBQUs7UUFDekVnQixNQUFNLENBQUM7MEJBQ2UsRUFBRTNCLElBQUlVLElBQUksQ0FBQ2dCLE9BQU8sQ0FBQzttQ0FDVixFQUFFMUIsSUFBSVUsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3ZEO0lBQ0FOLFlBQVl1QixRQUFRLENBQUNSLFVBQVUsU0FBVVMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7UUFDbEQsSUFBSUQsS0FDRkUsUUFBUUMsR0FBRyxDQUFDSDthQUVaRSxRQUFRQyxHQUFHLENBQUNGO0lBQ2hCO0lBQ0E3QixJQUFJZ0MsTUFBTSxDQUFDO0lBQ1hoQyxJQUFJaUMsSUFBSTtBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QuanM/YmNiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcblxuICBsZXQgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKVxuICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICBwb3J0OiA0NjUsXG4gICAgaG9zdDogXCJzbXRwLmdtYWlsLmNvbVwiLFxuICAgIHJlcGx5VG86IHJlcS5ib2R5LmVtYWlsLFxuICAgIGF1dGg6XG4gICAge1xuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYudXNlcm1haWwsXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5wYXNzd29yZCxcbiAgICB9LFxuICAgIHNlY3VyZTogdHJ1ZSxcbiAgfSlcbiAgY29uc3QgbWFpbERhdGEgPSB7XG4gICAgZnJvbTogJ2F1ZGlvc3VsZGVtaW5hc21nQGdtYWlsLmNvbScsXG4gICAgdG86ICdhdWRpb3N1bGRlbWluYXNtZ0BnbWFpbC5jb20nLFxuICAgIHN1YmplY3Q6IGBNZW5zc2FnZW0gZGUgY29udGF0byBkZSAke3JlcS5ib2R5Lm5hbWV9YCxcbiAgICB0ZXh0OiBcIlRlbGVmb25lOlwiICsgcmVxLmJvZHkubWVzc2FnZSArIFwiIHxFbnZpYWRvIHBvcjogXCIgKyByZXEuYm9keS5lbWFpbCxcbiAgICBodG1sOiBgPGRpdj5cbiAgICAgIDxwPjxiPlRlbGVmb25lOiA8L2I+JHtyZXEuYm9keS5tZXNzYWdlfTwvcD5cbiAgICAgIDwvZGl2PjxwPjxiPkVudmlhZG8gcG9yOiA8L2I+JHtyZXEuYm9keS5lbWFpbH08L3A+YFxuICB9XG4gIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxEYXRhLCBmdW5jdGlvbiAoZXJyLCBpbmZvKSB7XG4gICAgaWYgKGVycilcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICBlbHNlXG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxuICB9KVxuICByZXMuc3RhdHVzKDIwMClcbiAgcmVzLnNlbmQoKVxufSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJyZXF1aXJlIiwiY29uZmlnIiwibm9kZW1haWxlciIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwicG9ydCIsImhvc3QiLCJyZXBseVRvIiwiYm9keSIsImVtYWlsIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwidXNlcm1haWwiLCJwYXNzIiwicGFzc3dvcmQiLCJzZWN1cmUiLCJtYWlsRGF0YSIsImZyb20iLCJ0byIsInN1YmplY3QiLCJuYW1lIiwidGV4dCIsIm1lc3NhZ2UiLCJodG1sIiwic2VuZE1haWwiLCJlcnIiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/contact.js\n");

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