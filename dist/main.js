/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --bodyBG : rgb(0, 0, 0);\r\n    --bodyColor: rgb(246, 246, 246);\r\n    --topNavBG : rgb(0, 0, 0);\r\n    --topNavBtn : rgb(169, 255, 10);\r\n    --topNavBtnColor : rgb(238, 236, 236);\r\n    font-size: 16px;\r\n    --heading : white;\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    background-color: var(--bodyBG);\r\n    color: var(--bodyColor);\r\n    padding-top: 5rem;\r\n    height: 100vh;\r\n}\r\n.navHead {\r\n    background-color: var(--topNavBG);\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    padding: 0.5rem 0;\r\n    position: fixed;\r\n    top: 0;\r\n    padding: 1rem;\r\n    gap: 1rem;\r\n}\r\n.navHeadBtn {\r\n    font-size: 1.1rem;\r\n    font-weight: 500;\r\n    background-color: var(--topNavBtnBg);\r\n    background: none;\r\n    border: none;\r\n    color: var(--topNavBtnColor);\r\n    cursor: pointer;\r\n    transition: all 0.4s;\r\n}\r\n.navHeadBtn:hover{\r\n    color: rgb(255, 0, 123);\r\n    border-color: rgb(255, 0, 123);\r\n    transform: scale3d(1.1,1.1,1.1);\r\n}\r\n.active {\r\n    border-bottom: 1px solid var(--topNavBtn);\r\n    transform: scale3d(1.2, 1.2, 1.2);\r\n    font-weight: 500;\r\n    color: var(--topNavBtn);\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    background-color: var(--topNavBG);\r\n    color: var(--topNavBtn);\r\n    padding: 2rem 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    bottom: 0;\r\n    flex-wrap: wrap;\r\n}\r\n.footer h5{\r\n    font-size: 1.5rem;\r\n    font-weight: 300;\r\n    font-style: italic;\r\n}\r\n\r\n.coverSection {\r\n    font-size: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.heroImg {\r\n    max-width: 1000px;\r\n    width: 100%;\r\n    height: min-content;\r\n    margin: 0 auto;\r\n}\r\n\r\n.pageHeading {\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    padding: 0.5rem;\r\n    color: var(--heading);\r\n}\r\n.heroTxt{\r\n    font-size: 1.3rem;\r\n    line-height: 1.6rem;\r\n    text-align: center;\r\n    margin: 1rem;\r\n}\r\n.foodSection{\r\n    width: 100%;\r\n    padding: 2rem;\r\n    min-width: fit-content;\r\n}\r\n\r\n.foodTypeDiv{\r\n    background: rgb(44, 43, 43);\r\n    margin-bottom: 5rem;\r\n    text-align: left;\r\n    width: 100%;\r\n    padding: 3rem;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));\r\n    gap: 1rem;\r\n    min-width: fit-content;\r\n}\r\n\r\n.foodCategoryHeading {\r\n    font-size: 3rem;\r\n    text-align: left;\r\n    color: blanchedalmond;\r\n    font-weight: 400;\r\n}\r\n\r\n.foodItems {\r\n    text-align: center;\r\n    margin: 2rem 0;\r\n    background-color: rgb(0, 0, 0);\r\n    border-radius: 1rem;\r\n    padding: 2rem;\r\n    width: 100%;\r\n    height: 400px;\r\n    overflow: hidden;\r\n    display: grid;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n}\r\n.foodItems h3 {\r\n    font-size: 1.8rem;\r\n    font-weight: 300;\r\n    border-bottom: 1px solid whitesmoke;\r\n}\r\n.foodItems img {\r\n    width: 100%;\r\n    height: auto;\r\n    max-height: 300px;\r\n}\r\n\r\n.aboutContent{\r\n    padding: 1rem;\r\n    text-align: center;\r\n    display: grid;\r\n    gap: 3rem;\r\n}\r\n\r\n.aboutDiv {\r\n    background-color: rgb(206, 219, 159);\r\n    color: black;\r\n    border-radius: 1rem;\r\n    padding: 3rem 2rem;\r\n    display: grid;\r\n    gap: 2rem;\r\n    font-size: 1.2rem;\r\n    line-height: 1.3rem;\r\n    min-width: 300px;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n.aboutDiv h1{\r\n    font-size: 3.5rem;\r\n}\r\n.contactDiv{\r\n    display: grid;\r\n    gap: 0.5rem;\r\n    margin: 0 auto;\r\n}\r\n.contactDiv h2 {\r\n    color: var(--topNavBtn);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-restaurantpage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/About/aboutPage.js":
/*!********************************!*\
  !*** ./src/About/aboutPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer */ \"./src/footer.js\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);\r\n\r\n\r\nfunction aboutPage() {\r\n    const content = document.createElement(\"div\");\r\n    content.setAttribute(\"id\",\"content\");\r\n    content.classList.add(\"aboutContent\");\r\n\r\n    const aboutDiv = document.createElement(\"div\");\r\n    aboutDiv.classList.add(\"aboutDiv\");\r\n    const aboutHeading = document.createElement(\"h1\");\r\n    aboutHeading.textContent = \"About us\";\r\n    const aboutText = document.createElement(\"p\");\r\n    aboutText.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\";\r\n    aboutDiv.appendChild(aboutHeading);\r\n    aboutDiv.appendChild(aboutText);\r\n\r\n\r\n    const contactDiv = document.createElement(\"div\");\r\n    contactDiv.classList.add(\"contactDiv\");\r\n    const contactHead = document.createElement(\"h2\");\r\n    contactHead.textContent = \"Contact Information\";\r\n\r\n    const contactNo = document.createElement(\"p\");\r\n    contactNo.textContent = \"555-555-5555\";\r\n    const contactEmail = document.createElement(\"p\");\r\n    contactEmail.textContent = \"abcdefg@hikj.com\";\r\n    contactDiv.appendChild(contactHead);\r\n    contactDiv.appendChild(contactNo);\r\n    contactDiv.appendChild(contactEmail);\r\n\r\n\r\n    content.appendChild(aboutDiv);\r\n    content.appendChild(contactDiv);\r\n    content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    return content;\r\n}\n\n//# sourceURL=webpack://js-restaurantpage/./src/About/aboutPage.js?");

/***/ }),

