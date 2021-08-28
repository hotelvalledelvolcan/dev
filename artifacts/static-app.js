(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"icons": "_-_-_-src-components-Services-Services-module__icons--awCKm",
	"titleService": "_-_-_-src-components-Services-Services-module__titleService--1vwhT"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(49);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(51);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(29);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(31);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(30);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(18);

var _helpers = __webpack_require__(52);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48)(module)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Gallery = function Gallery() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    tns({
      container: ".my-slider-photos",
      autoplay: true,
      autoplayTimeout: 4000,
      swipeAngle: false,
      speed: 600,
      items: 2,
      mouseDrag: true,
      nav: false,
      controls: false,
      autoplayButtonOutput: false,
      responsive: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 3
        }
      }, "900", {
        items: 5
      })
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "instagram-area fix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container-fluid p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-xl-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "instagram-active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-slider-photos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/termas-invierno.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/laguna-verde.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/termas.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/termas-2.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/termas-3.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/salto-del-agrio.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/termas-nevadas.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/copahue-verano.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/termas-4.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/salto-del-gigante.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/termas-cartel.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/termas-puente.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/termas-5.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/termas-nieve.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/cartel-bienvenida.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "images/carousel/termas-6.jpg",
    alt: ""
  }))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Gallery);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coverAnimations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);



var CoverSubPage = function CoverSubPage(_ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_coverAnimations__WEBPACK_IMPORTED_MODULE_1__[/* mainSlider */ "a"])();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single-slider slider-height2 d-flex align-items-center position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-7 col-lg-7 col-md-8 col-sm-10  position-sticky"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-caption"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    "data-animation": "fadeInLeft",
    "data-delay": ".4s"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    "data-animation": "fadeInLeft",
    "data-delay": ".6s"
  }, description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-img hero-img2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    alt: "",
    "data-animation": "fadeInRight",
    "data-transition-duration": "5s"
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (CoverSubPage);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Rooms/Item.jsx


var Item_Item = function Item(_ref) {
  var title = _ref.title,
      image = _ref.image,
      price = _ref.price,
      description = _ref.description;
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col-4",
    style: {
      width: "468.25px",
      marginRight: "10px"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "single-items"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "items-img"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: image,
    alt: ""
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "items-cap"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/external_react_default.a.createElement("h5", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/index.html#"
  }, title)), /*#__PURE__*/external_react_default.a.createElement("span", null, "$", /*#__PURE__*/external_react_default.a.createElement("span", {
    id: "precio-jornada-sin-pension"
  }, price), "/Noche")), /*#__PURE__*/external_react_default.a.createElement("p", null, description)))));
};

/* harmony default export */ var Rooms_Item = (Item_Item);
// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Rooms/Rooms.jsx



var Rooms_Rooms = function Rooms() {
  return /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "popular-item-area fix"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container-fluid p-0"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col-xl-4 col-lg-4"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "section-tittle text-center mb-60"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Nuestros Precios")))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/external_react_default.a.createElement(Rooms_Item, {
    title: "Jornada sin pensi\xF3n",
    image: "images/rooms/habitacion.jpg",
    price: "450",
    description: "Alojamiento con unicamente desayuno y merienda"
  }), /*#__PURE__*/external_react_default.a.createElement(Rooms_Item, {
    title: "Jornada con pesi\xF3n completa",
    image: "images/rooms/comedor.jpg",
    price: "450",
    description: "Alojamiento con las 4 comidas!"
  }), /*#__PURE__*/external_react_default.a.createElement(Rooms_Item, {
    title: "Jornada con media pensi\xF3n",
    image: "images/rooms/sala.jpg",
    price: "450",
    description: "Alojamiento con almuerzo o cena."
  })))));
};

/* harmony default export */ var components_Rooms_Rooms = __webpack_exports__["a"] = (Rooms_Rooms);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Testimonials/Item.jsx


var Item_Item = function Item() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "client-caption",
    style: {
      width: "585px"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("h3", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/index.html#"
  }, "Nice Accommodation")), /*#__PURE__*/external_react_default.a.createElement("p", null, "\"Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch."), /*#__PURE__*/external_react_default.a.createElement("span", null, "- Omeka Lotus"));
};

