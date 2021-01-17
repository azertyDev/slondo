module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BCSh":
/***/ (function(module, exports) {



/***/ }),

/***/ "E0nt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categoriesReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Qff4");


const initCategory = {
  id: null,
  name: '',
  image: {
    url: {
      default: ''
    }
  },
  icon: {
    url: ''
  },
  model: [{
    id: null,
    name: '',
    type: [],
    image: {
      url: ''
    },
    parents: []
  }],
  has_auction: null
};
const initCategories = Array.from({
  length: 12
}).map(() => initCategory);
const initialState = {
  isFetch: false,
  error: null,
  list: initCategories
}; // Async thunk

const fetchCategories = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('categories/fetchCategories', async (lang, {
  rejectWithValue
}) => {
  try {
    return await _src_api_api__WEBPACK_IMPORTED_MODULE_1__[/* userAPI */ "a"].getCategories(lang);
  } catch (e) {
    return rejectWithValue(e.message);
  }
});
const advertisementSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategories.pending, state => {
      state.isFetch = true;
      state.error = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isFetch = false;
      state.error = null;
      state.list = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isFetch = false;
      state.error = action.payload;
    });
  }
});
const categoriesReducer = advertisementSlice.reducer;

/***/ }),

/***/ "FBJA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Qff4");


const initialState = {
  isFetch: false,
  error: null,
  data: []
};
const fetchLocations = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('locations/fetchLocations', async (lang, {
  rejectWithValue
}) => {
  try {
    return await _src_api_api__WEBPACK_IMPORTED_MODULE_1__[/* userAPI */ "a"].getLocations(lang);
  } catch (e) {
    return rejectWithValue(e.message);
  }
});
const locationsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLocations.pending, state => {
      state.isFetch = true;
      state.error = null;
    });
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.isFetch = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchLocations.rejected, (state, action) => {
      state.isFetch = false;
      state.error = action.payload;
    });
  }
});
const locationsReducer = locationsSlice.reducer;

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "LPWX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setIsAuthAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setIsAuthModalOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Qff4");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RE4Q");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_2__);



const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_2___default.a();
const initialState = {
  isFetch: false,
  isAuth: false,
  error: null,
  isAuthModalOpen: false
}; // Async thunk

const fetchToken = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('authReg/fetchTokenByLogin', async ({
  phone,
  password
}, {
  rejectWithValue
}) => {
  try {
    const token = await _src_api_api__WEBPACK_IMPORTED_MODULE_1__[/* userAPI */ "a"].login(phone, password);
    cookies.set('token', token, {
      maxAge: 2 * 3600
    });
  } catch (e) {
    return rejectWithValue(e.message);
  }
}); // Slice

const authRegSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'authReg',
  initialState,
  reducers: {
    setIsAuthAction: (state, action) => {
      state.isAuth = action.payload;
    },
    setIsAuthModalOpen: (state, action) => {
      state.isAuthModalOpen = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchToken.pending, state => {
      state.isFetch = true;
      state.error = null;
    });
    builder.addCase(fetchToken.fulfilled, state => {
      state.isFetch = false;
      state.error = null;
      state.isAuth = true;
    });
    builder.addCase(fetchToken.rejected, (state, action) => {
      state.isFetch = false;
      state.error = action.payload;
    });
  }
});
const {
  setIsAuthAction,
  setIsAuthModalOpen
} = authRegSlice.actions;
const authReducer = authRegSlice.reducer;

/***/ }),

/***/ "Ly7/":
/***/ (function(module, exports) {

module.exports = require("core-js/es/set");

/***/ }),

/***/ "Qff4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // import Cookies from 'universal-cookie';

// const cookies = new Cookies();
// const {token} = cookies.get('token') || {token: ''};
const amazonServer = 'http://54.205.72.116/api/';
const localServer = 'http://192.168.1.60/slondo/public/api/';
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  withCredentials: true,
  baseURL: amazonServer
}); // const config = {
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         // 'Authorization': `Bearer ${token}`,
//         "Access-Control-Allow-Origin": "*"
//     }
// };

