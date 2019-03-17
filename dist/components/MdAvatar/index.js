/*!
 * vue-material v1.0.0-beta-10.2-radarsu
 * Made with <3 by marcosmoura 2019
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("vue")) : factory(root["Vue"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, (function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 120);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/base/index.scss
var base = __webpack_require__(2);

// EXTERNAL MODULE: external {"root":"Vue","commonjs2":"vue","amd":"vue","commonjs":"vue"}
var external___root___Vue___commonjs2___vue___amd___vue___commonjs___vue__ = __webpack_require__(1);
var external___root___Vue___commonjs2___vue___amd___vue___commonjs___vue___default = /*#__PURE__*/__webpack_require__.n(external___root___Vue___commonjs2___vue___amd___vue___commonjs___vue__);

// CONCATENATED MODULE: ./src/core/utils/MdReactive.js


/* harmony default export */ var MdReactive = (function (data) {
  const Instance = {}

  external___root___Vue___commonjs2___vue___amd___vue___commonjs___vue___default.a.util.defineReactive(Instance, 'reactive', data)

  return Instance.reactive
});

// CONCATENATED MODULE: ./src/core/MdTheme.js


let msColor = null
let themeColor = null
let maskIcon = null

/* harmony default export */ var MdTheme = (new external___root___Vue___commonjs2___vue___amd___vue___commonjs___vue___default.a({
  data: () => ({
    prefix: 'md-theme-',
    theme: 'default',
    enabled: true,
    metaColors: false
  }),
  computed: {
    themeTarget () {
      if (!this.$isServer) {
        return document.documentElement
      }

      return false
    },
    fullThemeName () {
      return this.getThemeName()
    }
  },
  watch: {
    enabled: {
      immediate: true,
      handler () {
        const { fullThemeName, themeTarget, enabled } = this

        if (themeTarget) {
          if (enabled) {
            themeTarget.classList.add(fullThemeName)
            this.metaColors && this.setHtmlMetaColors(fullThemeName)
          } else {
            themeTarget.classList.remove(fullThemeName)
            this.metaColors && this.setHtmlMetaColors()
          }
        }
      }
    },
    theme (newTheme, oldTheme) {
      const { getThemeName, themeTarget } = this

      newTheme = getThemeName(newTheme)

      themeTarget.classList.remove(getThemeName(oldTheme))
      themeTarget.classList.add(newTheme)

      if (this.metaColors) {
        this.setHtmlMetaColors(newTheme)
      }
    },
    metaColors (meta) {
      if (meta) {
        this.setHtmlMetaColors(this.fullThemeName)
      } else {
        this.setHtmlMetaColors()
      }
    }
  },
  methods: {
    getAncestorTheme (component) {
      if (component) {
        const currentTheme = component.mdTheme
        const getParentThemeName = (parent) => {
          if (parent) {
            const { mdTheme, $parent } = parent

            if (mdTheme && mdTheme !== currentTheme) {
              return mdTheme
            }

            return getParentThemeName($parent)
          }

          return this.theme
        }

        return getParentThemeName(component.$parent)
      }

      return null
    },
    getThemeName (theme) {
      const themeName = theme || this.theme

      return this.prefix + themeName
    },
    setMicrosoftColors (primaryColor) {
      if (msColor) {
        msColor.setAttribute('content', primaryColor)
      }
    },
    setThemeColors (primaryColor) {
      if (themeColor) {
        themeColor.setAttribute('content', primaryColor)
      }
    },
    setMaskColors (primaryColor) {
      if (maskIcon) {
        maskIcon.setAttribute('color', primaryColor)
      }
    },
    setHtmlMetaColors (themeName) {
      let primaryColor = '#fff'

      if (themeName) {
        const computedStyle = window.getComputedStyle(document.documentElement)

        primaryColor = computedStyle.getPropertyValue(`--${themeName}-primary`)
      }

      if (primaryColor) {
        this.setMicrosoftColors(primaryColor)
        this.setThemeColors(primaryColor)
        this.setMaskColors(primaryColor)
      }
    }
  },
  mounted () {
    msColor = document.querySelector('[name="msapplication-TileColor"]')
    themeColor = document.querySelector('[name="theme-color"]')
    maskIcon = document.querySelector('[rel="mask-icon"]')

    if (this.enabled && this.metaColors) {
      window.addEventListener('load', () => {
        this.setHtmlMetaColors(this.fullThemeName)
      })
    }
  }
}));

// CONCATENATED MODULE: ./src/material.js




const init = () => {
  let material = new MdReactive({
    ripple: true,
    theming: {},
    locale: {
      startYear: 1900,
      endYear: 2099,
      dateFormat: 'YYYY-MM-DD',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D'],
      firstDayOfAWeek: 0
    },
    router: {
      linkActiveClass: 'router-link-active'
    }
  })

  Object.defineProperties(material.theming, {
    metaColors: {
      get: () => MdTheme.metaColors,
      set (metaColors) {
        MdTheme.metaColors = metaColors
      }
    },
    theme: {
      get: () => MdTheme.theme,
      set (theme) {
        MdTheme.theme = theme
      }
    },
    enabled: {
      get: () => MdTheme.enabled,
      set (enabled) {
        MdTheme.enabled = enabled
      }
    }
  })

  return material
}

/* harmony default export */ var src_material = __webpack_exports__["a"] = (Vue => {
  if (!Vue.material) {
    Vue.material = init()
    Vue.prototype.$material = Vue.material
  }
});


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_material_material__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdAvatar__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdAvatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdAvatar__);



/* harmony default export */ __webpack_exports__["default"] = (Vue => {
  Object(__WEBPACK_IMPORTED_MODULE_0_vue_material_material__["a" /* default */])(Vue)
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__MdAvatar__["default"].name, __WEBPACK_IMPORTED_MODULE_1__MdAvatar__["default"])
});


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <template>\r\n|   <div class=\"md-avatar\" :class=\"[$mdActiveTheme]\">\r\n|     <slot />\r");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n| @import \"~components/MdAnimation/variables\";\r\n| @import \"./base\";\r\n| @import \"./scrollbar\";\r");

/***/ })

/******/ });
}));