/* harmony default export */ var Testimonials_Item = (Item_Item);
// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Testimonials/Testimonials.jsx



var Testimonials_Testimonials = function Testimonials() {
  Object(external_react_["useEffect"])(function () {
    tns({
      container: ".my-slider-clients",
      autoplay: false,
      autoplayTimeout: 2000,
      swipeAngle: false,
      speed: 200,
      items: 2,
      mouseDrag: true,
      nav: false,
      autoplayButtonOutput: false,
      prevButton: "#prevbutton",
      nextButton: "#nextbutton",
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        }
      }
    });
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "client-say"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "my-slider-clients"
  }, /*#__PURE__*/external_react_default.a.createElement(Testimonials_Item, null), /*#__PURE__*/external_react_default.a.createElement(Testimonials_Item, null), /*#__PURE__*/external_react_default.a.createElement(Testimonials_Item, null), /*#__PURE__*/external_react_default.a.createElement(Testimonials_Item, null), /*#__PURE__*/external_react_default.a.createElement(Testimonials_Item, null), /*#__PURE__*/external_react_default.a.createElement(Testimonials_Item, null), /*#__PURE__*/external_react_default.a.createElement(Testimonials_Item, null), /*#__PURE__*/external_react_default.a.createElement(Testimonials_Item, null)), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/external_react_default.a.createElement("i", {
    id: "prevbutton",
    className: "fas fa-arrow-left"
  }), /*#__PURE__*/external_react_default.a.createElement("i", {
    id: "nextbutton",
    className: "fas fa-arrow-right"
  }))));
};

/* harmony default export */ var components_Testimonials_Testimonials = __webpack_exports__["a"] = (Testimonials_Testimonials);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(18);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(50)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AboutUs = function AboutUs(_ref) {
  var text1 = _ref.text1,
      text2 = _ref.text2,
      text3 = _ref.text3;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-low-area about-bg pt-padding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-9 col-lg-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tittle text-center mb-60"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, text1)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-4 col-lg-4 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-caption"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-tittle section-tittle2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, text2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/index.html#",
    className: "btn"
  }, "Saber m\xE1s")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-7 col-lg-7 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-img "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-font-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "600px",
    src: "images/hotel-estructura.jpg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-back-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/salto-del-agrio.jpg",
    alt: ""
  }))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (AboutUs);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var VideoPreview = function VideoPreview() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    $(".popup-video").magnificPopup({
      type: "iframe",
      closeOnContentClick: true
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-wrap video-height-bg section-bg2 position-relative",
    "data-background": "https://www.neuqueninforma.gob.ar/wp-content/uploads/2018/11/Web...El-complejo-termal-de-Copahue-abre-sus-puertas-_2015_efraindavila.com-70.jpg",
    style: {
      backgroundImage: "url(https://www.neuqueninforma.gob.ar/wp-content/uploads/2018/11/Web...El-complejo-termal-de-Copahue-abre-sus-puertas-_2015_efraindavila.com-70.jpg)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "popup-video btn-icon",
    href: "https://www.youtube.com/watch?v=QUOV5ktvtY0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/play-button.svg",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Video Copahue")))));
};

/* harmony default export */ __webpack_exports__["a"] = (VideoPreview);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Blog/Miniature/ArticleMiniature.jsx


var ArticleMiniature_ArticleMiniature = function ArticleMiniature(_ref) {
  var title = _ref.title,
      image = _ref.image,
      description = _ref.description;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col-lg-4 col-md-6 col-sm-6"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "single-blogs mb-30"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "blog-img"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: image,
    alt: ""
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "blogs-cap"
  }, /*#__PURE__*/external_react_default.a.createElement("h5", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/index.html#"
  }, title)), /*#__PURE__*/external_react_default.a.createElement("p", null, description))));
};

/* harmony default export */ var Miniature_ArticleMiniature = (ArticleMiniature_ArticleMiniature);
// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Blog/Miniature/BlogSectionMiniature.jsx