const userAPI = {
  login: (phone, password) => {
    const form = new FormData();
    form.set('phone', phone);
    form.set('password', password);
    return instance.post(`login`, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => res.data).catch(err => {
      throw err;
    });
  },
  getCategories: lang => {
    return instance.get(`categories/all?lang=${lang}`).then(res => res.data).catch(err => {
      throw err;
    });
  },
  getDataForCreateAncmnt: (ctgryID, subCtgryID, lang) => {
    return instance.get(`subcategory?parent_id=${ctgryID}&lang=${lang}&child_id=${subCtgryID}`).then(res => res.data).catch(err => {
      throw err;
    });
  },
  getCards: (itemsPerPage, page, type, lang) => {
    return instance.get(`ads/all?itemsPerPage=${itemsPerPage}&page=${page}&type=${type}&lang=${lang}`).then(res => res.data).catch(err => {
      throw err;
    });
  },
  getAddById: (ads_id, lang) => {
    return instance.get(`getAddById?ads_id=${ads_id}&lang=${lang}`).then(res => res.data).catch(err => {
      throw err;
    });
  },
  getLocations: lang => {
    return instance.get(`location?lang=${lang}`).then(res => res.data).catch(err => {
      throw err;
    });
  },
  createAdvrt: data => {
    return instance.post(`regular/ads/new`, data).then(res => res.data).catch(err => {
      throw err;
    });
  },
  getAncmntsTypes: lang => {
    return instance.get(`ads/type?lang=${lang}`).then(res => res.data).catch(err => {
      throw err;
    });
  }
};

/***/ }),

/***/ "RE4Q":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "XlMn":
/***/ (function(module, exports) {

module.exports = require("core-js/es/map");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/es/promise"
var promise_ = __webpack_require__("iaRH");

// EXTERNAL MODULE: external "core-js/es/set"
var set_ = __webpack_require__("Ly7/");

// EXTERNAL MODULE: external "core-js/es/map"
var map_ = __webpack_require__("XlMn");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./node_modules/next/dist/pages/_app.js
var _app = __webpack_require__("B5Ud");
var _app_default = /*#__PURE__*/__webpack_require__.n(_app);

// EXTERNAL MODULE: ./i18n.tsx
var i18n = __webpack_require__("gUPn");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/theme.js
var theme = __webpack_require__("zDcZ");

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: ./src/redux/slices/authRegSlice.ts
var authRegSlice = __webpack_require__("LPWX");

// EXTERNAL MODULE: ./src/redux/slices/categoriesSlice.ts
var categoriesSlice = __webpack_require__("E0nt");

// EXTERNAL MODULE: ./src/redux/slices/locationsSlice.ts
var locationsSlice = __webpack_require__("FBJA");

// EXTERNAL MODULE: ./src/redux/slices/errorSlice.ts
var errorSlice = __webpack_require__("jigt");

// CONCATENATED MODULE: ./src/redux/rootReducer.ts





const rootReducer = Object(toolkit_["combineReducers"])({
  auth: authRegSlice["a" /* authReducer */],
  categories: categoriesSlice["a" /* categoriesReducer */],
  locations: locationsSlice["b" /* locationsReducer */],
  error: errorSlice["a" /* errorReducer */]
});
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// CONCATENATED MODULE: ./src/redux/store.ts


 // create a makeStore function

const store = () => Object(toolkit_["configureStore"])({
  reducer: rootReducer,
  devTools: false
});

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(store);
// EXTERNAL MODULE: ./slick.min.css
var slick_min = __webpack_require__("BCSh");

// CONCATENATED MODULE: ./pages/_app.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // Slick css file



const MyApp = props => {
  const {
    Component
  } = props;
  external_react_default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx(external_react_default.a.Fragment, null, __jsx(core_["ThemeProvider"], {
    theme: theme["a" /* default */]
  }, __jsx(core_["CssBaseline"], null), __jsx(Component, props.pageProps)));
};

MyApp.getStaticProps = async appContext => {
  return _objectSpread({}, await _app_default.a.getInitialProps(appContext));
};

const withCompose = Object(external_redux_["compose"])(wrapper.withRedux, i18n["c" /* appWithTranslation */]);
/* harmony default export */ var pages_app = __webpack_exports__["default"] = (withCompose(MyApp));

/***/ }),