/***/ "./src/Home/pageLoad.js":
/*!******************************!*\
  !*** ./src/Home/pageLoad.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer */ \"./src/footer.js\");\n/* harmony import */ var _heroImg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroImg.jpg */ \"./src/Home/heroImg.jpg\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\r\n\r\n\r\n\r\n\r\n//Home Page Function\r\nfunction pageLoad() {\r\n    const content = document.createElement(\"div\");\r\n    content.setAttribute(\"id\",\"content\");\r\n\r\n\r\n    const section = document.createElement(\"section\");\r\n    section.classList.add(\"coverSection\");\r\n    const pageHeading = document.createElement('h1');\r\n    pageHeading.classList.add(\"pageHeading\");\r\n    pageHeading.innerText = \"Restaurant Page\";\r\n    const heroImage = new Image();\r\n    heroImage.src = _heroImg_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    heroImage.setAttribute(\"height\",\"400px\");\r\n    heroImage.classList.add(\"heroImg\");\r\n\r\n    const heroTxt = document.createElement(\"p\");\r\n    heroTxt.classList.add(\"heroTxt\");\r\n    heroTxt.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum, et quaerat soluta ipsam, quasi quae quam eius repudiandae quis fugiat cum quia nesciunt sed deserunt officiis optio doloribus. Quo placeat architecto, laudantium similique tempora earum quibusdam, harum accusamus non corporis maxime. Assumenda autem, placeat, nulla officia magni vitae hic molestiae alias odio ratione tempora nobis ex inventore labore aspernatur odit eligendi, pariatur deleniti et non est culpa. Sit eligendi ut quisquam deleniti pariatur facilis, veniam sed error similique necessitatibus harum perspiciatis voluptatibus praesentium odio incidunt nulla est, dolor suscipit mollitia tenetur, nihil excepturi! Saepe soluta doloremque explicabo accusantium corporis.\";\r\n\r\n    section.appendChild(heroImage);\r\n    section.appendChild(pageHeading)\r\n    section.appendChild(heroTxt);\r\n\r\n\r\n\r\n\r\n\r\n    content.appendChild(section);  \r\n    content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());  \r\n    return content;\r\n}\r\n\n\n//# sourceURL=webpack://js-restaurantpage/./src/Home/pageLoad.js?");

/***/ }),

