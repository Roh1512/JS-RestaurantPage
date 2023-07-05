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

/***/ "./src/About/aboutPage.js":
/*!********************************!*\
  !*** ./src/About/aboutPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer */ \"./src/footer.js\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);\r\n\r\n\r\nfunction aboutPage() {\r\n    const content = document.createElement(\"div\");\r\n    content.setAttribute(\"id\",\"content\");\r\n\r\n    const aboutDiv = document.createElement(\"div\");\r\n    const aboutHeading = document.createElement(\"h1\");\r\n    aboutHeading.textContent = \"About us\";\r\n    const aboutText = document.createElement(\"p\");\r\n    aboutText.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\";\r\n    aboutDiv.appendChild(aboutHeading);\r\n    aboutDiv.appendChild(aboutText);\r\n\r\n\r\n    const contactDiv = document.createElement(\"div\");\r\n    const contactHead = document.createElement(\"h2\");\r\n    contactHead.textContent = \"Contact Information\";\r\n\r\n    const contactNo = document.createElement(\"p\");\r\n    contactNo.textContent = \"555-555-5555\";\r\n    const contactEmail = document.createElement(\"p\");\r\n    contactEmail.textContent = \"abcdefg@hikj.com\";\r\n    contactDiv.appendChild(contactHead);\r\n    contactDiv.appendChild(contactNo);\r\n    contactDiv.appendChild(contactEmail);\r\n\r\n\r\n    content.appendChild(aboutDiv);\r\n    content.appendChild(contactDiv);\r\n    content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    return content;\r\n}\n\n//# sourceURL=webpack://js-restaurantpage/./src/About/aboutPage.js?");

/***/ }),

/***/ "./src/Home/pageLoad.js":
/*!******************************!*\
  !*** ./src/Home/pageLoad.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer */ \"./src/footer.js\");\n/* harmony import */ var _heroImg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroImg.jpg */ \"./src/Home/heroImg.jpg\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\r\n\r\n\r\n\r\n\r\n//Home Page Function\r\nfunction pageLoad() {\r\n    const content = document.createElement(\"div\");\r\n    content.setAttribute(\"id\",\"content\");\r\n    const header = document.createElement('header');\r\n    const pageHeading = document.createElement('h1');\r\n    pageHeading.innerText = \"Restaurant Page\"\r\n    header.appendChild(pageHeading);\r\n\r\n\r\n    const section = document.createElement(\"section\");\r\n    const heroImage = new Image();\r\n    heroImage.src = _heroImg_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    heroImage.setAttribute(\"height\",\"400px\");\r\n\r\n    const heroTxt = document.createElement(\"p\");\r\n    heroTxt.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum, et quaerat soluta ipsam, quasi quae quam eius repudiandae quis fugiat cum quia nesciunt sed deserunt officiis optio doloribus. Quo placeat architecto, laudantium similique tempora earum quibusdam, harum accusamus non corporis maxime. Assumenda autem, placeat, nulla officia magni vitae hic molestiae alias odio ratione tempora nobis ex inventore labore aspernatur odit eligendi, pariatur deleniti et non est culpa. Sit eligendi ut quisquam deleniti pariatur facilis, veniam sed error similique necessitatibus harum perspiciatis voluptatibus praesentium odio incidunt nulla est, dolor suscipit mollitia tenetur, nihil excepturi! Saepe soluta doloremque explicabo accusantium corporis.\";\r\n\r\n    section.appendChild(heroImage);\r\n    section.appendChild(heroTxt);\r\n\r\n\r\n\r\n\r\n\r\n\r\n    content.appendChild(header);\r\n    content.appendChild(section);  \r\n    content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());  \r\n    return content;\r\n}\r\n\n\n//# sourceURL=webpack://js-restaurantpage/./src/Home/pageLoad.js?");

/***/ }),