var BlogSectionMiniature_BlogSectionMiniature = function BlogSectionMiniature() {
  return /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "home-blog section-padding40 fix"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col-xl-4 col-lg-4"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "section-tittle text-center mb-60"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Nuestro Blog")))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/external_react_default.a.createElement(Miniature_ArticleMiniature, {
    title: "Termas de Copahue seguras y\r responsables",
    image: "images/blog/barro.jpg",
    description: "La temporada termal comenz\xF3 en diciembre, con una apertura diferente y con cambios debido a la\r pandemia"
  }), /*#__PURE__*/external_react_default.a.createElement(Miniature_ArticleMiniature, {
    title: "Copahue, un destino de energ\xEDa en un\r para\xEDso volc\xE1nico",
    image: "images/blog/barro2.jpg",
    description: "Uno de los centros termales m\xE1s importantes del mundo readecu\xF3 sus protocolos e instalaciones para\r una estad\xEDa segura en el medio de la pandemia por coronavirus."
  }), /*#__PURE__*/external_react_default.a.createElement(Miniature_ArticleMiniature, {
    title: "La historia de las termas de\r Copahue",
    image: "images/blog/termas.jpg",
    description: "Copahue en mapuche significa \u201Clugar de azufre\u201D y fueron los indios Pehuenches quienes descubrieron\r que las emanaciones del suelo ten\xEDan propiedades curativas. "
  }))));
};

/* harmony default export */ var Miniature_BlogSectionMiniature = __webpack_exports__["a"] = (BlogSectionMiniature_BlogSectionMiniature);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainSlider; });
/* unused harmony export doAnimations */
var mainSlider = function mainSlider() {
  var BasicSlider = $(".slider-active");
  BasicSlider.on("init", function (e, slick) {
    var $firstAnimatingElements = $(".single-slider:first-child").find("[data-animation]");
    doAnimations($firstAnimatingElements);
  });
  BasicSlider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find("[data-animation]");
    doAnimations($animatingElements);
  });

  try {
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      fade: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }]
    });
  } catch (error) {}
};

var doAnimations = function doAnimations(elements) {
  var animationEndEvents = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  elements.each(function () {
    var $this = $(this);
    var $animationDelay = $this.data("delay");
    var $animationType = "animated " + $this.data("animation");
    $this.css({
      "animation-delay": $animationDelay,
      "-webkit-animation-delay": $animationDelay
    });
    $this.addClass($animationType).one(animationEndEvents, function () {
      $this.removeClass($animationType);
    });
  });
};



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
/* harmony import */ var _components_Preloader_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22);
/* harmony import */ var _components_BackToTop_BackToTop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23);
/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20);
/* harmony import */ var _pages_AboutUsPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var App = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_6__["Root"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          overflow: "visible"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Preloader_Spinner__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Suspense, {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("em", null, "Loading...")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_6__["Routes"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_BackToTop_BackToTop__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(9);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_About_AboutUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _components_Rooms_Rooms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _components_Blog_Miniature_BlogSectionMiniature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _components_VIdeoPreview_VideoPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _components_Cover_CoverSubPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);









var AboutUsPage = function AboutUsPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cover_CoverSubPage__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "El Hotel",
    description: ["Hotel Valle Del Volcán lleva más de 25 años acercandote ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " a las termas de Copahue"],
    image: "images/centro-termal-portada.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About_AboutUs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    text1: "Hotel valle del volc\xE1n es un establecimiento tres estrellas atendido por sus due\xF1os, con un trato personalizado y cuidado hacia todos nuestros clientes.",
    text2: "Garantizar una relaci\xF3n precio-calidad excelente.",
    text3: "Contamos con men\xFA fijo y dietas especiales a pedido de nuestros clientes, todas nuestras comidas se realizan de forma casera y sana para acompa\xF1ar de manera acorde el tratamiento termal."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Rooms_Rooms__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VIdeoPreview_VideoPreview__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Blog_Miniature_BlogSectionMiniature__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutUsPage);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Header/Header.jsx + 5 modules
var Header = __webpack_require__(24);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Footer/Footer.jsx
var Footer = __webpack_require__(21);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(14);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Cover/CoverImage.jsx



var CoverImage_CoverImage = function CoverImage() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-img"
  }, /*#__PURE__*/external_react_default.a.createElement("img", defineProperty_default()({
    src: "images/centro-termal-portada.jpg",
    alt: "",
    className: "header-image",
    "data-animation": "fadeInRight",
    "data-transition-duration": "5s"
  }, "className", "")));
};