/***/ "./src/Menu/menuPage.js":
/*!******************************!*\
  !*** ./src/Menu/menuPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer */ \"./src/footer.js\");\n/* harmony import */ var _peachFizz_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peachFizz.jpg */ \"./src/Menu/peachFizz.jpg\");\n/* harmony import */ var _FrozenAppleMargarita_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FrozenAppleMargarita.jpg */ \"./src/Menu/FrozenAppleMargarita.jpg\");\n/* harmony import */ var _ChickenPie_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChickenPie.jpg */ \"./src/Menu/ChickenPie.jpg\");\n/* harmony import */ var _ZucchiniSlice_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ZucchiniSlice.jpg */ \"./src/Menu/ZucchiniSlice.jpg\");\n//Menu page\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction menuPage() {\r\n    const content = document.createElement(\"div\");\r\n    content.setAttribute(\"id\",\"content\");\r\n\r\n    const header = document.createElement(\"header\");\r\n    const menuHeading = document.createElement(\"h1\");\r\n    menuHeading.classList.add(\"pageHeading\")\r\n    menuHeading.textContent = \"Menu\";\r\n    header.appendChild(menuHeading);\r\n\r\n\r\n    //Menu section\r\n    const section = document.createElement(\"section\");\r\n    section.classList.add(\"foodSection\")\r\n    //beverages Section\r\n    const beverages = document.createElement(\"div\");\r\n    beverages.classList.add(\"foodTypeDiv\");\r\n    const bevHeading = document.createElement(\"h1\");\r\n    bevHeading.textContent = \"Beverages\";\r\n    bevHeading.classList.add(\"foodCategoryHeading\")\r\n    section.appendChild(bevHeading)\r\n\r\n    //PeachFizz\r\n    const peachFizz = document.createElement(\"div\");\r\n    peachFizz.classList.add(\"foodItems\");\r\n    const peachFizzHead = document.createElement(\"h3\");\r\n    peachFizzHead.textContent = \"Peach Fizz\";\r\n    const peachFizzImage = new Image();\r\n    peachFizzImage.src = _peachFizz_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n    peachFizz.appendChild(peachFizzHead);\r\n    peachFizz.appendChild(peachFizzImage);\r\n\r\n\r\n\r\n    //Frozen apple margarita\r\n    const frozenApple = document.createElement(\"div\");\r\n    frozenApple.classList.add(\"foodItems\");\r\n    const frozenAppleHead = document.createElement(\"h3\");\r\n    frozenAppleHead.textContent = \"Frozen apple margarita\";\r\n\r\n    const frozenAppleImg = new Image();\r\n    frozenAppleImg.src = _FrozenAppleMargarita_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\n    frozenApple.appendChild(frozenAppleHead)\r\n    frozenApple.appendChild(frozenAppleImg)\r\n\r\n\r\n\r\n    beverages.appendChild(peachFizz);\r\n    beverages.appendChild(frozenApple);\r\n\r\n\r\n    section.appendChild(beverages);\r\n    //Appending Beverage\r\n\r\n    //Dishes\r\n    const dishes = document.createElement(\"div\");\r\n    dishes.classList.add(\"foodTypeDiv\")\r\n    const dishesHead = document.createElement(\"h1\")\r\n    dishesHead.textContent = \"Dishes\";\r\n    dishesHead.classList.add(\"foodCategoryHeading\")\r\n    section.appendChild(dishesHead);\r\n\r\n    //ChickenPie\r\n    const chickenPie = document.createElement(\"div\");\r\n    chickenPie.classList.add(\"foodItems\");\r\n    const chickenPieHead = document.createElement(\"h3\");\r\n    chickenPieHead.textContent = \"Chicken Pie\";\r\n    const chickenPieimage = new Image();\r\n    chickenPieimage.src = _ChickenPie_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n    chickenPie.appendChild(chickenPieHead);\r\n    chickenPie.appendChild(chickenPieimage);\r\n\r\n    //Zucchini Slice\r\n    const zucchiniSliceDiv = document.createElement(\"div\");\r\n    zucchiniSliceDiv.classList.add(\"foodItems\");\r\n    const zucchiniSliceHead = document.createElement(\"h3\");\r\n    zucchiniSliceHead.textContent = \"Zucchini Slice\";\r\n    const zucchiniSliceImage = new Image();\r\n    zucchiniSliceImage.src = _ZucchiniSlice_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\n\r\n    zucchiniSliceDiv.appendChild(zucchiniSliceHead);\r\n    zucchiniSliceDiv.appendChild(zucchiniSliceImage);\r\n\r\n    dishes.appendChild(chickenPie);\r\n    dishes.appendChild(zucchiniSliceDiv);\r\n    section.appendChild(dishes);\r\n\r\n    \r\n    \r\n\r\n    content.appendChild(header);\r\n    content.appendChild(section);\r\n    content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    return content;\r\n}\n\n//# sourceURL=webpack://js-restaurantpage/./src/Menu/menuPage.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\r\nfunction footer() {\r\n    const footer = document.createElement(\"footer\");\r\n    footer.classList.add(\"footer\");\r\n    const footerNav = document.createElement(\"nav\");\r\n\r\n    const loc1 = document.createElement(\"h5\");\r\n    loc1.textContent = \"Location1\";\r\n    const loc2 = document.createElement(\"h5\");\r\n    loc2.textContent = \"Location2\";\r\n    const loc3 = document.createElement(\"h5\");\r\n    loc3.textContent = \"Location3\";\r\n\r\n    footer.appendChild(loc1);\r\n    footer.appendChild(loc2);\r\n    footer.appendChild(loc3);\r\n\r\n    return footer;\r\n}\n\n//# sourceURL=webpack://js-restaurantpage/./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home/pageLoad */ \"./src/Home/pageLoad.js\");\n/* harmony import */ var _Menu_menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu/menuPage */ \"./src/Menu/menuPage.js\");\n/* harmony import */ var _About_aboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About/aboutPage */ \"./src/About/aboutPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n//Nav Buttons\r\nconst head = document.createElement(\"div\");\r\nhead.classList.add(\"navHead\");\r\nconst homeBtn = document.createElement(\"button\");\r\nhomeBtn.classList.add(\"navHeadBtn\");\r\nhomeBtn.innerText = \"HOME\";\r\nconst menuBtn = document.createElement(\"button\");\r\nmenuBtn.classList.add(\"navHeadBtn\");\r\nmenuBtn.innerText = \"MENU\";\r\nconst aboutBtn = document.createElement(\"button\");\r\naboutBtn.classList.add(\"navHeadBtn\");\r\naboutBtn.innerText = \"ABOUT\";\r\n\r\nhead.appendChild(homeBtn);\r\nhead.appendChild(menuBtn);\r\nhead.appendChild(aboutBtn);\r\n\r\n\r\n\r\n\r\nconst body = document.querySelector('body');\r\nbody.appendChild(head);\r\nconst homePage = (0,_Home_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst menupage = (0,_Menu_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nconst aboutPage1 = (0,_About_aboutPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nhomeBtn.addEventListener(\"click\", () => {\r\n    body.appendChild(homePage);\r\n    menupage.remove();\r\n    aboutPage1.remove();\r\n    homeBtn.classList.add(\"active\");\r\n    menuBtn.classList.remove(\"active\");\r\n    aboutBtn.classList.remove(\"active\");\r\n});\r\nmenuBtn.addEventListener(\"click\", () => {\r\n    body.appendChild(menupage);\r\n    homePage.remove();\r\n    aboutPage1.remove();\r\n    menuBtn.classList.add(\"active\");\r\n    homeBtn.classList.remove(\"active\");\r\n    aboutBtn.classList.remove(\"active\");\r\n});\r\naboutBtn.addEventListener(\"click\", () => {\r\n    body.appendChild(aboutPage1);\r\n    homePage.remove();\r\n    menupage.remove();\r\n    aboutBtn.classList.add(\"active\");\r\n    homeBtn.classList.remove(\"active\");\r\n    menuBtn.classList.remove(\"active\");\r\n})\r\n\r\n\r\nwindow.addEventListener(\"load\",() => {\r\n    body.appendChild(homePage);\r\n    homeBtn.classList.add(\"active\");\r\n})\r\n/* body.appendChild(homePage); */\r\n/* body.appendChild(menupage); */\r\n/* body.appendChild(aboutPage1); */\n\n//# sourceURL=webpack://js-restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/Home/heroImg.jpg":
