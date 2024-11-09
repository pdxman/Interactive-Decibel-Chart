import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

(0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('create-block', {
  actions: {
    updateColor() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      console.log("color: ", context.backgroundColor);
    },
    // toggleTextColor: () => {
    // 	const context = getContext();
    // 	context.color = context.color === 'red' ? 'green' : 'red' ; 
    // 	if(context.paddingTop == '300'){
    // 		context.paddingTop += 0; 
    // 	} else {
    // 		context.paddingTop += 10; 
    // 	}

    // 	console.log("increase ", context.paddingTop)
    // },
    toggleHeight: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (context.height < 140) {
        context.height += 10;
      }
      ;
      const sounds = context.sounds;
      const soundIndex = Math.floor(context.height / 10) % sounds.length; // Calculate sound index based on height

      context.sound = sounds[soundIndex];
      if (context.height < 30) {
        context.backgroundColor = '#00FF00';
      } else if (context.height < 60) {
        context.backgroundColor = '#66FF00';
      } else if (context.height < 90) {
        context.backgroundColor = '#FFFF00';
      } else if (context.height < 110) {
        context.backgroundColor = '#FF9900';
      } else {
        context.backgroundColor = '#FF0000';
      }
    },
    decreaseNumber: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (context.height > 0) {
        context.height -= 10;
      }
      ;
      const sounds = context.sounds;
      const soundIndex = Math.floor(context.height / 10) % sounds.length; // Calculate sound index based on height

      context.sound = sounds[soundIndex];
      if (context.height < 30) {
        context.backgroundColor = '#00FF00';
      } else if (context.height < 60) {
        context.backgroundColor = '#66FF00';
      } else if (context.height < 90) {
        context.backgroundColor = '#FFFF00';
      } else if (context.height < 110) {
        context.backgroundColor = '#FF9900';
      } else {
        context.backgroundColor = '#FF0000';
      }
    }
  }
});
})();


//# sourceMappingURL=view.js.map