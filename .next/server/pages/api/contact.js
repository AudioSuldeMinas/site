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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    (__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        replyTo: req.body.email,\n        auth: {\n            user: process.env.usermail,\n            pass: process.env.password\n        },\n        secure: true\n    });\n    const mailData = {\n        from: \"audiosuldeminasmg@gmail.com\",\n        to: \"audiosuldeminasmg@gmail.com\",\n        subject: `Menssagem de contato de ${req.body.name}`,\n        text: \"Telefone:\" + req.body.message + \" |Enviado por: \" + req.body.email,\n        html: `<div><p><b>Telefone: </b>${req.body.message}</p></div><p><b>Enviado por</b>:\n    ${req.body.email}</p>`\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n    res.status(200);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZCQUFlLG9DQUFVQSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNqQ0Msb0RBQXdCO0lBRXhCLElBQUlFLGFBQWFGLG1CQUFPQSxDQUFDO0lBQ3pCLE1BQU1HLGNBQWNELFdBQVdFLGVBQWUsQ0FBQztRQUMzQ0MsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFNBQVFULElBQUlVLElBQUksQ0FBQ0MsS0FBSztRQUN0QkMsTUFBTTtZQUNGQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFFBQVE7WUFDMUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csUUFBUTtRQUM5QjtRQUNBQyxRQUFRLElBQUk7SUFDaEI7SUFDQSxNQUFNQyxXQUFXO1FBQ2JDLE1BQU07UUFDTkMsSUFBSTtRQUNKQyxTQUFTLENBQUMsd0JBQXdCLEVBQUV2QixJQUFJVSxJQUFJLENBQUNjLElBQUksQ0FBQyxDQUFDO1FBQ25EQyxNQUFLLGNBQWN6QixJQUFJVSxJQUFJLENBQUNnQixPQUFPLEdBQUcsb0JBQW9CMUIsSUFBSVUsSUFBSSxDQUFDQyxLQUFLO1FBQ3hFZ0IsTUFBTSxDQUFDLHlCQUF5QixFQUFFM0IsSUFBSVUsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDO0lBQ3JELEVBQUUxQixJQUFJVSxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDeEI7SUFDQU4sWUFBWXVCLFFBQVEsQ0FBQ1IsVUFBVSxTQUFVUyxHQUFHLEVBQUVDLElBQUksRUFBRTtRQUNoRCxJQUFJRCxLQUNBRSxRQUFRQyxHQUFHLENBQUNIO2FBRVpFLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDcEI7SUFDQTdCLElBQUlnQyxNQUFNLENBQUM7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL2FwaS9jb250YWN0LmpzP2JjYjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXG5cbiAgbGV0IG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJylcbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICBwb3J0OiA0NjUsXG4gICAgICBob3N0OiBcInNtdHAuZ21haWwuY29tXCIsXG4gICAgICByZXBseVRvOnJlcS5ib2R5LmVtYWlsLFxuICAgICAgYXV0aDoge1xuICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LnVzZXJtYWlsLFxuICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LnBhc3N3b3JkLFxuICAgICAgfSxcbiAgICAgIHNlY3VyZTogdHJ1ZSxcbiAgfSlcbiAgY29uc3QgbWFpbERhdGEgPSB7XG4gICAgICBmcm9tOiAnYXVkaW9zdWxkZW1pbmFzbWdAZ21haWwuY29tJyxcbiAgICAgIHRvOiAnYXVkaW9zdWxkZW1pbmFzbWdAZ21haWwuY29tJyxcbiAgICAgIHN1YmplY3Q6IGBNZW5zc2FnZW0gZGUgY29udGF0byBkZSAke3JlcS5ib2R5Lm5hbWV9YCxcbiAgICAgIHRleHQ6XCJUZWxlZm9uZTpcIiArIHJlcS5ib2R5Lm1lc3NhZ2UgKyBcIiB8RW52aWFkbyBwb3I6IFwiICsgcmVxLmJvZHkuZW1haWwsXG4gICAgICBodG1sOiBgPGRpdj48cD48Yj5UZWxlZm9uZTogPC9iPiR7cmVxLmJvZHkubWVzc2FnZX08L3A+PC9kaXY+PHA+PGI+RW52aWFkbyBwb3I8L2I+OlxuICAgICR7cmVxLmJvZHkuZW1haWx9PC9wPmBcbiAgfVxuICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsRGF0YSwgZnVuY3Rpb24gKGVyciwgaW5mbykge1xuICAgICAgaWYgKGVycilcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICBlbHNlXG4gICAgICAgICAgY29uc29sZS5sb2coaW5mbylcbiAgfSlcbiAgcmVzLnN0YXR1cygyMDApXG59Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsInJlcXVpcmUiLCJjb25maWciLCJub2RlbWFpbGVyIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJwb3J0IiwiaG9zdCIsInJlcGx5VG8iLCJib2R5IiwiZW1haWwiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJ1c2VybWFpbCIsInBhc3MiLCJwYXNzd29yZCIsInNlY3VyZSIsIm1haWxEYXRhIiwiZnJvbSIsInRvIiwic3ViamVjdCIsIm5hbWUiLCJ0ZXh0IiwibWVzc2FnZSIsImh0bWwiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/contact.js\n");

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