/*!******************************!*\
  !*** ./src/Home/heroImg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5116fc5aa900c5375553.jpg\";\n\n//# sourceURL=webpack://js-restaurantpage/./src/Home/heroImg.jpg?");

/***/ }),

/***/ "./src/Menu/ChickenPie.jpg":
/*!*********************************!*\
  !*** ./src/Menu/ChickenPie.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31c6b9f74d8bef97a042.jpg\";\n\n//# sourceURL=webpack://js-restaurantpage/./src/Menu/ChickenPie.jpg?");

/***/ }),

/***/ "./src/Menu/FrozenAppleMargarita.jpg":
/*!*******************************************!*\
  !*** ./src/Menu/FrozenAppleMargarita.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3d5a6ae197fe89d5d14a.jpg\";\n\n//# sourceURL=webpack://js-restaurantpage/./src/Menu/FrozenAppleMargarita.jpg?");

/***/ }),

/***/ "./src/Menu/ZucchiniSlice.jpg":
/*!************************************!*\
  !*** ./src/Menu/ZucchiniSlice.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1a1543d4b9d8f2d51845.jpg\";\n\n//# sourceURL=webpack://js-restaurantpage/./src/Menu/ZucchiniSlice.jpg?");

/***/ }),

/***/ "./src/Menu/peachFizz.jpg":
/*!********************************!*\
  !*** ./src/Menu/peachFizz.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"456068a581c2b148253c.jpg\";\n\n//# sourceURL=webpack://js-restaurantpage/./src/Menu/peachFizz.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;