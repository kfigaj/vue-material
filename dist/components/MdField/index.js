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
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
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

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(56);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (1:0)\nYou may need an appropriate loader to handle this file type.\n| @import \"~components/MdAnimation/variables\";\r\n| @import \"./base\";\r\n| @import \"./scrollbar\";\r");

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_material_material__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdIcon__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MdIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MdIcon__);



/* harmony default export */ __webpack_exports__["default"] = (Vue => {
  Object(__WEBPACK_IMPORTED_MODULE_0_vue_material_material__["a" /* default */])(Vue)
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__MdIcon__["default"].name, __WEBPACK_IMPORTED_MODULE_1__MdIcon__["default"])
});


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <template>\r\n|   <md-svg-loader class=\"md-icon md-icon-image\" :md-src=\"mdSrc\" :class=\"[$mdActiveTheme]\" v-if=\"mdSrc\" @md-loaded=\"$emit('md-loaded')\" />\r\n|   <i class=\"md-icon md-icon-font\" :class=\"[$mdActiveTheme]\" v-else>\r");

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/material.js + 2 modules
var material = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/MdIcon/index.js
var MdIcon = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/MdField/MdSelect/MdSelect.vue
var MdSelect = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/MdField/MdSelect/MdOption.vue
var MdOption = __webpack_require__(58);

// EXTERNAL MODULE: ./src/components/MdField/MdSelect/MdOptgroup.vue
var MdOptgroup = __webpack_require__(59);

// CONCATENATED MODULE: ./src/components/MdField/MdSelect/index.js





/* harmony default export */ var MdField_MdSelect = (Vue => {
  Object(material["a" /* default */])(Vue)
  Vue.component(MdSelect["default"].name, MdSelect["default"])
  Vue.component(MdOption["default"].name, MdOption["default"])
  Vue.component(MdOptgroup["default"].name, MdOptgroup["default"])
});

// EXTERNAL MODULE: ./src/components/MdField/MdField.vue
var MdField = __webpack_require__(60);

// EXTERNAL MODULE: ./src/components/MdField/MdFile/MdFile.vue
var MdFile = __webpack_require__(61);

// EXTERNAL MODULE: ./src/components/MdField/MdInput/MdInput.vue
var MdInput = __webpack_require__(62);

// EXTERNAL MODULE: ./src/components/MdField/MdTextarea/MdTextarea.vue
var MdTextarea = __webpack_require__(63);

// CONCATENATED MODULE: ./src/components/MdField/index.js








/* harmony default export */ var components_MdField = __webpack_exports__["default"] = (Vue => {
  Object(material["a" /* default */])(Vue)
  Vue.use(MdIcon["default"])
  Vue.use(MdField_MdSelect)
  Vue.component(MdField["default"].name, MdField["default"])
  Vue.component(MdFile["default"].name, MdFile["default"])
  Vue.component(MdInput["default"].name, MdInput["default"])
  Vue.component(MdTextarea["default"].name, MdTextarea["default"])
});


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <template>\r\n|   <md-menu\r\n|     class=\"md-select\"\r");

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <template>\r\n|   <md-menu-item :class=\"optionClasses\" :disabled=\"isDisabled\" @click=\"setSelection\">\r\n|     <md-checkbox class=\"md-primary\" v-model=\"isChecked\" v-if=\"MdSelect.multiple\" :disabled=\"isDisabled\" />\r");

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <template>\r\n|   <div class=\"md-optgroup\">\r\n|     <md-subheader>{{ label }}</md-subheader>\r");

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <template>\r\n|   <div class=\"md-field\" :class=\"[$mdActiveTheme, fieldClasses]\" @blur=\"onBlur\">\r\n|     <slot />\r");

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <template>\r\n|   <div class=\"md-file\">\r\n|     <md-file-icon class=\"md-file-icon\" :class=\"iconClass\" @click.native=\"openPicker\" />\r");

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <template>\r\n|   <input\r\n|     class=\"md-input\"\r");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <template>\r\n|   <textarea\r\n|     class=\"md-textarea\"\r");

/***/ })

/******/ });
}));