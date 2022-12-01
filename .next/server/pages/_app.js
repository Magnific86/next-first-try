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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Context */ \"./pages/components/Context.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_4__]);\nuuid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Provider({ Component , pageProps  }) {\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"dark\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [list, setlist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (theme === \"dark\") {\n            document.documentElement.classList.add(\"dark\");\n        } else if (theme === \"light\") {\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, [\n        theme\n    ]);\n    function handleResetForm() {\n        setName(\"\");\n        setImg(\"\");\n    }\n    function handleDelete(id) {\n        setlist(list.filter((l)=>l.id !== id));\n    }\n    function handleThemeSwitch() {\n        setTheme(theme === \"dark\" ? \"light\" : \"dark\");\n    }\n    function handleSubmit(e) {\n        e.preventDefault();\n        setlist([\n            ...list,\n            {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n                name,\n                img\n            }\n        ]);\n        setName(\"\");\n        setImg(\"\");\n    }\n    function handleName(e) {\n        setName(e.target.value);\n    }\n    function handleImg(e) {\n        setImg(e.target.value);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            theme,\n            name,\n            img,\n            handleImg,\n            handleName,\n            handleSubmit,\n            handleThemeSwitch,\n            list,\n            handleDelete,\n            handleResetForm\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\nnn\\\\pages\\\\_app.js\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\nnn\\\\pages\\\\_app.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ2E7QUFDRDtBQUNqQjtBQUVYLFNBQVNJLFNBQVMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN6RCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1csS0FBS0MsT0FBTyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUVuQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlNLFVBQVUsUUFBUTtZQUNwQlEsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUN6QyxPQUFPLElBQUlYLFVBQVUsU0FBUztZQUM1QlEsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztRQUM1QyxDQUFDO0lBQ0gsR0FBRztRQUFDWjtLQUFNO0lBR1YsU0FBU2Esa0JBQWtCO1FBQ3pCVixRQUFRO1FBQ1JFLE9BQU87SUFDVDtJQUVBLFNBQVNTLGFBQWFDLEVBQUUsRUFBRTtRQUN4QlIsUUFBUUQsS0FBS1UsTUFBTSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFRixFQUFFLEtBQUtBO0lBQ3BDO0lBRUEsU0FBU0csb0JBQW9CO1FBQzNCakIsU0FBU0QsVUFBVSxTQUFTLFVBQVUsTUFBTTtJQUM5QztJQUVBLFNBQVNtQixhQUFhQyxDQUFDLEVBQUU7UUFDdkJBLEVBQUVDLGNBQWM7UUFDaEJkLFFBQVE7ZUFBSUQ7WUFBTTtnQkFBRVMsSUFBSW5CLHdDQUFFQTtnQkFBSU07Z0JBQU1FO1lBQUk7U0FBRTtRQUMxQ0QsUUFBUTtRQUNSRSxPQUFPO0lBQ1Q7SUFFQSxTQUFTaUIsV0FBV0YsQ0FBQyxFQUFFO1FBQ3JCakIsUUFBUWlCLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSztJQUN4QjtJQUVBLFNBQVNDLFVBQVVMLENBQUMsRUFBRTtRQUNwQmYsT0FBT2UsRUFBRUcsTUFBTSxDQUFDQyxLQUFLO0lBQ3ZCO0lBRUEscUJBQ0UsOERBQUM3QixvRUFBZ0I7UUFDZjZCLE9BQU87WUFDTHhCO1lBQ0FFO1lBQ0FFO1lBQ0FxQjtZQUNBSDtZQUNBSDtZQUNBRDtZQUNBWjtZQUNBUTtZQUNBRDtRQUNGO2tCQUVBLDRFQUFDZjtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ubm4vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRleHRcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvdmlkZXIoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJkYXJrXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ltZywgc2V0SW1nXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGlzdCwgc2V0bGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGhlbWUgPT09IFwiZGFya1wiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgfSBlbHNlIGlmICh0aGVtZSA9PT0gXCJsaWdodFwiKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XG4gICAgfVxuICB9LCBbdGhlbWVdKTtcblxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlc2V0Rm9ybSgpIHtcbiAgICBzZXROYW1lKFwiXCIpXG4gICAgc2V0SW1nKFwiXCIpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGUoaWQpIHtcbiAgICBzZXRsaXN0KGxpc3QuZmlsdGVyKGwgPT4gbC5pZCAhPT0gaWQpKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGhlbWVTd2l0Y2goKSB7XG4gICAgc2V0VGhlbWUodGhlbWUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0bGlzdChbLi4ubGlzdCwgeyBpZDogdjQoKSwgbmFtZSwgaW1nIH1dKTtcbiAgICBzZXROYW1lKFwiXCIpO1xuICAgIHNldEltZyhcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5hbWUoZSkge1xuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW1nKGUpIHtcbiAgICBzZXRJbWcoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdGhlbWUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGltZyxcbiAgICAgICAgaGFuZGxlSW1nLFxuICAgICAgICBoYW5kbGVOYW1lLFxuICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgIGhhbmRsZVRoZW1lU3dpdGNoLFxuICAgICAgICBsaXN0LFxuICAgICAgICBoYW5kbGVEZWxldGUsXG4gICAgICAgIGhhbmRsZVJlc2V0Rm9ybVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250ZXh0IiwidjQiLCJQcm92aWRlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwic2V0VGhlbWUiLCJuYW1lIiwic2V0TmFtZSIsImltZyIsInNldEltZyIsImxpc3QiLCJzZXRsaXN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJoYW5kbGVSZXNldEZvcm0iLCJoYW5kbGVEZWxldGUiLCJpZCIsImZpbHRlciIsImwiLCJoYW5kbGVUaGVtZVN3aXRjaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZU5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/components/Context.js":
/*!*************************************!*\
  !*** ./pages/components/Context.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRW5DLE1BQU1DLHdCQUFVRCxvREFBYUE7QUFFN0IsaUVBQWVDLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ubm4vLi9wYWdlcy9jb21wb25lbnRzL0NvbnRleHQuanM/NjgzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIkNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Context.js\n");

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