/* harmony default export */ var Cover_CoverImage = (CoverImage_CoverImage);
// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Cover/CoverPage.jsx


var CoverPage_CoverPage = function CoverPage() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col-xl-7 col-lg-7 col-md-8 col-sm-10  position-sticky"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-caption"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    "data-animation": "fadeInLeft",
    "data-delay": ".4s",
    className: "",
    style: {
      animationDelay: "0.4s"
    }
  }, "Visita las Termas de Copahue"), /*#__PURE__*/external_react_default.a.createElement("p", {
    "data-animation": "fadeInLeft",
    "data-delay": ".6s",
    className: "",
    style: {
      animationDelay: "0.6s"
    }
  }, "Hotel Valle Del Volc\xE1n lleva m\xE1s de 25 ", /*#__PURE__*/external_react_default.a.createElement("br", null), "a\xF1os acercandote a las termas de Copahue"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/index.html#",
    className: "btn hero-btn",
    "data-animation": "fadeInLeft",
    "data-delay": ".9s",
    tabIndex: "0",
    style: {
      animationDelay: "0.9s"
    }
  }, "Ver M\xE1s")))));
};

/* harmony default export */ var Cover_CoverPage = (CoverPage_CoverPage);
// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Cover/coverAnimations.js
var coverAnimations = __webpack_require__(15);

// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Cover/Cover.jsx





var Cover_Cover = function Cover() {
  Object(external_react_["useEffect"])(function () {
    Object(coverAnimations["a" /* mainSlider */])();
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slider-area"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slider-active slick-initialized slick-slider"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slick-list draggable"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "slick-track",
    style: {
      opacity: 1,
      width: "1903px"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "single-slider slider-height d-flex align-items-center position-relative slick-slide slick-current slick-active",
    style: {
      width: "1903px",
      position: "relative",
      left: "0px",
      top: "0px",
      zIndex: "999",
      opacity: "1"
    },
    tabIndex: "0",
    "data-slick-index": "0",
    "aria-hidden": "false"
  }, /*#__PURE__*/external_react_default.a.createElement(Cover_CoverPage, null), /*#__PURE__*/external_react_default.a.createElement(Cover_CoverImage, null))))));
};

/* harmony default export */ var components_Cover_Cover = (Cover_Cover);
// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/About/AboutUs.jsx
var AboutUs = __webpack_require__(10);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Rooms/Rooms.jsx + 1 modules
var Rooms = __webpack_require__(7);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Preloader/Spinner.jsx
var Spinner = __webpack_require__(22);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Blog/Miniature/BlogSectionMiniature.jsx + 1 modules
var BlogSectionMiniature = __webpack_require__(12);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Testimonials/Testimonials.jsx + 1 modules
var Testimonials = __webpack_require__(8);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Gallery/Gallery.jsx
var Gallery = __webpack_require__(5);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/VIdeoPreview/VideoPreview.jsx
var VideoPreview = __webpack_require__(11);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/BackToTop/BackToTop.jsx
var BackToTop = __webpack_require__(23);

// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/pages/HomePage.jsx













