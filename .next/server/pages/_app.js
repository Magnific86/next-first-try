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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Context */ \"./pages/components/Context.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_4__]);\nuuid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Provider({ Component , pageProps  }) {\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"dark\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [list, setlist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (theme === \"dark\") {\n            document.documentElement.classList.add(\"dark\");\n        } else if (theme === \"light\") {\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, [\n        theme\n    ]);\n    function handleResetForm() {\n        setName(\"\");\n        setImg(\"\");\n    }\n    function handleDelete(id) {\n        setlist(list.filter((l)=>l.id !== id));\n    }\n    function handleThemeSwitch() {\n        setTheme(theme === \"dark\" ? \"light\" : \"dark\");\n    }\n    function handleSubmit(e) {\n        e.preventDefault();\n        setlist([\n            ...list,\n            {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n                name,\n                img\n            }\n        ]);\n        setName(\"\");\n        setImg(\"\");\n    }\n    function handleName(e) {\n        setName(e.target.value);\n    }\n    function handleImg(e) {\n        setImg(e.target.value);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            theme,\n            name,\n            img,\n            handleImg,\n            handleName,\n            handleSubmit,\n            handleThemeSwitch,\n            list,\n            handleDelete,\n            handleResetForm\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\first-next-try\\\\pages\\\\_app.js\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\first-next-try\\\\pages\\\\_app.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ2E7QUFDRDtBQUNqQjtBQUVYLFNBQVNJLFNBQVMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN6RCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1csS0FBS0MsT0FBTyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUVuQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlNLFVBQVUsUUFBUTtZQUNwQlEsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUN6QyxPQUFPLElBQUlYLFVBQVUsU0FBUztZQUM1QlEsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUM1QyxDQUFDO0lBQ0gsR0FBRztRQUFDWjtLQUFNO0lBR1YsU0FBU2Esa0JBQWtCO1FBQ3pCVixRQUFRO1FBQ1JFLE9BQU87SUFDVDtJQUVBLFNBQVNTLGFBQWFDLEVBQUUsRUFBRTtRQUN4QlIsUUFBUUQsS0FBS1UsTUFBTSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFRixFQUFFLEtBQUtBO0lBQ3BDO0lBRUEsU0FBU0csb0JBQW9CO1FBQzNCakIsU0FBU0QsVUFBVSxTQUFTLFVBQVUsTUFBTTtJQUM5QztJQUVBLFNBQVNtQixhQUFhQyxDQUFDLEVBQUU7UUFDdkJBLEVBQUVDLGNBQWM7UUFDaEJkLFFBQVE7ZUFBSUQ7WUFBTTtnQkFBRVMsSUFBSW5CLHdDQUFFQTtnQkFBSU07Z0JBQU1FO1lBQUk7U0FBRTtRQUMxQ0QsUUFBUTtRQUNSRSxPQUFPO0lBQ1Q7SUFFQSxTQUFTaUIsV0FBV0YsQ0FBQyxFQUFFO1FBQ3JCakIsUUFBUWlCLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSztJQUN4QjtJQUVBLFNBQVNDLFVBQVVMLENBQUMsRUFBRTtRQUNwQmYsT0FBT2UsRUFBRUcsTUFBTSxDQUFDQyxLQUFLO0lBQ3ZCO0lBRUEscUJBQ0UsOERBQUM3QixvRUFBZ0I7UUFDZjZCLE9BQU87WUFDTHhCO1lBQ0FFO1lBQ0FFO1lBQ0FxQjtZQUNBSDtZQUNBSDtZQUNBRDtZQUNBWjtZQUNBUTtZQUNBRDtRQUNGO2tCQUVBLDRFQUFDZjtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vY29tcG9uZW50cy9Db250ZXh0XCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3ZpZGVyKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwiZGFya1wiKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpbWcsIHNldEltZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xpc3QsIHNldGxpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHRoZW1lID09PSBcImRhcmtcIikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuICAgIH0gZWxzZSBpZiAodGhlbWUgPT09IFwibGlnaHRcIikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xuICAgIH1cbiAgfSwgW3RoZW1lXSk7XG5cblxuICBmdW5jdGlvbiBoYW5kbGVSZXNldEZvcm0oKSB7XG4gICAgc2V0TmFtZShcIlwiKVxuICAgIHNldEltZyhcIlwiKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKGlkKSB7XG4gICAgc2V0bGlzdChsaXN0LmZpbHRlcihsID0+IGwuaWQgIT09IGlkKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRoZW1lU3dpdGNoKCkge1xuICAgIHNldFRoZW1lKHRoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldGxpc3QoWy4uLmxpc3QsIHsgaWQ6IHY0KCksIG5hbWUsIGltZyB9XSk7XG4gICAgc2V0TmFtZShcIlwiKTtcbiAgICBzZXRJbWcoXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOYW1lKGUpIHtcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUltZyhlKSB7XG4gICAgc2V0SW1nKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHRoZW1lLFxuICAgICAgICBuYW1lLFxuICAgICAgICBpbWcsXG4gICAgICAgIGhhbmRsZUltZyxcbiAgICAgICAgaGFuZGxlTmFtZSxcbiAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICBoYW5kbGVUaGVtZVN3aXRjaCxcbiAgICAgICAgbGlzdCxcbiAgICAgICAgaGFuZGxlRGVsZXRlLFxuICAgICAgICBoYW5kbGVSZXNldEZvcm1cbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRleHQiLCJ2NCIsIlByb3ZpZGVyIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJzZXRUaGVtZSIsIm5hbWUiLCJzZXROYW1lIiwiaW1nIiwic2V0SW1nIiwibGlzdCIsInNldGxpc3QiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhhbmRsZVJlc2V0Rm9ybSIsImhhbmRsZURlbGV0ZSIsImlkIiwiZmlsdGVyIiwibCIsImhhbmRsZVRoZW1lU3dpdGNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTmFtZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlSW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/components/Context.js":
/*!*************************************!*\
  !*** ./pages/components/Context.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRW5DLE1BQU1DLHdCQUFVRCxvREFBYUE7QUFFN0IsaUVBQWVDLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIzLy4vcGFnZXMvY29tcG9uZW50cy9Db250ZXh0LmpzPzY4MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRleHRcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Context.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();