/***/ "./src/Menu/menuPage.js":
/*!******************************!*\
  !*** ./src/Menu/menuPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer */ \"./src/footer.js\");\n/* harmony import */ var _peachFizz_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peachFizz.jpg */ \"./src/Menu/peachFizz.jpg\");\n/* harmony import */ var _FrozenAppleMargarita_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FrozenAppleMargarita.jpg */ \"./src/Menu/FrozenAppleMargarita.jpg\");\n/* harmony import */ var _ChickenPie_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChickenPie.jpg */ \"./src/Menu/ChickenPie.jpg\");\n/* harmony import */ var _ZucchiniSlice_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ZucchiniSlice.jpg */ \"./src/Menu/ZucchiniSlice.jpg\");\n//Menu page\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction menuPage() {\r\n    const content = document.createElement(\"div\");\r\n    content.setAttribute(\"id\",\"content\");\r\n\r\n    const header = document.createElement(\"header\");\r\n    const menuHeading = document.createElement(\"h1\");\r\n    menuHeading.textContent = \"Menu\";\r\n    header.appendChild(menuHeading);\r\n\r\n\r\n    //Menu section\r\n    const section = document.createElement(\"section\");\r\n    //beverages Section\r\n    const beverages = document.createElement(\"div\");\r\n    const bevHeading = document.createElement(\"h1\");\r\n    bevHeading.textContent = \"Beverages\";\r\n    beverages.appendChild(bevHeading);\r\n\r\n    //PeachFizz\r\n    const peachFizz = document.createElement(\"div\");\r\n    const peachFizzHead = document.createElement(\"h3\");\r\n    peachFizzHead.textContent = \"Peach Fizz\";\r\n    const peachFizzImage = new Image();\r\n    peachFizzImage.src = _peachFizz_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    peachFizzImage.setAttribute(\"height\",\"300px\");\r\n\r\n    peachFizz.appendChild(peachFizzHead);\r\n    peachFizz.appendChild(peachFizzImage);\r\n\r\n\r\n\r\n    //Frozen apple margarita\r\n    const frozenApple = document.createElement(\"div\");\r\n    const frozenAppleHead = document.createElement(\"h3\");\r\n    frozenAppleHead.textContent = \"Frozen apple margarita\";\r\n\r\n    const frozenAppleImg = new Image();\r\n    frozenAppleImg.src = _FrozenAppleMargarita_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n    frozenAppleImg.setAttribute(\"height\", \"300px\");\r\n\r\n    frozenApple.appendChild(frozenAppleHead)\r\n    frozenApple.appendChild(frozenAppleImg)\r\n\r\n\r\n\r\n    beverages.appendChild(peachFizz);\r\n    beverages.appendChild(frozenApple);\r\n\r\n\r\n    section.appendChild(beverages);\r\n    //Appending Beverage\r\n\r\n    //Dishes\r\n    const dishes = document.createElement(\"div\");\r\n    const dishesHead = document.createElement(\"h1\")\r\n    dishesHead.textContent = \"Dishes\";\r\n    dishes.appendChild(dishesHead);\r\n\r\n    //ChickenPie\r\n    const chickenPie = document.createElement(\"div\");\r\n    const chickenPieHead = document.createElement(\"h3\");\r\n    chickenPieHead.textContent = \"Chicken Pie\";\r\n    const chickenPieimage = new Image();\r\n    chickenPieimage.src = _ChickenPie_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n    chickenPieimage.setAttribute(\"height\",\"300px\");\r\n\r\n    chickenPie.appendChild(chickenPieHead);\r\n    chickenPie.appendChild(chickenPieimage);\r\n\r\n    //Zucchini Slice\r\n    const zucchiniSliceDiv = document.createElement(\"div\");\r\n    const zucchiniSliceHead = document.createElement(\"h1\");\r\n    zucchiniSliceHead.textContent = \"Zucchini Slice\";\r\n    const zucchiniSliceImage = new Image();\r\n    zucchiniSliceImage.src = _ZucchiniSlice_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\n    zucchiniSliceImage.setAttribute(\"height\",\"300px\");\r\n\r\n    zucchiniSliceDiv.appendChild(zucchiniSliceHead);\r\n    zucchiniSliceDiv.appendChild(zucchiniSliceImage);\r\n\r\n    dishes.appendChild(chickenPie);\r\n    dishes.appendChild(zucchiniSliceDiv);\r\n    section.appendChild(dishes);\r\n\r\n    \r\n    \r\n\r\n    content.appendChild(header);\r\n    content.appendChild(section);\r\n    content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    return content;\r\n}\n\n//# sourceURL=webpack://js-restaurantpage/./src/Menu/menuPage.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\r\nfunction footer() {\r\n    const footer = document.createElement(\"footer\");\r\n    const footerNav = document.createElement(\"nav\");\r\n\r\n    const loc1 = document.createElement(\"h5\");\r\n    loc1.textContent = \"Location1\";\r\n    const loc2 = document.createElement(\"h5\");\r\n    loc2.textContent = \"Location2\";\r\n    const loc3 = document.createElement(\"h5\");\r\n    loc3.textContent = \"Location3\";\r\n\r\n    footer.appendChild(loc1);\r\n    footer.appendChild(loc2);\r\n    footer.appendChild(loc3);\r\n\r\n    return footer;\r\n}\n\n//# sourceURL=webpack://js-restaurantpage/./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home/pageLoad */ \"./src/Home/pageLoad.js\");\n/* harmony import */ var _Menu_menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu/menuPage */ \"./src/Menu/menuPage.js\");\n/* harmony import */ var _About_aboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About/aboutPage */ \"./src/About/aboutPage.js\");\n\r\n\r\n\r\n\r\n\r\n//Nav Buttons\r\nconst head = document.createElement(\"div\");\r\nhead.classList.add(\"navHead\")\r\nconst homeBtn = document.createElement(\"button\");\r\nhomeBtn.classList.add(\"navHeadBtn\");\r\nhomeBtn.innerText = \"HOME\";\r\nconst menuBtn = document.createElement(\"button\");\r\nhomeBtn.classList.add(\"navHeadBtn\");\r\nmenuBtn.innerText = \"MENU\";\r\nconst aboutBtn = document.createElement(\"button\");\r\nhomeBtn.classList.add(\"navHeadBtn\");\r\naboutBtn.innerText = \"ABOUT\";\r\n\r\nhead.appendChild(homeBtn);\r\nhead.appendChild(menuBtn);\r\nhead.appendChild(aboutBtn);\r\n\r\n\r\n\r\n\r\nconst body = document.querySelector('body');\r\nbody.appendChild(head);\r\nconst homePage = (0,_Home_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst menupage = (0,_Menu_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nconst aboutPage1 = (0,_About_aboutPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nlet count = 0;\r\nhomeBtn.addEventListener(\"click\", () => {\r\n    body.appendChild(homePage);\r\n    menupage.remove();\r\n    aboutPage1.remove();\r\n});\r\nmenuBtn.addEventListener(\"click\", () => {\r\n    body.appendChild(menupage);\r\n    homePage.remove();\r\n    aboutPage1.remove();\r\n});\r\naboutBtn.addEventListener(\"click\", () => {\r\n    body.appendChild(aboutPage1);\r\n    homePage.remove();\r\n    menupage.remove();\r\n})\r\n\r\n\r\nwindow.addEventListener(\"load\",() => {\r\n    body.appendChild(homePage);\r\n})\r\n/* body.appendChild(homePage); */\r\n/* body.appendChild(menupage); */\r\n/* body.appendChild(aboutPage1); */\n\n//# sourceURL=webpack://js-restaurantpage/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;