var HomePage_HomePage = function HomePage() {
  return /*#__PURE__*/external_react_default.a.createElement("main", null, /*#__PURE__*/external_react_default.a.createElement(components_Cover_Cover, null), /*#__PURE__*/external_react_default.a.createElement(AboutUs["a" /* default */], {
    text1: "Las termas de Copahue son las \xFAnicas termas en el mundo que reunen una innumerable cantidad de recursos minerales naturales.",
    text2: "Cercan\xEDa y comodidad para disfrutar Copahue",
    text3: "Junto al volc\xE1n copahue hacen una combinaci\xF3n perfecta para que Copahue sea un para\xEDso termal."
  }), /*#__PURE__*/external_react_default.a.createElement(Rooms["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(VideoPreview["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(BlogSectionMiniature["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(Testimonials["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(Gallery["a" /* default */], null));
};

/* harmony default export */ var pages_HomePage = __webpack_exports__["default"] = (HomePage_HomePage);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-area footer-padding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-4 col-lg-4 col-md-6 col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single-footer-caption mb-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single-footer-caption mb-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-logo mb-35"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "logo.png",
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-tittle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-pera"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Hotel Valle Del Volc\xE1n lleva m\xE1s de 25 a\xF1os acercandote a las termas de Copahue.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-social"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/valledelvolcan"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter-square"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/clubhotelvalledelvolcan"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook-square"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://api.whatsapp.com/send?phone=5492942669435"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    "class": "fab fa-whatsapp"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ar.pinterest.com/copahueclub"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-pinterest-square"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-2 col-lg-2 col-md-4 col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single-footer-caption mb-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-tittle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "sobrenosotros"
  }, "Sobre Nosotros")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "habitaciones"
  }, "Nuestras Habitaciones")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "contacto"
  }, "Reserva")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/index.html#"
  }, "Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "contacto"
  }, "Contacto")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-3 col-lg-3 col-md-6 col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single-footer-caption mb-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-tittle mb-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Direcci\xF3n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Herrero Ducloux 120, Copahue Q8348AGA Argentina")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "mb-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "number"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/index.html#"
  }, "+54 9 2942 66-9435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "number2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/index.html#"
  }, "contact@carwash.com")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-bottom-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-border"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-12 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-copy-right text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Copyright \xA9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", null, "document.write(new Date().getFullYear());"), "2021 All rights reserved | This template is made with", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-heart color-danger",
    "aria-hidden": "true"
  }), " ", "by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://colorlib.com/",
    target: "_blank",
    rel: "nofollow noopener"
  }, "Colorlib")))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Spinner = function Spinner() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    /* 1. Proloder */
    $(window).on("load", function () {
      $("#preloader-active").delay(450).fadeOut("slow");
      $("body").delay(450).css({
        overflow: "visible"
      });
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "preloader-active",
    style: {
      display: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preloader d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preloader-inner position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preloader-circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preloader-img pere-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4TG4AAAAvFkAFEEcgECB49L9ig0DSxvP+Pd7yBIIQueT/NggEKPh/ygQeeFKAWsHD+aTyDW82gFFsW20ekLYMff8tEG/fQQbhHQxE9H8CdPUG0IGiXePP+alprUXlS8nWALy7EdFR01qrCjP7GoC4hi53AA==",
    alt: ""
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var BackToTop = function BackToTop() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();

      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $("#back-top").fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $("#back-top").fadeIn(500);
      }
    }); // Scroll Up

    $("#back-top a").on("click", function () {
      $("body,html").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "back-top",
    style: {
      display: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    title: "Go to Top",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-level-up-alt"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (BackToTop);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Header/InfoSection/Contact.jsx


var Contact_Contact = function Contact() {
  return /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, "+54 9 2942 66-9435"), /*#__PURE__*/external_react_default.a.createElement("li", null, "Herrero Ducloux 120, Copahue Q8348AGA Argentina"));
};

/* harmony default export */ var InfoSection_Contact = (Contact_Contact);
// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Header/InfoSection/Logo.jsx


var Logo_Logo = function Logo() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "/"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "logo-titulo.png",
    alt: "",
    width: "400px"
  })));
};

/* harmony default export */ var InfoSection_Logo = (Logo_Logo);
// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Header/InfoSection/InfoSection.jsx




var InfoSection_InfoSection = function InfoSection() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "header-info-left d-none d-sm-block"
  }, /*#__PURE__*/external_react_default.a.createElement(InfoSection_Contact, null));
};

/* harmony default export */ var Header_InfoSection_InfoSection = (InfoSection_InfoSection);
// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Header/MenuSection/MenuMobile.jsx


var MenuMobile_MenuMobile = function MenuMobile() {
  Object(external_react_["useEffect"])(function () {
    var menu = $("ul#navigation");

    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-"
      });
    }
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mobile_menu d-block d-lg-none"
  }));
};

/* harmony default export */ var MenuSection_MenuMobile = (MenuMobile_MenuMobile);
// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Header/MenuSection/MenuSection.jsx


var MenuSection_MenuSection = function MenuSection() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col-xl-6 col-lg-6 col-md-8"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "main-menu f-right d-none d-lg-block"
  }, /*#__PURE__*/external_react_default.a.createElement("nav", null, /*#__PURE__*/external_react_default.a.createElement("ul", {
    id: "navigation"
  }, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "/"
  }, "Home")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "habitaciones"
  }, "Habitaciones")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "sobrenosotros"
  }, "Sobre Nosotros")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/blog.html"
  }, "Blog"), /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "submenu"
  }, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/blog.html"
  }, "Blog")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/blog_details.html"
  }, "Blog Details")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/elements.html"
  }, "Elements")))), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "contacto"
  }, "Contacto")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "header-right-btn f-right  ml-30"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://preview.colorlib.com/theme/ecoho/index.html#",
    className: "header-btn"
  }, "Reserva")))))));
};

/* harmony default export */ var Header_MenuSection_MenuSection = (MenuSection_MenuSection);
// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Header/Header.jsx






var Header_Header = function Header() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "header-area header_area"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "main-header header-sticky sticky-bar"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col-xl-6 col-lg-6"
  }, /*#__PURE__*/external_react_default.a.createElement(InfoSection_Logo, null), /*#__PURE__*/external_react_default.a.createElement(Header_InfoSection_InfoSection, null)), /*#__PURE__*/external_react_default.a.createElement(Header_MenuSection_MenuSection, null), /*#__PURE__*/external_react_default.a.createElement(MenuSection_MenuMobile, null)))));
};

/* harmony default export */ var components_Header_Header = __webpack_exports__["a"] = (Header_Header);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("E:\\Repositorios\\HotelValleDelVolcan\\react-static-website\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Cover_CoverSubPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



var ContactPage = function ContactPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cover_CoverSubPage__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    title: "Contacto",
    description: ["Puedes realizarnos cualquier duda que tengas"],
    image: "/images/carousel/cartel-bienvenida.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "contact-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "d-none d-sm-block mb-5 pb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "ubicacion",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1530.9898748742676!2d-71.09836819210776!3d-37.81948338897515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966d012cbb46dceb%3A0xcd9840d79c84cc7e!2sValle+Del+Volcan!5e0!3m2!1ses!2sar!4v1535314576539",
    width: "100%",
    height: "450",
    frameborder: "0",
    style: {
      border: 0
    },
    allowfullscreen: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "contact-title"
  }, "Escribinos tu consulta")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-contact contact_form",
    action: "contact_process.php",
    method: "post",
    id: "contactForm",
    novalidate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "form-control w-100",
    name: "message",
    id: "message",
    cols: "30",
    rows: "9",
    placeholder: " Escriba su mensaje"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control valid",
    name: "name",
    id: "name",
    type: "text",
    placeholder: "Ingrese su nombre"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control valid",
    name: "email",
    id: "email",
    type: "email",
    placeholder: "Email"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    name: "subject",
    id: "subject",
    placeholder: "Asunto"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "button button-contactForm boxed-btn"
  }, "Enviar")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3 offset-lg-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media contact-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "contact-info__icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    "class": "fas fa-hotel"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Herrero Ducloux 120, Copahue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Q8348AGA Argentina"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media contact-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "contact-info__icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    "class": "fas fa-mobile-alt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "+54 9 2942 66-9435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lunes a S\xE1bado. 9hs a 18hs"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media contact-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "contact-info__icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    "class": "far fa-envelope"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/cdn-cgi/l/email-protection",
    className: "__cf_email__"
  }, "info@hotelvalledelvolcan.info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Send us your query anytime!"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactPage);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/About/AboutUs.jsx
var AboutUs = __webpack_require__(10);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Rooms/Rooms.jsx + 1 modules
var Rooms = __webpack_require__(7);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Blog/Miniature/BlogSectionMiniature.jsx + 1 modules
var BlogSectionMiniature = __webpack_require__(12);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Testimonials/Testimonials.jsx + 1 modules
var Testimonials = __webpack_require__(8);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Gallery/Gallery.jsx
var Gallery = __webpack_require__(5);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/VIdeoPreview/VideoPreview.jsx
var VideoPreview = __webpack_require__(11);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Cover/CoverSubPage.jsx
var CoverSubPage = __webpack_require__(6);

// EXTERNAL MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Services/Services.module.css
var Services_module = __webpack_require__(1);
var Services_module_default = /*#__PURE__*/__webpack_require__.n(Services_module);

// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/components/Services/Services.jsx



var Services_Services = function Services() {
  return /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "popular-item-area fix"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container p-0"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("i", {
    className: "fas fa-utensils a-3x fa-pull-left fa-border ".concat(Services_module_default.a.icons),
    "aria-hidden": "true"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Services_module_default.a.titleService
  }, "Restaurant")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("i", {
    className: "fas fa-tv a-3x fa-pull-left fa-border ".concat(Services_module_default.a.icons),
    "aria-hidden": "true"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Services_module_default.a.titleService
  }, "Televisi\xF3n satelital en cada habitaci\xF3n")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("i", {
    className: "fas fa-burn a-3x fa-pull-left fa-border ".concat(Services_module_default.a.icons),
    "aria-hidden": "true"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Services_module_default.a.titleService
  }, "Calefacci\xF3n central"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Services_module_default.a.titleService
  }, "Servicio de lavander\xEDa"))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("i", {
    className: "fas fa-couch a-3x fa-pull-left fa-border ".concat(Services_module_default.a.icons),
    "aria-hidden": "true"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Services_module_default.a.titleService
  }, "Sala de usos m\xFAltiples"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Services_module_default.a.titleService
  }, "Servicio de caja fuerte")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("i", {
    className: "fas fa-cookie a-3x fa-pull-left fa-border ".concat(Services_module_default.a.icons),
    "aria-hidden": "true"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Services_module_default.a.titleService
  }, "Confiter\xEDa"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Services_module_default.a.titleService
  }, "WI-FI")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("i", {
    className: "fas fa-gem a-3x fa-pull-left fa-border ".concat(Services_module_default.a.icons),
    "aria-hidden": "true"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: Services_module_default.a.titleService
  }, "Servicio de caja fuerte")))));
};

/* harmony default export */ var components_Services_Services = (Services_Services);
// CONCATENATED MODULE: E:/Repositorios/HotelValleDelVolcan/react-static-website/src/pages/RoomsPage.jsx










var RoomsPage_RoomsPage = function RoomsPage() {
  return /*#__PURE__*/external_react_default.a.createElement("main", null, /*#__PURE__*/external_react_default.a.createElement(CoverSubPage["a" /* default */], {
    title: "Habitaciones",
    description: ["Hotel Valle Del Volcán posee 40 habitaciones ", /*#__PURE__*/external_react_default.a.createElement("br", null), " con baño privado "],
    image: "images/centro-termal-portada.jpg"
  }), /*#__PURE__*/external_react_default.a.createElement(components_Services_Services, null), /*#__PURE__*/external_react_default.a.createElement(Rooms["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(Testimonials["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(Gallery["a" /* default */], null));
};

/* harmony default export */ var pages_RoomsPage = __webpack_exports__["default"] = (RoomsPage_RoomsPage);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(13);

var _router = __webpack_require__(27);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(46);
module.exports = __webpack_require__(53);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(45)["default"];

var _require = __webpack_require__(28),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-css-modules",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(28),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(47),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);












Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/AboutUsPage.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/AboutUsPage.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/AboutUsPage.jsx";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/AboutUsPage.jsx';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/ContactPage.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/ContactPage.jsx */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/ContactPage.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/ContactPage.jsx";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/ContactPage.jsx';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/HomePage.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/HomePage.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/HomePage.jsx";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/HomePage.jsx';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/RoomsPage.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/RoomsPage.jsx */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/RoomsPage.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/RoomsPage.jsx";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/RoomsPage.jsx'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/AboutUsPage.jsx': t_1,
  '__react_static_root__/src/pages/ContactPage.jsx': t_2,
  '__react_static_root__/src/pages/HomePage.jsx': t_3,
  '__react_static_root__/src/pages/RoomsPage.jsx': t_4
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(18);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 9,
	"./": 9,
	"./index": 9,
	"./index.js": 9
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 50;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(29);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(30);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(31);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(32);

var _interopRequireWildcard = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(54);

var _Suspense = _interopRequireDefault(__webpack_require__(55));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(58)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("E:\\Repositorios\\HotelValleDelVolcan\\react-static-website\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(33);

var _interopRequireDefault = __webpack_require__(32);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(56));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(57));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(59)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })
/******/ ]);
});