/***/ "gUPn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return withTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return appWithTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Router; });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f9I");
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KNus");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);




const {
  localeSubpaths
} = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig;

const {
  useTranslation,
  withTranslation,
  appWithTranslation,
  Link,
  i18n,
  Router
} = new next_i18next__WEBPACK_IMPORTED_MODULE_0___default.a({
  strictMode: false,
  defaultLanguage: 'ru',
  otherLanguages: ['uz'],
  localeSubpaths,
  localePath: path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve('./public/static/locales')
});

/***/ }),

/***/ "he5r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEMS_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOTAL_FILES_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOTAL_FILES_SIZE_LIMIT; });
const SERVER_URL = `${process.env.SERVER_URL}:${process.env.PORT}`;
const ITEMS_PER_PAGE = 16;
const TOTAL_FILES_LIMIT = 8;
const TOTAL_FILES_SIZE_LIMIT = 2.5e+7; // 25 mb

/***/ }),

/***/ "iaRH":
/***/ (function(module, exports) {

module.exports = require("core-js/es/promise");

/***/ }),

/***/ "jigt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setErrorMsgAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errorReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  isError: false,
  errorMsg: ''
};
const errorSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'error',
  initialState,
  reducers: {
    setErrorMsgAction: (state, action) => {
      state.isError = true;
      state.errorMsg = action.payload;
    },
    resetErrorAction: state => {
      state.isError = false;
      state.errorMsg = '';
    }
  }
});
const {
  setErrorMsgAction,
  resetErrorAction
} = errorSlice.actions;
const errorReducer = errorSlice.reducer;

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "zDcZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("he5r");


const calibri = {
  fontFamily: 'Calibri',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
        url(${_constants__WEBPACK_IMPORTED_MODULE_1__[/* SERVER_URL */ "b"]}/fonts/Calibri.eot) format('eot')`,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};
const colors = {
  main: '#9773af',
  secondary: '#845CAB',
  white: '#fafafa',
  black: '#4E4E4E',
  gray: '#C0C0C0',
  adBgColor: '#88CAEC',
  lotBgColor: '#AD66D5',
  createAdBtnColor: '#7DBCF6',
  error: '#E9372E',
  tab: '#838383',
  activeTab: '#2F80ED'
}; // Create a theme instance.

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  props: {
    MuiTypography: {
      variantMapping: {
        button: 'p'
      }
    }
  },
  palette: {
    primary: {
      main: colors.main,
      secondary: colors.secondary,
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      adBgColor: colors.adBgColor,
      lotBgColor: colors.lotBgColor,
      createAdBtnColor: colors.createAdBtnColor,
      error: colors.error
    },
    common: {
      tab: colors.tab,
      activeTab: colors.activeTab
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1280,
      xxl: 1400
    }
  },
  typography: {
    fontFamily: ['Calibri', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    subtitle1: {
      lineHeight: 1,
      color: '#4E4E4E'
    },
    allVariants: {
      color: '#4E4E4E',
      lineHeight: 1
    },
    body2: {
      fontSize: '1.125rem'
    },
    button: {
      fontSize: '1.125rem',
      fontWeight: '600',
      textTransform: 'none'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [calibri],
        ':focus': {
          outline: 0
        },
        '.error-text': {
          color: `${colors.error}!important`,
          textAlign: 'center'
        },
        '.error-border': {
          borderColor: colors.error,
          '& div.MuiOutlinedInput-root': {
            '& > fieldset, &:hover > fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: colors.error
            }
          },
          '& button.MuiButtonBase-root': {
            borderColor: `${colors.error}!important`
          }
        },
        body: {
          backgroundColor: '#fafafa'
        }
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: colors.white
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '6px',
        '&:hover > fieldset.MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(0, 0, 0, 0.23)'
        }
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none'
      }
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: `${colors.white}!important`
        }
      }
    }
  }
});
theme.typography.h2 = {
  fontSize: '2.25rem',
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.83rem'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });