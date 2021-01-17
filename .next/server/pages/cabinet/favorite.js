module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "/TEV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PhoneIcon = () => {
  return __jsx("svg", {
    width: "17",
    height: "19",
    viewBox: "0 0 17 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.17577 1.34745L5.93552 6.02176L7.21588 4.98526C7.21588 4.98526 7.43941 4.82274 7.48009 4.51786C7.52076 4.21298 7.17521 3.86751 7.17521 3.86751L4.35036 0.351634C4.35036 0.351634 4.18775 0.148438 3.88295 0.148438C3.57807 0.148438 3.4358 0.311047 3.4358 0.311047L2.17577 1.34745ZM11.4634 13.0535L15.2231 17.7278L16.5035 16.6913C16.5035 16.6913 16.727 16.5287 16.7677 16.2239C16.8083 15.919 16.4628 15.5736 16.4628 15.5736L13.638 12.0577C13.638 12.0577 13.4753 11.8545 13.1705 11.8545C12.8657 11.8545 12.7234 12.017 12.7234 12.017L11.4634 13.0535ZM1.6271 1.77427L5.36651 6.46883C5.36651 6.46883 5.14289 6.65177 5.08197 6.87531C5.02096 7.09893 5.04129 7.32246 5.10231 7.54599C5.16323 7.76953 5.24458 7.99315 5.44777 8.33862C5.65097 8.68409 6.09813 9.37511 6.09813 9.37511L6.78906 10.3303C6.78906 10.3303 7.70362 11.4684 8.04909 11.8138C8.39465 12.1593 9.24819 13.0535 9.614 13.3177C9.97981 13.5819 10.1221 13.6632 10.2033 13.6835C10.2847 13.7039 10.5489 13.7649 10.7114 13.7039C10.874 13.6429 10.9756 13.5616 10.9756 13.5616L14.6134 18.1343C14.6134 18.1343 14.1664 18.5001 13.4957 18.5407C12.825 18.5814 12.2763 18.5204 12.2763 18.5204C12.2763 18.5204 11.504 18.4188 10.6505 18.0733C9.79686 17.7278 8.74012 17.0368 8.74012 17.0368C8.74012 17.0368 7.92716 16.4881 7.21588 15.8378C6.50461 15.1874 5.83392 14.4761 5.83392 14.4761C5.83392 14.4761 4.7365 13.1958 4.61456 13.0535C4.49263 12.9112 3.61874 11.7528 3.51706 11.5903C3.41546 11.4277 2.33838 9.92378 1.74904 8.56215C1.15961 7.20053 0.997003 6.63144 0.814144 5.55435C0.631197 4.47719 0.854818 3.40011 0.854818 3.40011C0.854818 3.40011 1.11894 2.18075 1.6271 1.77427Z",
    fill: "url(#paint0_linear)"
  }), __jsx("defs", null, __jsx("linearGradient", {
    id: "paint0_linear",
    x1: "0.742175",
    y1: "9.35153",
    x2: "16.771",
    y2: "9.35153",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#30AB7C"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#75BE55"
  }))));
};

/***/ }),

/***/ "0uQS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ TabsContent; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/components/elements/custom_tab_panel/CustomTabPanel.tsx
var CustomTabPanel = __webpack_require__("riHB");

// EXTERNAL MODULE: ./src/components/cabinet/CabinetMenuWrapper.tsx + 16 modules
var CabinetMenuWrapper = __webpack_require__("YVPx");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/components/cabinet/cabinet_pages/useStyles.js

const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {},
  cabinetTabs: {
    marginBottom: '30px',
    maxWidth: '80% !important'
  }
}));
// CONCATENATED MODULE: ./src/components/cabinet/cabinet_pages/TabsContent.tsx
var __jsx = external_react_default.a.createElement;





const TabsContent = ({
  tabsData,
  headerTitle,
  title,
  t
}) => {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return __jsx("div", {
    className: classes.root
  }, __jsx(CabinetMenuWrapper["a" /* CabinetMenuWrapper */], {
    headerTitle: headerTitle,
    title: title,
    t: t
  }, __jsx(core_["Grid"], {
    item: true,
    xs: 9,
    className: classes.cabinetTabs
  }, __jsx(core_["Tabs"], {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    variant: "fullWidth"
  }, __jsx(core_["Tab"], {
    label: __jsx(core_["Typography"], {
      variant: "subtitle1"
    }, `${tabsData[0].title} (${tabsData[0].count})`),
    value: 0
  }), __jsx(core_["Tab"], {
    label: __jsx(core_["Typography"], {
      variant: "subtitle1"
    }, `${tabsData[1].title} (${tabsData[1].count})`),
    value: 1
  }))), __jsx(CustomTabPanel["a" /* CustomTabPanel */], {
    value: value,
    index: 0
  }, tabsData[0].component), __jsx(CustomTabPanel["a" /* CustomTabPanel */], {
    value: value,
    index: 1
  }, tabsData[1].component)));
};

/***/ }),

/***/ "2TXB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SettingsIcon = () => {
  return __jsx("svg", {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M5.96235 10.2267C6.52623 10.7905 7.20545 11.0725 8 11.0725C8.79455 11.0725 9.47377 10.7905 10.0376 10.2267C10.6015 9.6628 10.8835 8.98358 10.8835 8.18903C10.8835 7.39447 10.6015 6.71526 10.0376 6.15138C9.47377 5.5875 8.79455 5.30557 8 5.30557C7.20545 5.30557 6.52623 5.5875 5.96235 6.15138C5.39848 6.71526 5.11654 7.39447 5.11654 8.18903C5.11654 8.98358 5.39848 9.6628 5.96235 10.2267ZM14.1129 8.9964L15.843 10.342C16.0224 10.4702 16.0481 10.6496 15.9199 10.8803L14.2667 13.7253C14.1642 13.9047 13.9976 13.9559 13.7669 13.8791L11.7293 13.0717C11.191 13.4561 10.7297 13.7253 10.3452 13.8791L10.0376 16.032C9.98638 16.2627 9.85823 16.3781 9.65318 16.3781H6.34682C6.14177 16.3781 6.01362 16.2627 5.96235 16.032L5.65479 13.8791C5.1678 13.674 4.70645 13.4049 4.27072 13.0717L2.23308 13.8791C2.0024 13.9559 1.8358 13.9047 1.73328 13.7253L0.0800961 10.8803C-0.0480577 10.6496 -0.0224269 10.4702 0.156988 10.342L1.88706 8.9964C1.86143 8.81698 1.84862 8.54786 1.84862 8.18903C1.84862 7.8302 1.86143 7.56107 1.88706 7.38166L0.156988 6.03604C-0.0224269 5.90789 -0.0480577 5.72847 0.0800961 5.4978L1.73328 2.65278C1.8358 2.47337 2.0024 2.42211 2.23308 2.499L4.27072 3.30637C4.80897 2.92191 5.27032 2.65278 5.65479 2.499L5.96235 0.346015C6.01362 0.115338 6.14177 0 6.34682 0H9.65318C9.85823 0 9.98638 0.115338 10.0376 0.346015L10.3452 2.499C10.8322 2.70404 11.2936 2.97317 11.7293 3.30637L13.7669 2.499C13.9976 2.42211 14.1642 2.47337 14.2667 2.65278L15.9199 5.4978C16.0481 5.72847 16.0224 5.90789 15.843 6.03604L14.1129 7.38166C14.1386 7.56107 14.1514 7.8302 14.1514 8.18903C14.1514 8.54786 14.1386 8.81698 14.1129 8.9964Z",
    fill: "url(#paint10_linear)"
  }), __jsx("defs", null, __jsx("linearGradient", {
    id: "paint10_linear",
    x1: "-9.74206e-07",
    y1: "9.31147",
    x2: "9.24647",
    y2: "1.51925",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#4e4e4e"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4e4e4e"
  }))));
};

/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "3V2s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SignIcon = () => {
  return __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M2.71345 11.1345C4.55361 10.386 6.31579 10.0117 8 10.0117C9.68421 10.0117 11.4308 10.386 13.2398 11.1345C15.0799 11.8519 16 12.8031 16 13.9883V16H0V13.9883C0 12.8031 0.904483 11.8519 2.71345 11.1345ZM10.807 6.83041C10.0273 7.61014 9.09162 8 8 8C6.90838 8 5.97271 7.61014 5.19298 6.83041C4.41326 6.05068 4.02339 5.11501 4.02339 4.02339C4.02339 2.93177 4.41326 1.9961 5.19298 1.21637C5.97271 0.405458 6.90838 0 8 0C9.09162 0 10.0273 0.405458 10.807 1.21637C11.5867 1.9961 11.9766 2.93177 11.9766 4.02339C11.9766 5.11501 11.5867 6.05068 10.807 6.83041Z",
    fill: "#313131",
    fillOpacity: "0.6"
  }));
};

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4ZJ9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Djx/");


/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "8//M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "BD0l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ UserInfoWithAvatar; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/lab/Rating"
var Rating_ = __webpack_require__("n9sB");
var Rating_default = /*#__PURE__*/__webpack_require__.n(Rating_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./src/theme.js
var theme = __webpack_require__("zDcZ");

// CONCATENATED MODULE: ./src/components/elements/rating/useStyles.js



const useStyles = Object(styles_["makeStyles"])({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > div:first-child': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      '& > span.MuiRating-root': {
        fontSize: '1rem'
      },
      '& div.MuiBox-root': {
        '& > h6.MuiTypography-subtitle1': {
          marginRight: '5px',
          fontWeight: 600
        }
      }
    },
    '& > div:last-child': {
      marginLeft: theme["a" /* default */].spacing(1)
    }
  }
});
const StyledRating = Object(styles_["withStyles"])({
  iconFilled: {
    color: '#AD66D5'
  },
  iconHover: {
    color: '#675EAA'
  }
})(Rating_default.a);
// CONCATENATED MODULE: ./src/components/elements/rating/Rating.tsx
var __jsx = external_react_default.a.createElement;


 // styles


const labels = {
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2.0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4.0',
  4.5: '4.5',
  5: '5.0'
};
const Rating = () => {
  const [value, setValue] = external_react_default.a.useState(3.5);
  const [hover, setHover] = external_react_default.a.useState(-1);
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root
  }, __jsx("div", null, __jsx(Rating_default.a, {
    name: "hover-feedback",
    readOnly: true,
    value: value,
    precision: 0.5,
    onChange: (event, newValue) => {
      setValue(newValue);
    },
    onChangeActive: (event, newHover) => {
      setHover(newHover);
    }
  }), value !== null && __jsx(core_["Box"], null, __jsx(core_["Typography"], {
    variant: "subtitle1"
  }, labels[hover !== -1 ? hover : value]))), __jsx("div", null, __jsx(core_["Typography"], {
    variant: "subtitle1"
  }, "(200 \u043E\u0446\u0435\u043D\u043E\u043A)")));
};
// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__("4ZJ9");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "@material-ui/core/Badge"
var Badge_ = __webpack_require__("IfcR");
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);

// CONCATENATED MODULE: ./src/components/elements/user_info_with_avatar/avatar/useStyles.js


const StyledBadge = Object(styles_["withStyles"])(theme => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}))(Badge_default.a);
const useStyles_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    '& span > div.MuiAvatar-root': {
      width: '80px',
      height: '80px'
    }
  }
}));
// CONCATENATED MODULE: ./src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent.tsx
var UserAvatarComponent_jsx = external_react_default.a.createElement;

 // styles


const UserAvatarComponent = () => {
  const classes = useStyles_useStyles();
  return UserAvatarComponent_jsx("div", {
    className: classes.root
  }, UserAvatarComponent_jsx(StyledBadge, {
    overlap: "circle",
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    variant: "dot"
  }, UserAvatarComponent_jsx(Avatar_default.a, {
    alt: "Remy Sharp",
    src: "https://material-ui.com/static/images/avatar/1.jpg"
  })));
};
// EXTERNAL MODULE: ./src/components/elements/button/Button.tsx + 1 modules
var Button = __webpack_require__("XCGS");

// CONCATENATED MODULE: ./src/components/elements/user_info_with_avatar/useStyles.js

const user_info_with_avatar_useStyles_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    marginBottom: '30px',
    '& div.user-info': {
      display: 'flex',
      width: '100%',
      '& > div:first-child': {
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px'
      },
      '& > div:last-child': {
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        '& > div': {
          marginBottom: '8px'
        }
      },
      '& button': {
        padding: '5px 0',
        border: '1px solid #2F80ED',
        background: 'none',
        borderRadius: '5px',
        '& > h6.MuiTypography-subtitle2': {
          color: '#2F80ED'
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/elements/user_info_with_avatar/UserInfoWithAvatar.tsx
var UserInfoWithAvatar_jsx = external_react_default.a.createElement;




 // styles


const UserInfoWithAvatar = props => {
  const classes = user_info_with_avatar_useStyles_useStyles();
  return UserInfoWithAvatar_jsx("div", {
    className: classes.root
  }, UserInfoWithAvatar_jsx("div", {
    className: "user-info"
  }, UserInfoWithAvatar_jsx("div", null, UserInfoWithAvatar_jsx(UserAvatarComponent, null)), UserInfoWithAvatar_jsx("div", null, UserInfoWithAvatar_jsx("div", null, UserInfoWithAvatar_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, UserInfoWithAvatar_jsx("span", null, "\u0418\u043C\u044F \u0424\u0430\u043C\u0438\u043B\u0438\u044F"))), UserInfoWithAvatar_jsx("div", null, UserInfoWithAvatar_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u041D\u0430 Slondo \u0441 31 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2020")), UserInfoWithAvatar_jsx("div", null, UserInfoWithAvatar_jsx(Rating, null)), props.cabinet ? null : UserInfoWithAvatar_jsx(Button["a" /* ButtonComponent */], null, UserInfoWithAvatar_jsx(core_["Typography"], {
    variant: "subtitle2"
  }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F")))));
};

/***/ }),

/***/ "C16o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CustomSlider; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./src/components/elements/slider_arrow/SliderArrow.tsx + 1 modules
var SliderArrow = __webpack_require__("WJpf");

// CONCATENATED MODULE: ./src/components/elements/custom_slider/sliderSettings.tsx
var __jsx = external_react_default.a.createElement;


const settings = {
  swipeToSlide: true,
  prevArrow: __jsx(SliderArrow["a" /* SliderArrow */], null),
  nextArrow: __jsx(SliderArrow["a" /* SliderArrow */], null)
};
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/components/elements/custom_slider/useStyles.js

const useStyles = Object(styles_["makeStyles"])(() => ({
  root: {
    position: 'relative',
    '& div.slick-slide': {
      zIndex: 10,
      '& img': {
        width: '100%'
      }
    },
    '& button.slick-arrow': {
      position: 'absolute',
      top: 'calc(50% - 20px)'
    },
    '& button.slick-next': {
      right: 0
    }
  }
}));
// CONCATENATED MODULE: ./src/components/elements/custom_slider/CustomSlider.tsx
var CustomSlider_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const CustomSlider = /*#__PURE__*/Object(external_react_["forwardRef"])((props, ref) => {
  const classes = useStyles();
  return CustomSlider_jsx(external_react_slick_default.a, _extends({
    ref: ref
  }, props, settings, {
    className: classes.root
  }), props.children);
});

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "Djx/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./i18n.tsx
var i18n = __webpack_require__("gUPn");

// EXTERNAL MODULE: ./src/components/cabinet/cabinet_pages/TabsContent.tsx + 1 modules
var TabsContent = __webpack_require__("0uQS");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/components/cabinet/cabinet_pages/favorite/useStyles.js

const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {}
}));
// CONCATENATED MODULE: ./src/components/cabinet/cabinet_pages/favorite/FavoriteComponent.tsx
var __jsx = external_react_default.a.createElement;
 // styles


const FavoriteComponent = props => {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root
  }, __jsx("div", null, "Favorite"));
};
// CONCATENATED MODULE: ./src/components/cabinet/cabinet_pages/favorite/FavoriteContainer.tsx
var FavoriteContainer_jsx = external_react_default.a.createElement;



const FavoriteContainer = props => {
  const tabsData = [{
    title: 'Объявления',
    count: 2,
    component: FavoriteContainer_jsx(FavoriteComponent, null)
  }, {
    title: 'Аукционы',
    count: 2,
    component: FavoriteContainer_jsx(FavoriteComponent, null)
  }];
  const title = 'Избранное';
  return FavoriteContainer_jsx(TabsContent["a" /* TabsContent */], {
    title: title,
    tabsData: tabsData,
    headerTitle: title,
    t: props.t
  });
};
// CONCATENATED MODULE: ./pages/cabinet/favorite.tsx
var favorite_jsx = external_react_default.a.createElement;




const Favorite = props => {
  return favorite_jsx(FavoriteContainer, props);
};

Favorite.getInitialProps = async () => ({
  namespacesRequired: ['cabinet']
});

/* harmony default export */ var favorite = __webpack_exports__["default"] = (Object(i18n["f" /* withTranslation */])(['cabinet'])(Favorite));

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

/***/ "G+bw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ErrorModal; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/redux/slices/errorSlice.ts
var errorSlice = __webpack_require__("jigt");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/components/error_modal/useStyles.js

const useStyles = Object(styles_["makeStyles"])(() => ({
  root: {
    width: '600px',
    height: '400px',
    margin: '40px auto',
    backgroundColor: '#fff'
  }
}));
// CONCATENATED MODULE: ./src/components/error_modal/ErrorModal.tsx
var __jsx = external_react_default.a.createElement;





const ErrorModal = () => {
  const {
    isError,
    errorMsg
  } = Object(external_react_redux_["useSelector"])(store => store.error);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const onClose = () => {
    dispatch(Object(errorSlice["b" /* resetErrorAction */])());
  };

  const classes = useStyles();
  return __jsx(core_["Modal"], {
    open: isError,
    onClose: onClose
  }, __jsx("div", {
    className: classes.root
  }, __jsx(core_["Typography"], {
    className: "error-text"
  }, errorMsg)));
};

/***/ }),

/***/ "IfcR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

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

/***/ "MZHw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFormikField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const CustomFormikField = props => {
  const {
    labelText
  } = props,
        otherProps = _objectWithoutProperties(props, ["labelText"]);

  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], otherProps, ({
    field
  }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("label", null, labelText), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], _extends({
    fullWidth: true,
    focused: false,
    variant: "outlined"
  }, field, otherProps))));
};

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

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

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "RE4Q":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "Ssln":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Vjsa");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b0ys");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_error_modal_ErrorModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("G+bw");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const MainLayout = ({
  children,
  title = 'SLONDO'
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title)), __jsx(_header_Header__WEBPACK_IMPORTED_MODULE_2__[/* Header */ "a"], null), __jsx("main", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    maxWidth: "xl",
    style: {
      paddingTop: '48px'
    }
  }, children)), __jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_3__[/* Footer */ "a"], null), __jsx(_src_components_error_modal_ErrorModal__WEBPACK_IMPORTED_MODULE_5__[/* ErrorModal */ "a"], null));
};

/***/ }),

/***/ "T/Dk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DeliveryIcon = () => {
  return __jsx("svg", {
    width: "27",
    height: "27",
    viewBox: "0 0 27 27",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.6023 6H17.6306C18.3278 6 18.8982 6.57041 18.8982 7.26762V17.657C18.2062 18.2014 17.7638 19.0324 17.7638 19.9635C17.7638 20.038 17.7667 20.1119 17.7723 20.1849H11.5047C11.5094 20.1176 11.5121 20.0499 11.5121 19.9815C11.5121 18.3415 10.1405 17.0121 8.44877 17.0121C6.75698 17.0121 5.3856 18.3415 5.3856 19.9815C5.3856 20.0499 5.38821 20.1176 5.39282 20.1849H4.34868C3.65158 20.1849 3.08105 19.6145 3.08105 18.9173V15.8852C3.08105 15.8852 3.10099 15.5837 3.44305 15.5175H8.22143C8.91864 15.5175 9.48905 14.9471 9.48905 14.2499V14.0193C9.48905 13.3221 8.91864 12.7517 8.22143 12.7517H3.47208H3.44654C3.40406 12.7497 3.31263 12.7374 3.206 12.6743C3.11033 12.6178 3.08629 12.4954 3.08105 12.4165V12.3435V12.254V12.0102V11.9719C3.08741 11.8831 3.14135 11.6704 3.51456 11.6704H10.4305C11.1278 11.6704 11.6983 11.1 11.6983 10.4028V10.1721C11.6983 9.475 11.1278 8.90447 10.4305 8.90447H3.40942H3.35449C3.30976 8.89899 3.24337 8.87893 3.17697 8.81503C3.13038 8.77043 3.10036 8.68249 3.08105 8.59304V7.52112C3.08105 6.68451 3.76557 6 4.6023 6Z"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.20877 9.51709H10.5184C10.8438 9.51709 11.11 9.7833 11.11 10.1087V10.5087C11.11 10.834 10.8438 11.1002 10.5184 11.1002H2.20877C1.88352 11.1002 1.61731 10.834 1.61731 10.5087V10.1087C1.61731 9.7833 1.88352 9.51709 2.20877 9.51709Z"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.679472 13.3418H8.33005C8.65543 13.3418 8.92163 13.608 8.92163 13.9334V14.3332C8.92163 14.6586 8.65543 14.9248 8.33005 14.9248H0.679472C0.354096 14.9248 0.0878906 14.6586 0.0878906 14.3332V13.9334C0.0878906 13.608 0.354096 13.3418 0.679472 13.3418Z"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.506 20.1849L17.7724 20.1854C17.7668 20.1121 17.7639 20.0381 17.7639 19.9635C17.7639 18.3237 19.1353 16.9941 20.8272 16.9941C22.519 16.9941 23.8904 18.3237 23.8904 19.9635C23.8904 20.042 23.8872 20.1196 23.881 20.1965L24.2765 20.1972H25.6539C25.6539 20.1972 26.2665 20.139 26.602 19.6248C26.9373 19.1106 26.8658 18.073 26.8658 18.073V15.8684C26.8658 15.8684 26.8569 14.9874 26.5348 14.5358C26.2128 14.0841 25.8954 14.0573 25.3588 13.932C24.8221 13.8068 24.2765 13.6369 23.9367 13.2076C23.5967 12.7783 22.5906 10.5602 22.5906 10.5602C22.5906 10.5602 22.1232 9.99444 21.7856 9.80672C21.448 9.61887 20.8442 9.48695 20.6586 9.47798C20.4732 9.46901 19.041 9.46901 19.041 9.46901C19.041 9.46901 18.9068 9.41432 18.8621 9.13703C18.8174 8.85974 16.8787 14.9997 16.8072 16.5559C16.7356 18.1122 17.506 20.1849 17.506 20.1849ZM19.459 10.4025C19.459 10.4025 20.1074 10.3847 20.3892 10.416C20.6708 10.4473 21.3059 10.6978 21.6547 11.1003C22.0035 11.5026 22.5222 12.7458 22.7727 13.1797C23.0231 13.6134 23.1305 13.7342 23.0723 13.7923C23.0141 13.8504 23.1125 13.8459 22.5267 13.8459C21.941 13.8459 19.0521 13.837 19.0521 13.837C19.0521 13.837 18.9312 13.8527 18.9312 13.4234C18.9312 12.9941 18.9324 10.5077 18.9324 10.5077C18.9324 10.5077 18.9357 10.4171 19.459 10.4025Z"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.45768 17.674C9.76915 17.674 10.8322 18.731 10.8322 20.0352C10.8322 21.3392 9.76915 22.3963 8.45768 22.3963C7.14621 22.3963 6.08313 21.3392 6.08313 20.0352C6.08313 18.731 7.14621 17.674 8.45768 17.674ZM8.47113 19.0197C9.02684 19.0197 9.47728 19.4676 9.47728 20.0202C9.47728 20.5728 9.02684 21.0208 8.47113 21.0208C7.91543 21.0208 7.46486 20.5728 7.46486 20.0202C7.46486 19.4676 7.91543 19.0197 8.47113 19.0197Z"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.8315 17.6888C22.1429 17.6888 23.206 18.7459 23.206 20.0499C23.206 21.3541 22.1429 22.4112 20.8315 22.4112C19.52 22.4112 18.4569 21.3541 18.4569 20.0499C18.4569 18.7459 19.52 17.6888 20.8315 17.6888ZM20.8449 19.0346C21.4006 19.0346 21.8511 19.4825 21.8511 20.0351C21.8511 20.5876 21.4006 21.0355 20.8449 21.0355C20.2892 21.0355 19.8388 20.5876 19.8388 20.0351C19.8388 19.4825 20.2892 19.0346 20.8449 19.0346Z"
  }));
};

/***/ }),

/***/ "Vjsa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Header; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__("RE4Q");
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);

// EXTERNAL MODULE: ./i18n.tsx
var i18n = __webpack_require__("gUPn");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: ./src/components/elements/icons/index.tsx + 20 modules
var icons = __webpack_require__("myQD");

// EXTERNAL MODULE: external "@material-ui/core/styles/makeStyles"
var makeStyles_ = __webpack_require__("8//M");
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);

// CONCATENATED MODULE: ./src/components/header/top/drawer/useStyles.js

const useStyles = makeStyles_default()(() => ({
  root: {
    '& div.drawer-menu': {
      width: '200px',
      padding: '10px',
      '& > a': {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        color: '#000',
        textDecoration: 'none',
        '& > img': {
          width: '25px'
        },
        '& > h6': {
          marginLeft: '10px'
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/header/top/drawer/Drawer.tsx
var __jsx = external_react_default.a.createElement;



 // icons

 // styles


const LeftDrawer = ({
  isOpen,
  setIsOpen
}) => {
  const toggleDrawer = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(false);
  };

  const classes = useStyles();
  return __jsx(Drawer_default.a, {
    anchor: "left",
    className: classes.root,
    open: isOpen,
    onClose: toggleDrawer
  }, __jsx("div", {
    className: "drawer-menu"
  }, __jsx(i18n["a" /* Link */], {
    href: "#"
  }, __jsx("a", null, __jsx(icons["d" /* BusinessIcon */], null), __jsx(core_["Typography"], {
    variant: "h6"
  }, "\u0414\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430"))), __jsx(i18n["a" /* Link */], {
    href: "#"
  }, __jsx("a", null, __jsx(icons["A" /* StoreIcon */], null), __jsx(core_["Typography"], {
    variant: "h6"
  }, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B"))), __jsx(i18n["a" /* Link */], {
    href: "#"
  }, __jsx("a", null, __jsx(icons["u" /* QuestionIcon */], null), __jsx(core_["Typography"], {
    variant: "h6"
  }, "\u041F\u043E\u043C\u043E\u0449\u044C")))));
};
// CONCATENATED MODULE: ./src/components/elements/localization/useStyles.js

const useStyles_useStyles = makeStyles_default()(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > h6': {
      lineHeight: 1,
      cursor: 'pointer',
      '&:first-child': {
        paddingRight: '4px',
        borderRight: '1px #000 solid'
      },
      '&:last-child': {
        paddingLeft: '4px'
      }
    }
  },
  selected: {
    color: theme.palette.primary.main
  }
}));
// CONCATENATED MODULE: ./src/components/elements/localization/Localization.tsx
var Localization_jsx = external_react_default.a.createElement;




const Localization = () => {
  const setLocalAction = lang => () => i18n["d" /* i18n */].changeLanguage(lang);

  const classes = useStyles_useStyles();
  return Localization_jsx("div", {
    className: classes.root
  }, Localization_jsx(core_["Typography"], {
    variant: "subtitle1",
    className: i18n["d" /* i18n */].language === 'ru' ? classes.selected : '',
    onClick: setLocalAction('ru')
  }, "\u0420\u0443"), Localization_jsx(core_["Typography"], {
    variant: "subtitle1",
    className: i18n["d" /* i18n */].language === 'uz' ? classes.selected : '',
    onClick: setLocalAction('uz')
  }, "O\u2019z"));
};
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/components/header/top/useStyles.js

const top_useStyles_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    '& div.location': {
      display: 'flex',
      alignItems: 'center',
      '& > h6.MuiTypography-subtitle1': {
        textDecoration: 'underline'
      },
      '& > svg': {
        marginRight: '12px'
      }
    },
    '& div.social-icons > a': {
      display: 'flex',
      alignItems: 'center',
      marginRight: '12px',
      '& > img': {
        width: '35px'
      }
    },
    '& div.multiple-actions': {
      display: 'flex',
      flexFlow: 'row wrap',
      '& div.MuiGrid-item': {
        '& > a': {
          display: 'flex',
          textDecoration: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          '&.selected': {
            '& > h6.MuiTypography-subtitle1': {
              backgroundImage: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            },
            '& svg': {
              marginLeft: 5,
              '& > defs > linearGradient > stop': {
                '&:first-child': {
                  stopColor: '#675EAA'
                },
                '&:last-child': {
                  stopColor: '#AD66D5'
                }
              }
            }
          },
          '& > h6.MuiTypography-subtitle1': {
            color: 'rgba(49, 49, 49, 0.7)',
            letterSpacing: '0.4px'
          },
          '& > svg': {
            marginLeft: '5px',
            height: '20px',
            [theme.breakpoints.down('lg')]: {
              width: '16px'
            },
            [theme.breakpoints.up('lg')]: {
              width: '16px'
            }
          },
          '&:hover': {
            '& > h6.MuiTypography-subtitle1': {
              color: '#AD66D5'
            },
            '& > svg > path': {
              fill: '#AD66D5'
            }
          }
        }
      },
      '& h6': {
        [theme.breakpoints.down('lg')]: {
          fontSize: '.85rem'
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '1rem'
        }
      }
    },
    // ------------> adaptive <--------------- //
    '& div.top-header-logo > a > img': {
      height: '50px',
      width: '145px'
    },
    '& div.burger-menu': {
      width: '35px',
      '& > div': {
        height: '4px',
        backgroundColor: '#675EAA',
        margin: '4px 0'
      }
    }
  },
  avatarBlock: {
    '& > button': {
      padding: '8px',
      '& img': {
        width: '40px'
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/header/top/Top.tsx
var Top_jsx = external_react_default.a.createElement;









const Top = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    t,
    handleOpenModal
  } = props;
  const {
    pathname
  } = Object(router_["useRouter"])();

  const onButtonClick = url => () => {
    i18n["b" /* Router */].push(`/cabinet/${url}`);
  };

  const classes = top_useStyles_useStyles();
  return Top_jsx("div", {
    className: classes.root
  }, Top_jsx(core_["Grid"], {
    container: true,
    justify: "space-between",
    alignItems: "center"
  }, Top_jsx(core_["Hidden"], {
    smDown: true
  }, Top_jsx(core_["Grid"], {
    item: true,
    md: 6
  }, Top_jsx("div", {
    className: "location"
  }, Top_jsx(icons["n" /* LocationIcon */], null), Top_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('location')))), Top_jsx(core_["Grid"], {
    item: true,
    container: true,
    alignItems: "center",
    justify: "flex-end",
    className: "multiple-actions",
    md: 6
  }, Top_jsx(core_["Grid"], {
    item: true,
    md: 2
  }, Top_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Top_jsx("a", null, Top_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('actions')), Top_jsx(icons["C" /* SurpriseIcon */], null)))), Top_jsx(core_["Grid"], {
    item: true,
    md: 2
  }, Top_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Top_jsx("a", null, Top_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('bonus')), Top_jsx(icons["B" /* SubstractIcon */], null)))), Top_jsx(core_["Grid"], {
    item: true,
    md: 2
  }, Top_jsx(i18n["a" /* Link */], {
    href: "/help"
  }, Top_jsx("a", {
    className: pathname === '/help' ? 'selected' : ''
  }, Top_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('help')), Top_jsx(icons["u" /* QuestionIcon */], null)))), Top_jsx(core_["Grid"], {
    item: true,
    md: 2
  }, Top_jsx(Localization, null))))), Top_jsx(core_["Hidden"], {
    mdUp: true
  }, Top_jsx(core_["AppBar"], {
    position: 'fixed',
    color: 'inherit',
    elevation: 0
  }, Top_jsx(core_["Toolbar"], null, Top_jsx(core_["Grid"], {
    container: true,
    justify: "space-between",
    alignItems: "center"
  }, Top_jsx(core_["Grid"], null, Top_jsx(core_["IconButton"], {
    size: "small",
    onClick: () => setIsOpen(true)
  }, Top_jsx("div", {
    className: "burger-menu"
  }, Top_jsx("div", null), Top_jsx("div", null), Top_jsx("div", null)))), Top_jsx(core_["Grid"], {
    className: "top-header-logo"
  }, Top_jsx(i18n["a" /* Link */], {
    href: "/"
  }, Top_jsx("a", null, Top_jsx(icons["p" /* Logo */], null)))), Top_jsx(core_["Grid"], {
    className: classes.avatarBlock
  }, Top_jsx(core_["IconButton"], {
    onClick: handleOpenModal
  }, Top_jsx("img", {
    src: icons["F" /* UserAvatar */],
    alt: "avatar"
  })))))), Top_jsx(LeftDrawer, {
    isOpen: isOpen,
    setIsOpen: setIsOpen
  })));
};
// CONCATENATED MODULE: ./src/components/header/top/TopContainer.tsx
var TopContainer_jsx = external_react_default.a.createElement;



const TopContainer = props => {
  const {
    t,
    handleOpenModal
  } = props;
  return TopContainer_jsx(Top, {
    t: t,
    handleOpenModal: handleOpenModal
  });
};

/* harmony default export */ var top_TopContainer = (TopContainer);
// EXTERNAL MODULE: ./src/components/elements/button/Button.tsx + 1 modules
var Button = __webpack_require__("XCGS");

// CONCATENATED MODULE: ./src/components/elements/search_form/useStyles.js

const search_form_useStyles_useStyles = makeStyles_default()(() => ({
  root: {
    width: '100%',
    height: 38,
    position: 'relative',
    display: 'flex',
    '& > img.search-icon, & > img.filter-icon': {
      position: 'absolute',
      height: '20px',
      top: 'calc(50% - 10px)'
    },
    '& > img.search-icon': {
      width: 18,
      height: 18,
      left: '10px'
    },
    '& > img.filter-icon': {
      right: '10px'
    },
    '& > input.search-input': {
      padding: '8px 230px 8px 35px',
      width: '100%',
      borderRadius: '7px',
      border: '1px solid #ccc',
      fontSize: '0.87rem'
    },
    '& > div.select-type': {
      width: 150,
      height: 38,
      position: 'absolute',
      right: '90px',
      top: 0,
      zIndex: 1,
      '& > div': {
        padding: 0,
        height: 'inherit',
        display: 'flex',
        alignItems: 'center'
      },
      '& div.MuiSelect-select:focus': {
        background: 'none'
      }
    },
    '& > button.search-button': {
      width: 88,
      marginLeft: '-70px',
      color: '#000',
      border: '1px solid #C0C0C0',
      borderBottomRightRadius: '7px',
      borderTopRightRadius: '7px',
      borderBottomLeftRadius: '0',
      borderTopLeftRadius: '0',
      backgroundColor: '#E9E9E9',
      lineHeight: '1.65'
    }
  }
}));
// CONCATENATED MODULE: ./src/components/elements/search_form/SearchForm.tsx
var SearchForm_jsx = external_react_default.a.createElement;





const SearchForm = props => {
  const {
    t
  } = props;
  const {
    0: adType,
    1: setAdType
  } = Object(external_react_["useState"])(1);

  const handleSelect = e => {
    setAdType(e.target.value);
  };

  const classes = search_form_useStyles_useStyles();
  return SearchForm_jsx("form", {
    className: classes.root
  }, SearchForm_jsx("img", {
    src: icons["y" /* SearchIcon */],
    className: "search-icon",
    alt: "search"
  }), SearchForm_jsx("input", {
    type: "text",
    className: "search-input",
    placeholder: t('searchText')
  }), SearchForm_jsx(core_["NativeSelect"], {
    value: adType,
    onChange: handleSelect,
    className: "select-type",
    disableUnderline: true
  }, SearchForm_jsx("option", {
    value: 1
  }, "\u0412\u0441\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F"), SearchForm_jsx("option", {
    value: 2
  }, "\u041E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F"), SearchForm_jsx("option", {
    value: 3
  }, "\u0410\u0443\u043A\u0446\u0438\u043E\u043D\u044B")), SearchForm_jsx(core_["Hidden"], {
    smDown: true
  }, SearchForm_jsx(Button["a" /* ButtonComponent */], {
    className: "search-button"
  }, SearchForm_jsx(core_["Typography"], {
    variant: "subtitle2"
  }, t('searchBtn')))), SearchForm_jsx(core_["Hidden"], {
    mdUp: true
  }, SearchForm_jsx("img", {
    src: icons["m" /* FilterIcon */],
    alt: "filter icon",
    className: "filter-icon"
  })));
};
// CONCATENATED MODULE: ./src/components/hoc/withScrollThreshold.tsx
var withScrollThreshold_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const withScrollThreshold = Component => props => {
  const isScrollBreak = Object(core_["useScrollTrigger"])({
    disableHysteresis: true,
    threshold: 53
  });
  return withScrollThreshold_jsx(Component, _extends({}, props, {
    isScrollBreak: isScrollBreak
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/AddIcon.tsx
var AddIcon_jsx = external_react_default.a.createElement;

const AddIcon = () => {
  return AddIcon_jsx("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, AddIcon_jsx("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "8",
    stroke: "white"
  }), AddIcon_jsx("path", {
    d: "M9.09599 3.17503L9.09599 7.90392L13.8249 7.90392V9.09608L9.09599 9.09608L9.09599 13.825L7.90383 13.825L7.90383 9.09608L3.17494 9.09608V7.90392L7.90383 7.90392L7.90383 3.17503L9.09599 3.17503Z",
    fill: "white"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/CategorySortIcon.tsx
var CategorySortIcon_jsx = external_react_default.a.createElement;

const CategorySortIcon = props => {
  return CategorySortIcon_jsx("svg", {
    width: "21",
    height: "14",
    viewBox: "0 0 21 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, CategorySortIcon_jsx("path", {
    d: "M0 8.14844V5.85156H14V8.14844H0ZM0 0H21V2.35156H0V0ZM0 14V11.6484H7V14H0Z",
    fill: "white"
  }));
};
// EXTERNAL MODULE: ./src/components/elements/icons/SignIcon.tsx
var SignIcon = __webpack_require__("3V2s");

// CONCATENATED MODULE: ./src/components/header/bottom/useStyles.js

const bottom_useStyles_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    height: '50px',
    '& header.MuiAppBar-root': {
      background: '#fafafa',
      '& > div.MuiContainer-root': {
        padding: ({
          isScrollBreak
        }) => !isScrollBreak && 0,
        transition: 'padding .3s',
        '& > div': {
          width: '100%',
          margin: 0,
          '& > div:first-child': {
            paddingLeft: 0
          },
          '& > div:last-child': {
            paddingRight: 0
          }
        }
      },
      '& div.bottom-logo': {
        '& a': {
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }
      }
    },
    '& div.MuiFormControl-root': {
      width: '100%',
      borderRadius: '7px'
    },
    '& div.select-menu > div': {
      width: '100%',
      '& div.MuiSelect-selectMenu': {
        padding: '7px 0',
        '& > h6': {
          textAlign: 'center',
          paddingRight: '8px'
        }
      },
      '& svg': {
        right: 0
      }
    },
    '& button.header-button': {
      borderRadius: '10px',
      borderStyle: 'initial',
      height: '38px',
      '& > svg': {
        marginLeft: '8px',
        [theme.breakpoints.down(1200)]: {
          display: 'none'
        }
      }
    },
    '& button.bottom-sign-button': {
      color: '#000',
      backgroundColor: '#F2F2F2',
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
      width: '100%'
    },
    '& a.create-ancmnt-link': {
      textDecoration: 'none',
      '& button': {
        width: '100%',
        '& h6.MuiTypography-subtitle2': {
          lineHeight: '15px',
          letterSpacing: '0.5px',
          color: '#fff'
        }
      }
    },
    '& button.bottom-category-button': {
      width: '100%',
      '& > h6.MuiTypography-subtitle2': {
        lineHeight: '15px',
        letterSpacing: '0.5px',
        fontSize: '1.125rem',
        color: '#fff'
      }
    },
    // Adaptive
    '& div.bottom-logo > a': {
      '& img': {
        [theme.breakpoints.down('lg')]: {
          width: '125px',
          height: '42px'
        },
        [theme.breakpoints.up('lg')]: {
          width: '140px',
          height: '47px'
        }
      }
    },
    '& div.category-menu > button, & div.select-menu, & div.create-ad, button.bottom-sign-button': {
      '& h6': {
        [theme.breakpoints.down('lg')]: {
          fontSize: '.69rem'
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '.875rem'
        }
      }
    },
    '& div.select-local': {
      padding: '10px 0',
      '& > form': {
        width: '100%',
        '& > div': {
          padding: '8px 36px',
          '& > h6': {
            textAlign: 'center'
          }
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/header/bottom/Bottom.tsx
var Bottom_jsx = external_react_default.a.createElement;












const Bottom = props => {
  const {
    isScrollBreak,
    handleOpenModal,
    isAuth,
    t
  } = props;
  const classes = bottom_useStyles_useStyles(props);
  return Bottom_jsx("div", {
    className: classes.root
  }, Bottom_jsx(core_["Hidden"], {
    mdDown: true
  }, Bottom_jsx(core_["AppBar"], {
    color: "inherit",
    elevation: isScrollBreak ? 1 : 0,
    position: isScrollBreak ? "fixed" : "absolute"
  }, Bottom_jsx(core_["Container"], {
    maxWidth: "xl"
  }, Bottom_jsx(core_["Grid"], {
    container: true,
    justify: "space-between",
    alignItems: "center",
    spacing: 1
  }, Bottom_jsx(core_["Grid"], {
    container: true,
    item: true,
    xs: 3,
    alignItems: "center",
    spacing: 1
  }, Bottom_jsx(core_["Grid"], {
    container: true,
    item: true,
    md: 6,
    className: "bottom-logo"
  }, Bottom_jsx(i18n["a" /* Link */], {
    href: "/"
  }, Bottom_jsx("a", null, Bottom_jsx(icons["p" /* Logo */], null)))), Bottom_jsx(core_["Grid"], {
    item: true,
    container: true,
    md: 6,
    justify: "flex-end",
    className: "category-menu"
  }, Bottom_jsx(Button["a" /* ButtonComponent */], {
    color: "primary",
    className: "bottom-category-button header-button"
  }, Bottom_jsx(core_["Typography"], {
    variant: "subtitle2"
  }, t('categories')), Bottom_jsx(CategorySortIcon, null)))), Bottom_jsx(core_["Grid"], {
    item: true,
    container: true,
    md: 6,
    alignItems: "center",
    className: "search-block"
  }, Bottom_jsx(core_["Grid"], {
    item: true,
    xs: true
  }, Bottom_jsx(SearchForm, {
    t: t
  }))), Bottom_jsx(core_["Grid"], {
    item: true,
    md: 2
  }, Bottom_jsx(i18n["a" /* Link */], {
    href: "/announcement/create"
  }, Bottom_jsx("a", {
    className: "create-ancmnt-link"
  }, Bottom_jsx(Button["a" /* ButtonComponent */], {
    color: "primary",
    className: "header-button"
  }, Bottom_jsx(core_["Typography"], {
    variant: "subtitle2"
  }, t('common:createAncmnt')), Bottom_jsx(AddIcon, null))))), Bottom_jsx(core_["Grid"], {
    item: true,
    container: true,
    justify: "flex-end",
    alignItems: "center",
    xs: 1
  }, Bottom_jsx(Button["a" /* ButtonComponent */], {
    className: "bottom-sign-button header-button",
    onClick: handleOpenModal
  }, Bottom_jsx(core_["Typography"], {
    variant: "subtitle2"
  }, t(`common:${isAuth ? 'signOut' : 'signIn'}`)), Bottom_jsx(SignIcon["a" /* SignIcon */], null))))))), Bottom_jsx(core_["Hidden"], {
    lgUp: true
  }, Bottom_jsx("div", {
    className: "select-local"
  }, Bottom_jsx(SearchForm, {
    t: t
  }))));
};

/* harmony default export */ var bottom_Bottom = (withScrollThreshold(Bottom));
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/components/elements/custom_tab_panel/CustomTabPanel.tsx
var CustomTabPanel = __webpack_require__("riHB");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./src/components/elements/custom_formik_field/CustomFormikField.tsx
var CustomFormikField = __webpack_require__("MZHw");

// EXTERNAL MODULE: ./src/redux/slices/authRegSlice.ts
var authRegSlice = __webpack_require__("LPWX");

// CONCATENATED MODULE: ./src/components/elements/auth_reg_form/useStyles.js

const auth_reg_form_useStyles_useStyles = Object(styles_["makeStyles"])(({
  palette
}) => ({
  root: {
    '& > div.form-block': {
      '& div.server-error': {
        margin: '20px 0',
        '& p': {
          textAlign: 'center',
          fontSize: '0.875rem'
        }
      },
      '& div.tabs-container': {
        '& div.tabs': {
          width: '100%',
          '& div.MuiTabs-flexContainer': {
            justifyContent: 'center'
          },
          '& button.MuiButtonBase-root': {
            width: '50%',
            borderBottom: '1px solid rgba(0,0,0,.23)',
            '& h6.MuiTypography-subtitle1': {
              fontSize: '1.125rem'
            }
          }
        },
        '& div.tab-panels': {
          '& > div.sign-panel > form, & > div.reg-panel > form': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: 50,
            '& > div': {
              marginTop: '15px',
              '&:nth-child(3), &:nth-child(4)': {
                marginTop: 0
              },
              '& > div': {
                marginTop: 10,
                '&:last-child': {
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '8px 5px 0',
                  '& a': {
                    '& > p': {
                      color: '#675EAA',
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }
                  }
                }
              },
              '& label': {
                marginLeft: 5
              },
              '& input.MuiOutlinedInput-input': {
                height: '38px',
                padding: '0 16px'
              },
              '& div.MuiOutlinedInput-root': {
                borderRadius: '3px'
              }
            }
          },
          '& > div.sign-panel > form': {
            '& a': {
              textDecoration: 'none'
            }
          },
          '& > div.reg-panel': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '& > form': {
              height: '280px'
            }
          }
        }
      }
    },
    '& div.forget-password': {
      display: 'flex',
      justifyContent: 'flex-end',
      '& > a > p.MuiTypography-body2': {
        fontSize: '14px',
        color: palette.primary.main
      }
    }
  },
  modalBtns: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px !important',
    '& button.signin-btn, & button.reg-btn': {
      color: '#fff',
      background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
      borderRadius: '3px',
      padding: '15px 0',
      width: '58.2%',
      borderStyle: 'none',
      letterSpacing: '0.25px'
    }
  },
  agreement: {
    textAlign: 'center',
    '& > p ': {
      fontSize: '0.875rem',
      lineHeight: '16px',
      padding: '0 20px',
      '& > a': {
        color: palette.primary.main,
        textDecoration: 'none'
      }
    }
  }
}));
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// CONCATENATED MODULE: ./validation_schemas/authRegSchema.ts

const requiredMsg = 'Поле обязательно для заполнения';
const authRegSchema = Object(external_yup_["object"])({
  phone: Object(external_yup_["string"])().required(requiredMsg),
  password: Object(external_yup_["string"])().required(requiredMsg)
});
// CONCATENATED MODULE: ./src/components/elements/auth_reg_form/AuthRegForm.tsx
var AuthRegForm_jsx = external_react_default.a.createElement;











const initialInputsVals = {
  phone: '',
  password: ''
};
const AuthRegForm = props => {
  const {
    t
  } = props;
  const {
    language
  } = i18n["d" /* i18n */];
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    isFetch,
    error
  } = Object(external_react_redux_["useSelector"])(store => store.auth);
  const {
    0: tabValue,
    1: setTabValue
  } = Object(external_react_["useState"])(0);

  const tabsHandler = (event, newValue) => {
    setTabValue(newValue);
  };

  const loginReg = values => {
    if (tabValue === 0) {
      dispatch(Object(authRegSlice["b" /* fetchToken */])(values));
    }
  };

  const onSubmit = (values, actions) => {
    loginReg(values);
    actions.resetForm();
    props.handleCloseModal();
  };

  const formik = Object(external_formik_["useFormik"])({
    initialValues: initialInputsVals,
    validationSchema: authRegSchema,
    onSubmit
  });
  const {
    errors,
    touched
  } = formik;
  const classes = auth_reg_form_useStyles_useStyles();
  return AuthRegForm_jsx("div", {
    className: classes.root
  }, AuthRegForm_jsx("div", {
    className: "form-block"
  }, AuthRegForm_jsx("div", {
    className: "server-error"
  }, error && AuthRegForm_jsx(core_["Typography"], {
    variant: "body2",
    className: "error-text"
  }, t('auth_reg:serverError'))), AuthRegForm_jsx("div", {
    className: "tabs-container"
  }, AuthRegForm_jsx(core_["Tabs"], {
    value: tabValue,
    onChange: tabsHandler,
    indicatorColor: "primary",
    className: "tabs"
  }, AuthRegForm_jsx(core_["Tab"], {
    label: AuthRegForm_jsx(core_["Typography"], {
      variant: "subtitle1"
    }, t('auth_reg:signInTitle')),
    value: 0
  }), AuthRegForm_jsx(core_["Tab"], {
    label: AuthRegForm_jsx(core_["Typography"], {
      variant: "subtitle1"
    }, t('auth_reg:signUpTitle')),
    value: 1
  })), AuthRegForm_jsx("div", {
    className: "tab-panels"
  }, AuthRegForm_jsx(CustomTabPanel["a" /* CustomTabPanel */], {
    value: tabValue,
    index: 0,
    className: "sign-panel"
  }, AuthRegForm_jsx(external_formik_["FormikProvider"], {
    value: formik
  }, AuthRegForm_jsx(external_formik_["Form"], {
    onSubmit: formik.handleSubmit
  }, AuthRegForm_jsx("div", null, AuthRegForm_jsx(CustomFormikField["a" /* CustomFormikField */], {
    name: "phone",
    type: "tel",
    labelText: t('auth_reg:enterPhone'),
    placeholder: "+ (998) __ ___ __ __",
    className: errors.phone && touched.phone ? 'error-border' : ''
  }), AuthRegForm_jsx("div", {
    className: "validation-block"
  }, AuthRegForm_jsx(core_["Typography"], {
    variant: "subtitle2",
    className: "error-text"
  }, errors.phone && touched.phone ? errors.phone : ''))), AuthRegForm_jsx("div", null, AuthRegForm_jsx(CustomFormikField["a" /* CustomFormikField */], {
    name: "password",
    type: "password",
    labelText: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
    placeholder: t('auth_reg:enterPassword'),
    className: errors.password && touched.password ? 'error-border' : ''
  }), AuthRegForm_jsx("div", {
    className: "validation-block"
  }, AuthRegForm_jsx(core_["Typography"], {
    variant: "subtitle2",
    className: "error-text"
  }, errors.password && touched.password ? errors.password : ''), AuthRegForm_jsx("a", {
    href: "#"
  }, AuthRegForm_jsx(core_["Typography"], {
    variant: "body2"
  }, t('auth_reg:forgetPassword'))))), AuthRegForm_jsx("div", {
    className: classes.modalBtns
  }, AuthRegForm_jsx(Button["a" /* ButtonComponent */], {
    className: "signin-btn",
    type: "submit",
    disabled: isFetch
  }, t('common:signIn'))))), AuthRegForm_jsx("div", {
    className: classes.agreement
  }, AuthRegForm_jsx(core_["Typography"], {
    className: "reg-agreement",
    variant: "body2"
  }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \u0412\u043E\u0439\u0442\u0438 \u0432\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F ", ' ', AuthRegForm_jsx(i18n["a" /* Link */], {
    href: "#"
  }, AuthRegForm_jsx("a", null, "\u043B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F")), ` ${t('auth_reg:agreement.thirdPart')} `, AuthRegForm_jsx(i18n["a" /* Link */], {
    href: "#"
  }, AuthRegForm_jsx("a", null, "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")), language === 'uz' && ` ${t('auth_reg:agreement.fifthPart')}`))), AuthRegForm_jsx(CustomTabPanel["a" /* CustomTabPanel */], {
    value: tabValue,
    index: 1,
    className: "reg-panel"
  }, AuthRegForm_jsx(external_formik_["FormikProvider"], {
    value: formik
  }, AuthRegForm_jsx(external_formik_["Form"], {
    onSubmit: formik.handleSubmit
  }, AuthRegForm_jsx("div", null, AuthRegForm_jsx(CustomFormikField["a" /* CustomFormikField */], {
    name: "phone",
    type: "tel",
    placeholder: "+ (998) __ ___ __ __",
    labelText: t('auth_reg:enterPhone'),
    className: errors.phone && touched.phone ? 'error-border' : ''
  }), AuthRegForm_jsx("div", {
    className: "validation-block"
  }, AuthRegForm_jsx(core_["Typography"], {
    variant: "subtitle2",
    className: "error-text"
  }, errors.phone && touched.phone ? errors.phone : ''))), AuthRegForm_jsx("div", {
    className: classes.modalBtns
  }, AuthRegForm_jsx(Button["a" /* ButtonComponent */], {
    className: "reg-btn",
    type: "submit"
  }, t('auth_reg:signUp'))))), AuthRegForm_jsx("div", {
    className: classes.agreement
  }, AuthRegForm_jsx(core_["Typography"], {
    className: "reg-agreement",
    variant: "body2"
  }, `${t('auth_reg:agreement.firstPart')} `, AuthRegForm_jsx(i18n["a" /* Link */], {
    href: "#"
  }, AuthRegForm_jsx("a", null, `${t('auth_reg:agreement.secondPart')} `)), `${t('auth_reg:agreement.thirdPart')} `, AuthRegForm_jsx(i18n["a" /* Link */], {
    href: "#"
  }, AuthRegForm_jsx("a", null, `${t('auth_reg:agreement.fourthPart')}`)), language === 'uz' && ` ${t('auth_reg:agreement.fifthPart')}`)))))));
};
// EXTERNAL MODULE: ./src/components/elements/custom_slider/CustomSlider.tsx + 2 modules
var CustomSlider = __webpack_require__("C16o");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// CONCATENATED MODULE: ./src/components/elements/custom_list/useStyles.js

const custom_list_useStyles_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    '& > li': {
      backgroundColor: theme.palette.primary.white,
      borderBottom: `1px solid ${theme.palette.primary.gray}`,
      '& h6': {
        color: theme.palette.primary.black,
        fontWeight: 600
      },
      '& > div.MuiListItem-root': {
        paddingTop: '10px',
        paddingBottom: '10px'
      },
      '& > div.MuiListItemSecondaryAction-root': {
        '& > button.MuiIconButton-root': {
          padding: '8px'
        },
        '& svg': {
          width: '15px',
          height: '15px',
          '& > path': {
            fill: theme.palette.primary.black
          }
        }
      },
      '&:first-child': {
        borderTop: `1px solid ${theme.palette.primary.gray}`
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/elements/custom_list/CustomList.tsx
var CustomList_jsx = external_react_default.a.createElement;




const CustomList = ({
  list
}) => {
  const classes = custom_list_useStyles_useStyles();
  return CustomList_jsx(core_["List"], {
    className: classes.root
  }, list.map(item => CustomList_jsx(core_["ListItem"], {
    key: item.name,
    button: true
  }, CustomList_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, item.name), CustomList_jsx(core_["ListItemSecondaryAction"], null, CustomList_jsx(core_["IconButton"], null, CustomList_jsx(icons_["ArrowForwardIos"], null))))));
};
// CONCATENATED MODULE: ./src/components/header/auth_reg/auth_reg_sm/sliderSettings.js
const settings = {
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 650,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
};
// CONCATENATED MODULE: ./src/components/header/auth_reg/auth_reg_sm/useStyles.js

const auth_reg_sm_useStyles_useStyles = Object(styles_["makeStyles"])(theme => ({
  authForm: {
    width: '100%',
    height: '100%',
    '& div.btns-wrapper': {
      display: 'flex',
      justifyContent: 'space-between',
      '& > button.MuiIconButton-root': {
        margin: '4px'
      }
    }
  },
  authRegMenu: {
    width: '100%',
    height: '100%',
    background: 'url(img/modal_auth_sm_bg.svg) no-repeat',
    backgroundSize: 'cover',
    '& div.close-modal-block': {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      '& > button.MuiIconButton-root': {
        margin: '5px'
      }
    },
    '& div.welcome-block': {
      color: theme.palette.primary.black,
      width: '60%',
      marginTop: '10px',
      marginLeft: '10%',
      '& > h6.MuiTypography-h6': {
        fontSize: '6.5vw',
        fontWeight: 600
      }
    },
    '& div.auth-site-txt': {
      marginTop: '110px',
      color: theme.palette.primary.white,
      '& > h6.MuiTypography-subtitle1': {
        textAlign: 'center'
      }
    },
    '& > div.auth-reg-btn': {
      width: '226px',
      margin: '20px auto 0',
      '& > button': {
        padding: '10px',
        color: theme.palette.primary.black,
        backgroundColor: '#FFF'
      }
    },
    '& > div.slider-block': {
      marginTop: '30px'
    },
    '& > div.list-block': {
      margin: '20px 0',
      '& > div.MuiListItem-button': {
        backgroundColor: theme.palette.primary.white,
        borderBottom: `1px solid ${theme.palette.primary.gray}`,
        '& > h6.MuiTypography-subtitle1': {
          color: theme.palette.primary.black,
          fontWeight: 600
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/header/auth_reg/auth_reg_sm/AutRegSm.tsx
var AutRegSm_jsx = external_react_default.a.createElement;









const AutRegSm_list = [{
  name: 'Акции и бонусы'
}, {
  name: 'Помощь'
}, {
  name: 'Служба поддержки'
}, {
  name: 'Политика конфидециальности'
}];
const AuthRegSm = props => {
  const {
    t,
    handleCloseModal
  } = props;
  const {
    0: isAuthRegClicked,
    1: setIsAuthRegClicked
  } = Object(external_react_["useState"])(false);

  const authRegClickHandler = value => () => {
    setIsAuthRegClicked(value);
  };

  const handleBack = () => {
    setIsAuthRegClicked(false);
  };

  const classes = auth_reg_sm_useStyles_useStyles();
  return AutRegSm_jsx(external_react_default.a.Fragment, null, isAuthRegClicked ? AutRegSm_jsx("div", {
    className: classes.authForm
  }, AutRegSm_jsx("div", {
    className: "btns-wrapper"
  }, AutRegSm_jsx(icons["s" /* PrevArrowIcon */], {
    onClick: handleBack
  })), AutRegSm_jsx(AuthRegForm, {
    t: t,
    handleCloseModal: handleCloseModal
  })) : AutRegSm_jsx("div", {
    className: classes.authRegMenu
  }, AutRegSm_jsx("div", {
    className: "close-modal-block"
  }), AutRegSm_jsx("div", {
    className: "welcome-block"
  }, AutRegSm_jsx(core_["Typography"], {
    variant: "h6"
  }, t('auth_reg:welcome'))), AutRegSm_jsx("div", {
    className: "auth-site-txt"
  }, AutRegSm_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, t('auth_reg:authSite'))), AutRegSm_jsx("div", {
    className: "auth-reg-btn"
  }, AutRegSm_jsx(Button["a" /* ButtonComponent */], {
    onClick: authRegClickHandler(true)
  }, AutRegSm_jsx(core_["Typography"], null, t('auth_reg:signInAndReg')))), AutRegSm_jsx("div", {
    className: "slider-block"
  }, AutRegSm_jsx(CustomSlider["a" /* CustomSlider */], settings, AutRegSm_jsx("img", {
    src: "img/bonus_img.png",
    alt: "bonus_img"
  }), AutRegSm_jsx("img", {
    src: "img/bonus_img.png",
    alt: "bonus_img"
  }), AutRegSm_jsx("img", {
    src: "img/bonus_img.png",
    alt: "bonus_img"
  }), AutRegSm_jsx("img", {
    src: "img/bonus_img.png",
    alt: "bonus_img"
  }))), AutRegSm_jsx("div", {
    className: "list-block"
  }, AutRegSm_jsx(CustomList, {
    list: AutRegSm_list
  }))));
};
// CONCATENATED MODULE: ./src/components/header/auth_reg/useStyles.js

const auth_reg_useStyles_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    width: '725px',
    height: '530px',
    borderRadius: '6px',
    margin: '40px auto',
    '& > div.MuiGrid-container': {
      height: '100%'
    },
    '& div.info-block': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '45px 0',
      backgroundImage: 'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("/img/modal-image.jpg")',
      backgroundSize: 'cover',
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
      '& h6.MuiTypography-root': {
        lineHeight: '14px',
        color: '#fff'
      },
      '& > div': {
        display: 'flex',
        alignItems: 'center',
        height: '90px',
        padding: '20px',
        '& > img': {
          minWidth: '40px',
          height: '40px',
          marginRight: '15px'
        },
        '& > h6.MuiTypography-subtitle2': {
          lineHeight: '17px',
          fontWeight: 400
        }
      }
    },
    '& div.auth-reg-block': {
      backgroundColor: theme.palette.primary.white,
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
      position: 'relative',
      padding: '19px 16px',
      height: '100%',
      '& > div.close-btn-wrapper': {
        position: 'absolute',
        right: '-10px',
        top: '-10px',
        background: '#EB5757',
        borderRadius: '100%',
        padding: '6px',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > button.MuiIconButton-root': {
          padding: '5px',
          '& svg > path': {// fill: '#EB5757',
          }
        },
        '&:hover': {
          cursor: 'pointer' // background: '#fff'

        }
      },
      '& > div.welcome-block > h6.MuiTypography-subtitle1': {
        color: 'rgba(49, 49, 49, 0.6)',
        paddingRight: '100px',
        marginTop: '8px'
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/header/auth_reg/AuthRegPage.tsx
var AuthRegPage_jsx = external_react_default.a.createElement;







const AuthRegPage = props => {
  const {
    t,
    handleCloseModal
  } = props;
  const classes = auth_reg_useStyles_useStyles();
  return AuthRegPage_jsx("div", {
    className: classes.root
  }, AuthRegPage_jsx(core_["Hidden"], {
    smDown: true
  }, AuthRegPage_jsx(core_["Grid"], {
    container: true
  }, AuthRegPage_jsx(core_["Grid"], {
    item: true,
    xs: 5
  }, AuthRegPage_jsx("div", {
    className: "info-block"
  }, AuthRegPage_jsx("div", null, AuthRegPage_jsx("img", {
    src: icons["c" /* Bonus_icon */],
    alt: ""
  }), AuthRegPage_jsx(core_["Typography"], {
    variant: "subtitle2",
    color: "initial"
  }, t('auth_reg:bonus'))), AuthRegPage_jsx("div", null, AuthRegPage_jsx("img", {
    src: icons["w" /* SafeBuyingIcon */],
    alt: "safeAuction-icon"
  }), AuthRegPage_jsx(core_["Typography"], {
    variant: "subtitle2",
    color: "initial"
  }, t('auth_reg:safeBuying'))), AuthRegPage_jsx("div", null, AuthRegPage_jsx("img", {
    src: icons["a" /* AdvertisementIcon */],
    alt: "advertisement-icon"
  }), AuthRegPage_jsx(core_["Typography"], {
    variant: "subtitle2",
    color: "initial"
  }, t('auth_reg:createAd'))), AuthRegPage_jsx("div", null, AuthRegPage_jsx("img", {
    src: icons["E" /* TorgIcon */],
    alt: "torg-icon"
  }), AuthRegPage_jsx(core_["Typography"], {
    variant: "subtitle2",
    color: "initial"
  }, t('auth_reg:createAuction'))), AuthRegPage_jsx("div", null, AuthRegPage_jsx("img", {
    src: icons["v" /* RatingIcon */],
    alt: "rating-icon"
  }), AuthRegPage_jsx(core_["Typography"], {
    variant: "subtitle2",
    color: "initial"
  }, t('auth_reg:rating'))))), AuthRegPage_jsx(core_["Grid"], {
    item: true,
    xs: 7
  }, AuthRegPage_jsx("div", {
    className: "auth-reg-block"
  }, AuthRegPage_jsx("div", {
    className: "close-btn-wrapper",
    onClick: handleCloseModal
  }, AuthRegPage_jsx(core_["IconButton"], null, AuthRegPage_jsx(icons["f" /* CloseIcon */], null))), AuthRegPage_jsx("div", {
    className: "welcome-block"
  }, AuthRegPage_jsx(core_["Typography"], {
    variant: "h6",
    color: "initial"
  }, t('auth_reg:welcome')), AuthRegPage_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, t('auth_reg:authSite'))), AuthRegPage_jsx("div", {
    className: "auth-form"
  }, AuthRegPage_jsx(AuthRegForm, {
    t: t,
    handleCloseModal: handleCloseModal
  })))))), AuthRegPage_jsx(core_["Hidden"], {
    mdUp: true
  }, AuthRegPage_jsx(AuthRegSm, {
    t: t,
    handleCloseModal: handleCloseModal
  })));
};
// EXTERNAL MODULE: ./src/redux/slices/categoriesSlice.ts
var categoriesSlice = __webpack_require__("E0nt");

// EXTERNAL MODULE: ./src/redux/slices/locationsSlice.ts
var locationsSlice = __webpack_require__("FBJA");

// CONCATENATED MODULE: ./src/components/header/useStyles.js

const header_useStyles_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    '& > div.header-wrapper': {
      paddingTop: '10px'
    } // '& div.top-wrapper': {
    //     [theme.breakpoints.down('sm')]: {
    //         marginBottom: '60px',
    //     },
    //     [theme.breakpoints.up('sm')]: {
    //         marginBottom: '10px',
    //     }
    // }

  },
  modalDialog: {
    '& > div:first-child': {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: `${theme.palette.primary.white}!important`
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/header/Header.tsx
var Header_jsx = external_react_default.a.createElement;













const Header = () => {
  const {
    t
  } = Object(i18n["e" /* useTranslation */])(['header', 'auth_reg', 'common']);
  const cookies = new external_universal_cookie_default.a();
  const isTokenExst = !!cookies.get('token');
  const lang = i18n["d" /* i18n */].language;
  const {
    isAuth,
    isAuthModalOpen
  } = Object(external_react_redux_["useSelector"])(store => store.auth);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const handleModal = value => () => {
    dispatch(Object(authRegSlice["d" /* setIsAuthModalOpen */])(value));
  };

  Object(external_react_["useEffect"])(() => {
    dispatch(Object(categoriesSlice["b" /* fetchCategories */])(lang));
    dispatch(Object(locationsSlice["a" /* fetchLocations */])(lang));
  }, [lang]);
  Object(external_react_["useEffect"])(() => {
    dispatch(Object(authRegSlice["c" /* setIsAuthAction */])(isTokenExst));
  }, [isTokenExst]);
  const classes = header_useStyles_useStyles();
  return Header_jsx("header", {
    className: classes.root,
    id: "back-to-top-anchor"
  }, Header_jsx("div", {
    className: "header-wrapper"
  }, Header_jsx(core_["Container"], {
    maxWidth: "xl"
  }, Header_jsx("div", {
    className: "top-wrapper"
  }, Header_jsx(top_TopContainer, {
    t: t,
    handleOpenModal: handleModal(true)
  })), Header_jsx("div", null, Header_jsx(bottom_Bottom, {
    t: t,
    isAuth: isAuth,
    handleOpenModal: handleModal(true)
  }))), Header_jsx(core_["Modal"], {
    open: isAuthModalOpen,
    onClose: handleModal(false),
    className: classes.modalDialog
  }, Header_jsx(external_react_default.a.Fragment, null, isAuth ? Header_jsx("div", {
    style: {
      width: '200px',
      height: '80px',
      backgroundColor: '#fff'
    }
  }, Header_jsx(core_["Typography"], {
    variant: "h5"
  }, "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0441\u0430\u0439\u0442\u0430?"), Header_jsx("div", {
    style: {
      display: 'flex'
    }
  }, Header_jsx(Button["a" /* ButtonComponent */], {
    onClick: handleModal(false)
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"), Header_jsx(Button["a" /* ButtonComponent */], null, "\u0412\u044B\u0439\u0442\u0438"))) : Header_jsx(AuthRegPage, {
    t: t,
    handleCloseModal: handleModal(false)
  })))));
};

/***/ }),

/***/ "Vu9T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GavelIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const GavelIcon = () => {
  return __jsx("svg", {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M2.15453 6.39294L6.39294 10.6667L4.27373 12.7859L0 8.54746L2.15453 6.39294ZM8.54746 0L12.7859 4.27373L10.6667 6.39294L6.39294 2.15453L8.54746 0ZM3.21413 5.33333L5.33333 3.21413L16 13.8808L13.8808 16L3.21413 5.33333ZM0 15.0817H9.04194V16.6004H0V15.0817Z",
    fill: "url(#paint324_linear)"
  }), __jsx("defs", null, __jsx("linearGradient", {
    id: "paint324_linear",
    x1: "-9.74206e-07",
    y1: "9.68359",
    x2: "9.54526",
    y2: "1.94868",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#4E4E4E"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4E4E4E"
  }))));
};

/***/ }),

/***/ "WJpf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SliderArrow; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/components/elements/slider_arrow/useStyles.js

const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    backgroundColor: theme.palette.primary.white,
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.15)',
    zIndex: 20,
    '& > span.MuiIconButton-label': {
      position: 'relative',
      width: '13px',
      height: '13px',
      marginLeft: '-4.5px',
      transform: 'rotate(-45deg)',
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
        width: 'inherit',
        height: '3.2px'
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '0px',
        right: '0px',
        background: 'linear-gradient(49.94deg, #AD66D5 19.03%, #675EAA 72.72%)',
        height: 'inherit',
        width: '3.2px'
      }
    },
    '&.slick-prev > span.MuiIconButton-label': {
      marginRight: '-8.5px',
      transform: 'rotate(135deg)'
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.secondary,
      '& > span:before, & > span:after': {
        background: `${theme.palette.primary.white} !important`
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/elements/slider_arrow/SliderArrow.tsx
var __jsx = external_react_default.a.createElement;



const SliderArrow = ({
  onClick,
  className
}) => {
  const classes = useStyles();
  return __jsx(core_["IconButton"], {
    className: `${classes.root} ${className}`,
    onClick: onClick
  });
};

/***/ }),

/***/ "XCGS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ButtonComponent; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/styles/makeStyles"
var makeStyles_ = __webpack_require__("8//M");
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);

// CONCATENATED MODULE: ./src/components/elements/button/useStyles.js

const useStyles = makeStyles_default()(theme => ({
  root: {
    color: props => props.color === 'primary' ? theme.palette.primary.createAdBtnColor : theme.palette.primary.black,
    padding: '12px',
    background: props => props.color === 'primary' ? 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)' : props.color === 'secondary' ? 'none' : theme.palette.primary.secondary,
    boxShadow: props => props.color === 'primary' ? 'none' : '0px 0px 8px 0px #845CAB 20%',
    borderRadius: '3px',
    border: '1px solid',
    borderColor: props => props.color === 'primary' ? 'transparent' : props.color === 'secondary' ? '#845CAB' : 'transparent',
    '& > h6.MuiTypography-subtitle1': {
      color: props => props.color === 'primary' ? theme.palette.primary.white : props.color === 'secondary' ? theme.palette.primary.secondary : theme.palette.primary.black
    }
  }
}));
// CONCATENATED MODULE: ./src/components/elements/button/Button.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ButtonComponent = props => {
  const {
    className
  } = props,
        otherProps = _objectWithoutProperties(props, ["className"]);

  const classes = useStyles(props);
  return __jsx(core_["ButtonBase"], _extends({
    className: `${classes.root} ${className}`
  }, otherProps));
};

/***/ }),

/***/ "YVPx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CabinetMenuWrapper; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./src/components/MainLayout.tsx
var MainLayout = __webpack_require__("Ssln");

// EXTERNAL MODULE: ./src/components/elements/user_info_with_avatar/UserInfoWithAvatar.tsx + 5 modules
var UserInfoWithAvatar = __webpack_require__("BD0l");

// EXTERNAL MODULE: ./i18n.tsx
var i18n = __webpack_require__("gUPn");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/components/elements/button/Button.tsx + 1 modules
var Button = __webpack_require__("XCGS");

// CONCATENATED MODULE: ./src/components/elements/custom_budge/useStyles.js

const useStyles = Object(core_["makeStyles"])(() => ({
  root: {}
}));
// CONCATENATED MODULE: ./src/components/elements/custom_budge/CustomBadge.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const CustomBadge = props => {
  const classes = useStyles();
  return __jsx(core_["Badge"], _extends({}, props, {
    className: classes.root
  }), props.children);
};
// EXTERNAL MODULE: ./src/components/elements/icons/NotesIcon.tsx
var NotesIcon = __webpack_require__("adR5");

// EXTERNAL MODULE: ./src/components/elements/icons/GavelIcon.tsx
var GavelIcon = __webpack_require__("Vu9T");

// CONCATENATED MODULE: ./src/components/elements/icons/ArchiveIcon.tsx
var ArchiveIcon_jsx = external_react_default.a.createElement;

const ArchiveIcon = () => {
  return ArchiveIcon_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "#4e4e4e",
    xmlns: "http://www.w3.org/2000/svg"
  }, ArchiveIcon_jsx("path", {
    d: "M1.875 1.79167H14.125L13.2917 0.875H2.625L1.875 1.79167ZM8 5.79167L3.125 10.6667H6.20833V12.4583H9.79167V10.6667H12.875L8 5.79167ZM15.5833 1.95833C15.8611 2.29167 16 2.68056 16 3.125V14.2083C16 14.6806 15.8194 15.0972 15.4583 15.4583C15.0972 15.8194 14.6806 16 14.2083 16H1.79167C1.29167 16 0.861111 15.8194 0.5 15.4583C0.166667 15.0972 0 14.6806 0 14.2083V3.125C0 2.68056 0.138889 2.29167 0.416667 1.95833L1.625 0.5C1.90278 0.166667 2.25 0 2.66667 0H13.3333C13.75 0 14.0972 0.166667 14.375 0.5L15.5833 1.95833Z",
    fill: "url(#paint6734_linear)"
  }), ArchiveIcon_jsx("defs", null, ArchiveIcon_jsx("linearGradient", {
    id: "paint6734_linear",
    x1: "-9.74206e-07",
    y1: "9.33333",
    x2: "9.26447",
    y2: "1.54422",
    gradientUnits: "userSpaceOnUse"
  }, ArchiveIcon_jsx("stop", {
    stopColor: "#4e4e4e"
  }), ArchiveIcon_jsx("stop", {
    offset: "1",
    stopColor: "#4e4e4e"
  }))));
};
// EXTERNAL MODULE: ./src/components/elements/icons/FavoriteBorderIcon.tsx
var FavoriteBorderIcon = __webpack_require__("iLat");

// CONCATENATED MODULE: ./src/components/elements/icons/SortIcon.tsx
var SortIcon_jsx = external_react_default.a.createElement;

const SortIcon = () => {
  return SortIcon_jsx("svg", {
    width: "15",
    height: "16",
    viewBox: "0 0 15 16",
    fill: "#fff",
    xmlns: "http://www.w3.org/2000/svg"
  }, SortIcon_jsx("path", {
    d: "M6.01875 16H9V5.33333H6.01875V16ZM15 16L15 0H11.9812V16H15ZM-9.53674e-07 16H3V10.6667H-9.53674e-07V16Z",
    fill: "url(#paint4_linear)"
  }), SortIcon_jsx("defs", null, SortIcon_jsx("linearGradient", {
    id: "paint4_linear",
    x1: "6.25",
    y1: "16",
    x2: "14.1099",
    y2: "7.23561",
    gradientUnits: "userSpaceOnUse"
  }, SortIcon_jsx("stop", {
    stopColor: "#4e4e4e"
  }), SortIcon_jsx("stop", {
    offset: "1",
    stopColor: "#4e4e4e"
  }))));
};
// CONCATENATED MODULE: ./src/components/elements/icons/NotificationIcon.tsx
var NotificationIcon_jsx = external_react_default.a.createElement;

const NotificationIcon = () => {
  return NotificationIcon_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, NotificationIcon_jsx("path", {
    d: "M9.12676 15.1737C8.82629 15.4742 8.4507 15.6244 8 15.6244C7.5493 15.6244 7.16119 15.4742 6.83568 15.1737C6.53521 14.8482 6.38498 14.4726 6.38498 14.0469H9.57747C9.57747 14.4977 9.42723 14.8732 9.12676 15.1737ZM12.8075 6.83568V10.8169L14.4225 12.4319V13.2207H1.57746V12.4319L3.19249 10.8169V6.83568C3.19249 5.58372 3.50548 4.49452 4.13146 3.56808C4.78247 2.64163 5.67136 2.04069 6.79812 1.76526V1.20188C6.79812 0.876369 6.9108 0.600939 7.13615 0.375587C7.3615 0.125196 7.64945 0 8 0C8.35055 0 8.6385 0.125196 8.86385 0.375587C9.0892 0.600939 9.20188 0.876369 9.20188 1.20188V1.76526C10.3286 2.04069 11.205 2.64163 11.831 3.56808C12.482 4.49452 12.8075 5.58372 12.8075 6.83568ZM14.385 6.42253C14.2598 4.26917 13.3208 2.55399 11.5681 1.277L12.6948 0.150235C14.7731 1.75274 15.8748 3.84351 16 6.42253H14.385ZM4.46948 1.277C2.69171 2.52895 1.74022 4.24413 1.61502 6.42253H0C0.125196 3.84351 1.22692 1.75274 3.30516 0.150235L4.46948 1.277Z",
    fill: "url(#paint3_linear)"
  }), NotificationIcon_jsx("defs", null, NotificationIcon_jsx("linearGradient", {
    id: "paint3_linear",
    x1: "-9.74206e-07",
    y1: "9.11424",
    x2: "9.08148",
    y2: "1.29544",
    gradientUnits: "userSpaceOnUse"
  }, NotificationIcon_jsx("stop", {
    stopColor: "#4E4E4E"
  }), NotificationIcon_jsx("stop", {
    offset: "1",
    stopColor: "#4E4E4E"
  }))));
};
// CONCATENATED MODULE: ./src/components/elements/icons/LetterIcon.tsx
var LetterIcon_jsx = external_react_default.a.createElement;

const LetterIcon = () => {
  return LetterIcon_jsx("svg", {
    width: "16",
    height: "13",
    viewBox: "0 0 16 13",
    fill: "#4e4e4e",
    xmlns: "http://www.w3.org/2000/svg"
  }, LetterIcon_jsx("path", {
    d: "M14.4225 3.23005V1.61502L8 5.6338L1.57746 1.61502V3.23005L8 7.21127L14.4225 3.23005ZM14.4225 0C14.8482 0 15.2113 0.162754 15.5117 0.488263C15.8372 0.813772 16 1.18936 16 1.61502V11.23C16 11.6557 15.8372 12.0313 15.5117 12.3568C15.2113 12.6823 14.8482 12.8451 14.4225 12.8451H1.57746C1.1518 12.8451 0.776213 12.6823 0.450704 12.3568C0.150235 12.0313 0 11.6557 0 11.23V1.61502C0 1.18936 0.150235 0.813772 0.450704 0.488263C0.776213 0.162754 1.1518 0 1.57746 0H14.4225Z",
    fill: "url(#paint7_linear)"
  }), LetterIcon_jsx("defs", null, LetterIcon_jsx("linearGradient", {
    id: "paint7_linear",
    x1: "-9.74206e-07",
    y1: "7.49296",
    x2: "7.54181",
    y2: "-0.405207",
    gradientUnits: "userSpaceOnUse"
  }, LetterIcon_jsx("stop", {
    stopColor: "#4e4e4e"
  }), LetterIcon_jsx("stop", {
    offset: "1",
    stopColor: "#4e4e4e"
  }))));
};
// EXTERNAL MODULE: ./src/components/elements/icons/SafeIcon.tsx
var SafeIcon = __webpack_require__("y+bb");

// CONCATENATED MODULE: ./src/components/elements/icons/WalletIcon.tsx
var WalletIcon_jsx = external_react_default.a.createElement;

const WalletIcon = () => {
  return WalletIcon_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, WalletIcon_jsx("path", {
    d: "M10.0346 8.49383C10.2979 8.73086 10.6008 8.84938 10.9432 8.84938C11.2856 8.84938 11.5753 8.73086 11.8123 8.49383C12.0757 8.25679 12.2074 7.95391 12.2074 7.58519C12.2074 7.21646 12.0757 6.91358 11.8123 6.67654C11.5753 6.43951 11.2856 6.32099 10.9432 6.32099C10.6008 6.32099 10.2979 6.43951 10.0346 6.67654C9.79753 6.91358 9.67901 7.21646 9.67901 7.58519C9.67901 7.95391 9.79753 8.25679 10.0346 8.49383ZM7.58519 10.9432V4.22716H16V10.9432H7.58519ZM15.1704 12.642V13.4716C15.1704 13.9193 14.9992 14.3144 14.6568 14.6568C14.3144 14.9992 13.9193 15.1704 13.4716 15.1704H1.69877C1.22469 15.1704 0.816461 14.9992 0.474074 14.6568C0.158025 14.3144 0 13.9193 0 13.4716V1.69877C0 1.25103 0.158025 0.855967 0.474074 0.51358C0.816461 0.171193 1.22469 0 1.69877 0H13.4716C13.9193 0 14.3144 0.171193 14.6568 0.51358C14.9992 0.855967 15.1704 1.25103 15.1704 1.69877V2.5284H7.58519C7.11111 2.5284 6.70288 2.69959 6.36049 3.04198C6.04444 3.38436 5.88642 3.77942 5.88642 4.22716V10.9432C5.88642 11.3909 6.04444 11.786 6.36049 12.1284C6.70288 12.4708 7.11111 12.642 7.58519 12.642H15.1704Z",
    fill: "url(#paint9_linear)"
  }), WalletIcon_jsx("defs", null, WalletIcon_jsx("linearGradient", {
    id: "paint9_linear",
    x1: "-9.74206e-07",
    y1: "9.31147",
    x2: "9.24647",
    y2: "1.51925",
    gradientUnits: "userSpaceOnUse"
  }, WalletIcon_jsx("stop", {
    stopColor: "#4e4e4e"
  }), WalletIcon_jsx("stop", {
    offset: "1",
    stopColor: "#4e4e4e"
  }))));
};
// CONCATENATED MODULE: ./src/components/elements/icons/TimeLineIcon.tsx
var TimeLineIcon_jsx = external_react_default.a.createElement;

const TimeLineIcon = () => {
  return TimeLineIcon_jsx("svg", {
    width: "23",
    height: "12",
    viewBox: "0 0 23 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, TimeLineIcon_jsx("path", {
    d: "M21.4219 0.609375C21.8281 1.01562 22.0312 1.48438 22.0312 2.01562C22.0312 2.54688 21.8281 3.01562 21.4219 3.42188C21.0156 3.79688 20.5469 3.98438 20.0156 3.98438C19.7656 3.98438 19.5938 3.96875 19.5 3.9375L15.9375 7.5C16 7.6875 16.0312 7.85938 16.0312 8.01562C16.0312 8.54688 15.8281 9.01562 15.4219 9.42188C15.0156 9.79688 14.5469 9.98438 14.0156 9.98438C13.4844 9.98438 13.0156 9.79688 12.6094 9.42188C12.2031 9.01562 12 8.54688 12 8.01562C12 7.85938 12.0312 7.6875 12.0938 7.5L9.51562 4.92188C9.32812 4.98438 9.15625 5.01562 9 5.01562C8.84375 5.01562 8.67188 4.98438 8.48438 4.92188L3.9375 9.46875C4 9.65625 4.03125 9.82812 4.03125 9.98438C4.03125 10.5156 3.82812 10.9844 3.42188 11.3906C3.01562 11.7969 2.54688 12 2.01562 12C1.48438 12 1.01562 11.7969 0.609375 11.3906C0.203125 10.9844 0 10.5156 0 9.98438C0 9.45312 0.203125 9 0.609375 8.625C1.01562 8.21875 1.48438 8.01562 2.01562 8.01562C2.26562 8.01562 2.4375 8.03125 2.53125 8.0625L7.07812 3.51562C7.04688 3.42188 7.03125 3.25 7.03125 3C7.03125 2.46875 7.21875 2 7.59375 1.59375C8 1.1875 8.46875 0.984375 9 0.984375C9.53125 0.984375 10 1.1875 10.4062 1.59375C10.8125 2 11.0156 2.46875 11.0156 3C11.0156 3.25 11 3.42188 10.9688 3.51562L13.5 6.04688C13.5938 6.01562 13.7656 6 14.0156 6C14.2656 6 14.4375 6.01562 14.5312 6.04688L18.0938 2.53125C18.0312 2.34375 18 2.17188 18 2.01562C18 1.48438 18.2031 1.01562 18.6094 0.609375C19.0156 0.203125 19.4844 0 20.0156 0C20.5469 0 21.0156 0.203125 21.4219 0.609375Z",
    fill: "url(#paint6_linear)"
  }), TimeLineIcon_jsx("defs", null, TimeLineIcon_jsx("linearGradient", {
    id: "paint6_linear",
    x1: "-1.34144e-06",
    y1: "7",
    x2: "6.43707",
    y2: "-2.93604",
    gradientUnits: "userSpaceOnUse"
  }, TimeLineIcon_jsx("stop", {
    stopColor: "#4e4e4e"
  }), TimeLineIcon_jsx("stop", {
    offset: "1",
    stopColor: "#4e4e4e"
  }))));
};
// EXTERNAL MODULE: ./src/components/elements/icons/ShoppingIcon.tsx
var ShoppingIcon = __webpack_require__("vYFU");

// EXTERNAL MODULE: ./src/components/elements/icons/SettingsIcon.tsx
var SettingsIcon = __webpack_require__("2TXB");

// CONCATENATED MODULE: ./src/components/elements/icons/PowerIcon.tsx
var PowerIcon_jsx = external_react_default.a.createElement;

const PowerIcon = () => {
  return PowerIcon_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, PowerIcon_jsx("path", {
    d: "M13.1667 1.91667C15.0556 3.52778 16 5.55556 16 8C16 10.2222 15.2222 12.1111 13.6667 13.6667C12.1111 15.2222 10.2222 16 8 16C5.77778 16 3.88889 15.2222 2.33333 13.6667C0.777778 12.1111 0 10.2222 0 8C0 5.55556 0.944444 3.52778 2.83333 1.91667L4.08333 3.16667C2.55556 4.41667 1.79167 6.02778 1.79167 8C1.79167 9.72222 2.38889 11.1944 3.58333 12.4167C4.80556 13.6111 6.27778 14.2083 8 14.2083C9.72222 14.2083 11.1806 13.6111 12.375 12.4167C13.5972 11.1944 14.2083 9.72222 14.2083 8C14.2083 6.02778 13.4444 4.43056 11.9167 3.20833L13.1667 1.91667ZM8.875 0V8.875H7.125V0H8.875Z",
    fill: "url(#paint11_linear)"
  }), PowerIcon_jsx("defs", null, PowerIcon_jsx("linearGradient", {
    id: "paint11_linear",
    x1: "-9.74206e-07",
    y1: "9.31147",
    x2: "9.24647",
    y2: "1.51925",
    gradientUnits: "userSpaceOnUse"
  }, PowerIcon_jsx("stop", {
    stopColor: "#4e4e4e"
  }), PowerIcon_jsx("stop", {
    offset: "1",
    stopColor: "#4e4e4e"
  }))));
};
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/components/elements/actions_menu/useStyles.js

const useStyles_useStyles = Object(styles_["makeStyles"])(() => ({
  root: {
    '& div.menu-item': {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F2F2F2',
      padding: '15px',
      borderRadius: '10px',
      marginBottom: '10px',
      '& > div': {
        marginBottom: '5px',
        '& button': {
          padding: '10px 0',
          borderRadius: '5px',
          background: '#fff',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
          border: '1px solid transparent',
          backgroundClip: 'padding-box',
          '& > svg': {
            marginRight: '10px'
          },
          '&.selected': {
            border: '1px solid #AD66D5',
            borderRadius: '5px',
            // borderStyle: 'inset',
            // borderImageSlice: '1',
            // borderImageSource:
            //     'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
            '& > h6.MuiTypography-subtitle1': {
              backgroundImage: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            },
            '& svg': {
              '& > defs > linearGradient > stop': {
                '&:first-child': {
                  stopColor: '#675EAA'
                },
                '&:last-child': {
                  stopColor: '#AD66D5'
                }
              }
            }
          }
        }
      },
      '& > div:last-child': {
        display: 'flex',
        marginBottom: '0',
        justifyContent: 'space-between',
        '& > span.MuiBadge-root': {
          width: '49%',
          marginRight: '5px',
          '& span.MuiBadge-badge': {
            top: '5px',
            right: '5px',
            minWidth: '16px',
            height: '16px',
            padding: 0,
            fontWeight: 600
          }
        },
        '& > button:first-child': {
          marginRight: '5px'
        }
      }
    },
    '& div.menu-item:nth-child(3)': {
      '& > div': {
        '& button': {
          marginRight: '0px !important'
        }
      }
    },
    '& > div.menu-item:last-child': {
      margin: '0'
    }
  }
}));
// CONCATENATED MODULE: ./src/components/elements/actions_menu/ActionsMenu.tsx
var ActionsMenu_jsx = external_react_default.a.createElement;




















const ActionsMenu = props => {
  const {
    pathname
  } = Object(router_["useRouter"])();
  const {
    t
  } = props;

  const onButtonClick = url => () => {
    i18n["b" /* Router */].push(`/cabinet/${url}`);
  };

  const classes = useStyles_useStyles();
  return ActionsMenu_jsx("div", {
    className: classes.root
  }, ActionsMenu_jsx("div", {
    className: "menu-item"
  }, ActionsMenu_jsx("div", null, ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/myAncmnts' ? 'selected' : '',
    onClick: onButtonClick('myAncmnts')
  }, ActionsMenu_jsx(NotesIcon["a" /* NotesIcon */], null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:myAncmnts')))), ActionsMenu_jsx("div", null, ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/myLots' ? 'selected' : '',
    onClick: onButtonClick('myLots')
  }, ActionsMenu_jsx(GavelIcon["a" /* GavelIcon */], null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:myLots')))), ActionsMenu_jsx("div", null, ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/favorite' ? 'selected' : '',
    onClick: onButtonClick('favorite')
  }, ActionsMenu_jsx(FavoriteBorderIcon["a" /* FavoriteBorderIcon */], null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:favourite')))), ActionsMenu_jsx("div", null, ActionsMenu_jsx(core_["Badge"], {
    badgeContent: 4,
    color: "secondary"
  }, ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/myOrders' ? 'selected' : ''
  }, ActionsMenu_jsx(ShoppingIcon["a" /* ShoppingIcon */], null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:myOrders')))), ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/archive' ? 'selected' : '',
    onClick: onButtonClick('archive')
  }, ActionsMenu_jsx(ArchiveIcon, null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:adsArchive'))))), ActionsMenu_jsx("div", {
    className: "menu-item"
  }, ActionsMenu_jsx("div", null, ActionsMenu_jsx(CustomBadge, {
    badgeContent: 4,
    color: "secondary"
  }, ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/notifications' ? 'selected' : '',
    onClick: onButtonClick('notifications')
  }, ActionsMenu_jsx(NotificationIcon, null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:notifications')))), ActionsMenu_jsx(core_["Badge"], {
    badgeContent: 8,
    color: "secondary"
  }, ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/messages' ? 'selected' : '',
    onClick: onButtonClick('messages')
  }, ActionsMenu_jsx(LetterIcon, null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:messages')))))), ActionsMenu_jsx("div", {
    className: "menu-item"
  }, ActionsMenu_jsx("div", null, ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/safetyDeal' ? 'selected' : '',
    onClick: onButtonClick('safetyDeal')
  }, ActionsMenu_jsx(SafeIcon["a" /* SafeIcon */], null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:safeShopping'))))), ActionsMenu_jsx("div", {
    className: "menu-item"
  }, ActionsMenu_jsx("div", null, ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/paidServices' ? 'selected' : ''
  }, ActionsMenu_jsx(WalletIcon, null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:paidServices')))), ActionsMenu_jsx("div", null, ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/statistics' ? 'selected' : ''
  }, ActionsMenu_jsx(TimeLineIcon, null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:statistics'))), ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/rating' ? 'selected' : '',
    onClick: onButtonClick('rating')
  }, ActionsMenu_jsx(SortIcon, null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:rating'))))), ActionsMenu_jsx("div", {
    className: "menu-item"
  }, ActionsMenu_jsx("div", null, ActionsMenu_jsx(Button["a" /* ButtonComponent */] // className={pathname === '/cabinet/settings' ? 'selected' : ''}
  // onClick={onButtonClick('settings')}
  , null, ActionsMenu_jsx(SettingsIcon["a" /* SettingsIcon */], null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:settings'))), ActionsMenu_jsx(Button["a" /* ButtonComponent */], {
    className: pathname === '/cabinet/exit' ? 'selected' : ''
  }, ActionsMenu_jsx(PowerIcon, null), ActionsMenu_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, t('cabinet:exit'))))));
};
// CONCATENATED MODULE: ./src/components/cabinet/cabinet_sidebar/useStyles.js

const cabinet_sidebar_useStyles_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    '& div.user-menu-wrapper': {
      '& > div': {
        marginBottom: '10px'
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/cabinet/cabinet_pages/user_social_info/useStyles.js

const user_social_info_useStyles_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    '& > div.menu-item-subscribe': {
      display: 'flex',
      backgroundColor: '#F2F2F2',
      justifyContent: 'space-around',
      padding: '19px 0 14px 0',
      borderRadius: '10px',
      '& > div': {
        textAlign: 'center',
        '& > div > h6.MuiTypography-subtitle1': {
          color: '#4E4E4E',
          cursor: 'pointer'
        },
        '& > div:first-child > h6.MuiTypography-h6': {
          textAlign: 'center',
          fontWeight: '600',
          backgroundImage: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        },
        '&.selected > div:last-child > h6.MuiTypography-subtitle1': {
          borderBottom: '1px solid #9864C9',
          backgroundImage: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        },
        '&:hover': {
          cursor: 'pointer'
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/cabinet/cabinet_pages/user_social_info/UserSocialInfo.tsx
var UserSocialInfo_jsx = external_react_default.a.createElement;



 // styles


const UserSocialInfo = props => {
  const {
    pathname
  } = Object(router_["useRouter"])();

  const onButtonClick = url => () => {
    i18n["b" /* Router */].push(`/cabinet/${url}`);
  };

  const classes = user_social_info_useStyles_useStyles();
  return UserSocialInfo_jsx("div", {
    className: classes.root
  }, UserSocialInfo_jsx("div", {
    className: "menu-item-subscribe"
  }, UserSocialInfo_jsx("div", null, UserSocialInfo_jsx("div", null, UserSocialInfo_jsx(core_["Typography"], {
    variant: "h6",
    color: "initial"
  }, "13")), UserSocialInfo_jsx("div", null, UserSocialInfo_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, props.t('cabinet:reviews')))), UserSocialInfo_jsx("div", {
    onClick: onButtonClick('subscribe'),
    className: pathname === '/cabinet/subscribe' ? 'selected' : ''
  }, UserSocialInfo_jsx("div", null, UserSocialInfo_jsx(core_["Typography"], {
    variant: "h6",
    color: "initial"
  }, "2")), UserSocialInfo_jsx("div", null, UserSocialInfo_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, props.t('cabinet:subscribers')))), UserSocialInfo_jsx("div", null, UserSocialInfo_jsx("div", null, UserSocialInfo_jsx(core_["Typography"], {
    variant: "h6",
    color: "initial"
  }, "9")), UserSocialInfo_jsx("div", null, UserSocialInfo_jsx(core_["Typography"], {
    variant: "subtitle1"
  }, props.t('cabinet:subscriptions'))))));
};
// CONCATENATED MODULE: ./src/components/cabinet/cabinet_sidebar/CabinetSidebar.tsx
var CabinetSidebar_jsx = external_react_default.a.createElement;






const CabinetSidebar = props => {
  const {
    t
  } = props;
  const classes = cabinet_sidebar_useStyles_useStyles();
  return CabinetSidebar_jsx("div", {
    className: classes.root
  }, CabinetSidebar_jsx(core_["Grid"], {
    item: true,
    xs: 12,
    className: "user-menu-wrapper"
  }, CabinetSidebar_jsx(UserInfoWithAvatar["a" /* UserInfoWithAvatar */], {
    cabinet: true
  }), CabinetSidebar_jsx(UserSocialInfo, {
    t: t
  }), CabinetSidebar_jsx(ActionsMenu, props)));
};
// CONCATENATED MODULE: ./src/components/cabinet/useStyles.js

const cabinet_useStyles_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    '& h6.menu-title': {
      fontWeight: '600',
      margin: '0 0 30px 30px'
    },
    '& div.MuiTabs-root': {
      '& > div > div': {
        '& > button': {
          borderBottom: '1px solid #838383',
          width: '100%',
          padding: '0',
          '& > span > h6.MuiTypography-subtitle1': {
            textTransform: 'uppercase'
          }
        }
      },
      '& > div > div > button.Mui-selected > span > h6.MuiTypography-subtitle1': {
        color: '#7DBCF6'
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/cabinet/CabinetMenuWrapper.tsx
var CabinetMenuWrapper_jsx = external_react_default.a.createElement;





const CabinetMenuWrapper = ({
  children,
  title,
  headerTitle,
  t
}) => {
  const classes = cabinet_useStyles_useStyles();
  return CabinetMenuWrapper_jsx(MainLayout["a" /* MainLayout */], {
    title: `Мой кабинет | ${title}`
  }, CabinetMenuWrapper_jsx("div", {
    className: classes.root
  }, CabinetMenuWrapper_jsx(core_["Grid"], {
    container: true,
    spacing: 2
  }, CabinetMenuWrapper_jsx(core_["Grid"], {
    item: true,
    xs: 3
  }, CabinetMenuWrapper_jsx(CabinetSidebar, {
    t: t
  })), CabinetMenuWrapper_jsx(core_["Grid"], {
    item: true,
    xs: 9
  }, CabinetMenuWrapper_jsx(core_["Typography"], {
    variant: "h6",
    className: "menu-title"
  }, headerTitle), children))));
};

/***/ }),

/***/ "adR5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NotesIcon = () => {
  return __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M12.8075 4.80751V3.19249H6.38498V4.80751H12.8075ZM12.8075 7.21127V5.59624H6.38498V7.21127H12.8075ZM10.4038 9.61502V8H6.38498V9.61502H10.4038ZM4.80751 4.80751V3.19249H3.19249V4.80751H4.80751ZM4.80751 7.21127V5.59624H3.19249V7.21127H4.80751ZM4.80751 9.61502V8H3.19249V9.61502H4.80751ZM14.4225 0C14.8482 0 15.2113 0.162754 15.5117 0.488263C15.8372 0.788732 16 1.1518 16 1.57746V11.1925C16 11.6182 15.8372 11.9937 15.5117 12.3192C15.2113 12.6448 14.8482 12.8075 14.4225 12.8075H3.19249L0 16V1.57746C0 1.1518 0.150235 0.788732 0.450704 0.488263C0.776213 0.162754 1.1518 0 1.57746 0H14.4225Z",
    fill: "url(#paint2_linear)"
  }), __jsx("defs", null, __jsx("linearGradient", {
    id: "paint2_linear",
    x1: "-9.74206e-07",
    y1: "9.33333",
    x2: "9.26447",
    y2: "1.54422",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#4E4E4E"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4E4E4E"
  }))));
};

/***/ }),

/***/ "b0ys":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Footer; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/components/elements/socials_block/useStyles.js

const useStyles = Object(styles_["makeStyles"])(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > h6.MuiTypography-subtitle1': {
      fontWeight: 600,
      marginBottom: '10px'
    },
    '& div': {
      '& > a': {
        marginRight: '20px',
        '&:last-child': {
          margin: 0
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/elements/icons/social_icons/FacebookIcon.tsx
var __jsx = external_react_default.a.createElement;

const FacebookIcon = () => {
  return __jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z",
    fill: "#3B5998"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.6676 25.4077V16.7028H20.0706L20.389 13.7031H17.6676L17.6717 12.2017C17.6717 11.4193 17.7461 11.0001 18.8698 11.0001H20.372V8H17.9687C15.082 8 14.066 9.4552 14.066 11.9024V13.7034H12.2666V16.7031H14.066V25.4077H17.6676Z",
    fill: "white"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/social_icons/InstagramIcon.tsx
var InstagramIcon_jsx = external_react_default.a.createElement;

const InstagramIcon = () => {
  return InstagramIcon_jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, InstagramIcon_jsx("rect", {
    width: "32",
    height: "32",
    rx: "16",
    fill: "#262626"
  }), InstagramIcon_jsx("path", {
    d: "M12.6672 16C12.6672 14.1591 14.1591 12.6664 16 12.6664C17.8409 12.6664 19.3336 14.1591 19.3336 16C19.3336 17.8409 17.8409 19.3336 16 19.3336C14.1591 19.3336 12.6672 17.8409 12.6672 16ZM10.8651 16C10.8651 18.836 13.164 21.1349 16 21.1349C18.836 21.1349 21.1349 18.836 21.1349 16C21.1349 13.164 18.836 10.8651 16 10.8651C13.164 10.8651 10.8651 13.164 10.8651 16ZM20.1382 10.6615C20.1381 10.8989 20.2084 11.1309 20.3401 11.3283C20.4719 11.5257 20.6593 11.6796 20.8785 11.7705C21.0977 11.8614 21.339 11.8852 21.5718 11.839C21.8046 11.7928 22.0185 11.6786 22.1863 11.5109C22.3542 11.3431 22.4686 11.1293 22.515 10.8966C22.5614 10.6638 22.5377 10.4225 22.447 10.2032C22.3563 9.98392 22.2025 9.79644 22.0052 9.6645C21.808 9.53257 21.576 9.4621 21.3386 9.462H21.3382C21.02 9.46215 20.715 9.58856 20.49 9.81347C20.265 10.0384 20.1384 10.3434 20.1382 10.6615ZM11.96 24.1398C10.985 24.0954 10.4551 23.933 10.103 23.7958C9.63608 23.614 9.30296 23.3975 8.95272 23.0478C8.60248 22.698 8.38568 22.3652 8.20472 21.8983C8.06744 21.5463 7.90504 21.0162 7.86072 20.0413C7.81224 18.9872 7.80256 18.6706 7.80256 16.0001C7.80256 13.3296 7.81304 13.0138 7.86072 11.9589C7.90512 10.9839 8.06872 10.4549 8.20472 10.1018C8.38648 9.63496 8.60296 9.30184 8.95272 8.9516C9.30248 8.60136 9.63528 8.38456 10.103 8.2036C10.455 8.06632 10.985 7.90392 11.96 7.8596C13.0141 7.81112 13.3307 7.80144 16 7.80144C18.6693 7.80144 18.9862 7.81192 20.0412 7.8596C21.0162 7.904 21.5452 8.0676 21.8982 8.2036C22.3651 8.38456 22.6982 8.60184 23.0485 8.9516C23.3987 9.30136 23.6147 9.63496 23.7965 10.1018C23.9338 10.4538 24.0962 10.9839 24.1405 11.9589C24.189 13.0138 24.1986 13.3296 24.1986 16.0001C24.1986 18.6706 24.189 18.9863 24.1405 20.0413C24.0961 21.0162 23.9329 21.5462 23.7965 21.8983C23.6147 22.3652 23.3982 22.6983 23.0485 23.0478C22.6987 23.3972 22.3651 23.614 21.8982 23.7958C21.5462 23.933 21.0162 24.0954 20.0412 24.1398C18.9871 24.1882 18.6705 24.1979 16 24.1979C13.3295 24.1979 13.0138 24.1882 11.96 24.1398ZM11.8772 6.06056C10.8126 6.10904 10.0852 6.27784 9.44992 6.52504C8.792 6.78032 8.23504 7.1228 7.67848 7.67848C7.12192 8.23416 6.78032 8.792 6.52504 9.44992C6.27784 10.0856 6.10904 10.8126 6.06056 11.8772C6.01128 12.9434 6 13.2843 6 16C6 18.7157 6.01128 19.0566 6.06056 20.1228C6.10904 21.1874 6.27784 21.9144 6.52504 22.5501C6.78032 23.2076 7.122 23.7661 7.67848 24.3215C8.23496 24.877 8.792 25.219 9.44992 25.475C10.0864 25.7222 10.8126 25.891 11.8772 25.9394C12.944 25.9879 13.2843 26 16 26C18.7157 26 19.0566 25.9887 20.1228 25.9394C21.1874 25.891 21.9144 25.7222 22.5501 25.475C23.2076 25.219 23.765 24.8772 24.3215 24.3215C24.8781 23.7658 25.219 23.2076 25.475 22.5501C25.7222 21.9144 25.8918 21.1874 25.9394 20.1228C25.9879 19.0558 25.9992 18.7157 25.9992 16C25.9992 13.2843 25.9879 12.9434 25.9394 11.8772C25.891 10.8126 25.7222 10.0852 25.475 9.44992C25.219 8.7924 24.8772 8.23504 24.3215 7.67848C23.7658 7.12192 23.2076 6.78032 22.5509 6.52504C21.9144 6.27784 21.1874 6.10824 20.1236 6.06056C19.0574 6.01208 18.7165 6 16.0008 6C13.2851 6 12.944 6.01128 11.8772 6.06056Z",
    fill: "white"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/social_icons/YoutubeIcon.tsx
var YoutubeIcon_jsx = external_react_default.a.createElement;

const YoutubeIcon = () => {
  return YoutubeIcon_jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, YoutubeIcon_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z",
    fill: "#FF0000"
  }), YoutubeIcon_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.1768 12.0489C23.9805 11.2949 23.4022 10.7012 22.6679 10.4996C21.3371 10.1334 16.0001 10.1334 16.0001 10.1334C16.0001 10.1334 10.6632 10.1334 9.3323 10.4996C8.59795 10.7012 8.01962 11.2949 7.82335 12.0489C7.4668 13.4154 7.4668 16.2668 7.4668 16.2668C7.4668 16.2668 7.4668 19.118 7.82335 20.4846C8.01962 21.2386 8.59795 21.8324 9.3323 22.034C10.6632 22.4001 16.0001 22.4001 16.0001 22.4001C16.0001 22.4001 21.3371 22.4001 22.6679 22.034C23.4022 21.8324 23.9805 21.2386 24.1768 20.4846C24.5335 19.118 24.5335 16.2668 24.5335 16.2668C24.5335 16.2668 24.5335 13.4154 24.1768 12.0489Z",
    fill: "white"
  }), YoutubeIcon_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.3999 19.2V13.8667L18.6666 16.5335L14.3999 19.2Z",
    fill: "#FF0000"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/social_icons/TelegramIcon.tsx
var TelegramIcon_jsx = external_react_default.a.createElement;

const TelegramIcon = () => {
  return TelegramIcon_jsx("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, TelegramIcon_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",
    fill: "url(#paint5423_linear)"
  }), TelegramIcon_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.0669 23.3333C12.5486 23.3333 12.6367 23.1376 12.4579 22.644L10.9336 17.6274L22.6669 10.6666",
    fill: "#C8DAEA"
  }), TelegramIcon_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.0669 23.3333C13.4669 23.3333 13.6436 23.1504 13.8669 22.9333L16.0002 20.8589L13.3392 19.2543",
    fill: "#A9C9DD"
  }), TelegramIcon_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.3386 19.2547L19.7866 24.0185C20.5224 24.4245 21.0535 24.2143 21.2368 23.3354L23.8614 10.967C24.1301 9.88963 23.4507 9.40099 22.7468 9.72056L7.33484 15.6634C6.28283 16.0853 6.28896 16.6722 7.14308 16.9338L11.0981 18.1682L20.2545 12.3915C20.6868 12.1294 21.0835 12.2703 20.7579 12.5593",
    fill: "url(#paint43534_linear)"
  }), TelegramIcon_jsx("defs", null, TelegramIcon_jsx("linearGradient", {
    id: "paint5423_linear",
    x1: "12.0016",
    y1: "1.3344",
    x2: "4.0016",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, TelegramIcon_jsx("stop", {
    stopColor: "#37AEE2"
  }), TelegramIcon_jsx("stop", {
    offset: "1",
    stopColor: "#1E96C8"
  })), TelegramIcon_jsx("linearGradient", {
    id: "paint43534_linear",
    x1: "13.997",
    y1: "16.9828",
    x2: "15.7066",
    y2: "22.5128",
    gradientUnits: "userSpaceOnUse"
  }, TelegramIcon_jsx("stop", {
    stopColor: "#EFF7FC"
  }), TelegramIcon_jsx("stop", {
    offset: "1",
    stopColor: "white"
  }))));
};
// EXTERNAL MODULE: ./i18n.tsx
var i18n = __webpack_require__("gUPn");

// CONCATENATED MODULE: ./src/components/elements/socials_block/SocialsBlock.tsx
var SocialsBlock_jsx = external_react_default.a.createElement;

 // styles







const SocialsBlock = props => {
  const classes = useStyles();
  return SocialsBlock_jsx("div", {
    className: classes.root
  }, props.footer ? null : SocialsBlock_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u041C\u044B \u0432 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u044F\u0445:"), SocialsBlock_jsx("div", null, SocialsBlock_jsx(i18n["a" /* Link */], {
    href: "#"
  }, SocialsBlock_jsx("a", null, SocialsBlock_jsx(FacebookIcon, null))), SocialsBlock_jsx(i18n["a" /* Link */], {
    href: "#"
  }, SocialsBlock_jsx("a", null, SocialsBlock_jsx(InstagramIcon, null))), SocialsBlock_jsx(i18n["a" /* Link */], {
    href: "#"
  }, SocialsBlock_jsx("a", null, SocialsBlock_jsx(YoutubeIcon, null))), SocialsBlock_jsx(i18n["a" /* Link */], {
    href: "#"
  }, SocialsBlock_jsx("a", null, SocialsBlock_jsx(TelegramIcon, null)))));
};
// EXTERNAL MODULE: ./src/components/elements/icons/logo/Logo.tsx
var Logo = __webpack_require__("zgiF");

// CONCATENATED MODULE: ./src/components/footer/useStyles.js

const useStyles_useStyles = Object(styles_["makeStyles"])(() => ({
  root: {
    paddingTop: '60px',
    '& > div.footer-wrapper': {
      backgroundColor: '#F2F2F2',
      borderRadius: '100px 100px 0px 0px',
      '& div.footer-content': {
        padding: '60px 0',
        '& > div': {
          '&.footer-top': {
            paddingBottom: 90,
            mixBlendMode: 'normal'
          },
          '& > div > ul': {
            padding: 0,
            margin: 0,
            listStyle: 'none',
            '& > li': {
              marginBottom: 20,
              '&:last-child': {
                marginBottom: 0
              },
              '& > a': {
                textDecoration: 'none',
                '& > h6.MuiTypography-subtitle1': {}
              }
            }
          },
          '& div.social-icons': {
            '& > div': {
              margin: 0,
              width: 'auto'
            }
          }
        }
      },
      '& div.footer-bottom': {
        position: 'relative',
        display: 'flex',
        paddingTop: '25px',
        '& div': {
          '& h6.MuiTypography-subtitle1': {
            fontSize: '12px',
            textAlign: 'center'
          }
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '90%',
          height: 2,
          background: '#E0E0E0',
          borderRadius: '1px',
          top: 0,
          left: '50px'
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./src/components/footer/Footer.tsx
var Footer_jsx = external_react_default.a.createElement;






const Footer = () => {
  const {
    t
  } = Object(i18n["e" /* useTranslation */])(['footer']);
  const classes = useStyles_useStyles();
  return Footer_jsx("footer", {
    className: classes.root
  }, Footer_jsx("div", {
    className: "footer-wrapper"
  }, Footer_jsx(core_["Container"], {
    maxWidth: "xl"
  }, Footer_jsx(core_["Grid"], {
    container: true,
    className: "footer-content",
    justify: "center"
  }, Footer_jsx(core_["Grid"], {
    container: true,
    className: "footer-top"
  }, Footer_jsx(core_["Grid"], {
    item: true,
    xs: 3,
    container: true,
    justify: "center"
  }, Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, t('aboutSlondo'))))), Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u041F\u043E\u043C\u043E\u0449\u044C")))), Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C")))), Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u043E Slondo")))))), Footer_jsx(core_["Grid"], {
    item: true,
    xs: 3,
    container: true,
    justify: "center"
  }, Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C")))), Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u041A\u0430\u043A \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")))), Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0430")))), Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430")))))), Footer_jsx(core_["Grid"], {
    item: true,
    xs: 3,
    container: true,
    justify: "center"
  }, Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u0410\u043A\u0446\u0438\u0438")))), Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u0411\u043E\u043D\u0443\u0441\u044B")))), Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0430\u0443\u043A\u0446\u0438\u043E\u043D\u0430")))), Footer_jsx("li", null, Footer_jsx(i18n["a" /* Link */], {
    href: "#"
  }, Footer_jsx("a", null, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435")))))), Footer_jsx(core_["Grid"], {
    item: true,
    xs: 3,
    container: true
  }, Footer_jsx("div", {
    className: "social-icons"
  }, Footer_jsx(SocialsBlock, {
    footer: true
  })))), Footer_jsx("div", {
    className: "footer-bottom"
  }, Footer_jsx(core_["Grid"], {
    item: true,
    xs: 3,
    container: true,
    justify: "center",
    alignItems: "center"
  }, Footer_jsx(Logo["a" /* Logo */], null)), Footer_jsx(core_["Grid"], {
    item: true,
    xs: 6,
    container: true,
    justify: "center",
    alignItems: "center"
  }, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F. \u0426\u0438\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435 \u043D\u0430 slondo.uz \u0438 \u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0433\u0438\u043F\u0435\u0440\u0441\u0441\u044B\u043B\u043A\u043E\u0439.")), Footer_jsx(core_["Grid"], {
    item: true,
    xs: 3,
    container: true,
    justify: "center",
    alignItems: "center"
  }, Footer_jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "initial"
  }, "Copyright \xA9 2020 Slondo.")))))));
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "e/ez":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwapIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SwapIcon = () => {
  return __jsx("svg", {
    width: "13",
    height: "15",
    viewBox: "0 0 13 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.71094 6.55359H9.24896V9.8589C9.24896 9.99951 9.1359 10.1143 8.99784 10.1143H3.96213C3.82407 10.1143 3.71094 9.99951 3.71094 9.8589V6.55359Z",
    fill: "#838383"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.06934 6.46971H9.86577L9.23156 4.87042H3.75077L3.06934 6.46971Z",
    fill: "#838383"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.5 0.776367C7.72531 0.776367 8.87133 1.12134 9.84956 1.72061L9.33643 2.61515C8.50715 2.10715 7.53487 1.81473 6.49515 1.81473C3.45791 1.81473 0.995739 4.30937 0.995739 7.38677C0.995739 8.55706 1.35212 9.64296 1.96058 10.5395L1.96007 10.5394L1.96331 10.5435C1.97677 10.5633 1.99008 10.5831 2.00384 10.6027C2.07474 10.7176 2.19295 10.9709 2.04532 11.2111C1.84613 11.5349 1.50402 11.4373 1.37044 11.3873C1.3369 11.3747 1.29526 11.3358 1.25186 11.2847C0.464879 10.1917 0 8.84381 0 7.38543C0 3.73536 2.91013 0.776367 6.5 0.776367ZM3.782 12.2343C4.58267 12.6952 5.50845 12.9587 6.49515 12.9587C9.53238 12.9587 11.9946 10.4641 11.9946 7.38677C11.9946 6.18135 11.6168 5.0654 10.9746 4.15374H10.9748C10.9748 4.15374 10.7503 3.82207 10.8183 3.54348C10.8862 3.26488 11.2377 3.1387 11.4767 3.25061C11.571 3.29478 11.6556 3.37312 11.7235 3.45176C12.5255 4.55081 13 5.91172 13 7.38543C13 11.0355 10.0899 13.9945 6.5 13.9945C5.36149 13.9945 4.29153 13.6965 3.36089 13.1736L3.782 12.2343Z",
    fill: "#838383"
  }), __jsx("path", {
    d: "M4.10897 11.5957L3.61931 11.6831C2.88652 11.8139 2.33222 12.1499 2.38124 12.4335C2.43027 12.7172 3.06405 12.8412 3.79683 12.7104L4.28649 12.623C5.01928 12.4922 5.57358 12.1562 5.52455 11.8726C5.47553 11.5889 4.84175 11.4649 4.10897 11.5957Z",
    fill: "#838383"
  }), __jsx("path", {
    d: "M3.95163 13.3033L3.72104 12.8557C3.37594 12.1859 2.89265 11.7512 2.64157 11.8848C2.39049 12.0184 2.4667 12.6696 2.81179 13.3395L3.04239 13.7871C3.38748 14.4569 3.87078 14.8916 4.12186 14.758C4.37294 14.6244 4.29673 13.9731 3.95163 13.3033Z",
    fill: "#838383"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.29521 1.93071L9.07112 1.47972C8.73577 0.804809 8.66901 0.152448 8.92199 0.0226307C9.17498 -0.107186 9.65192 0.3347 9.98727 1.00961L10.2114 1.4606C10.3355 1.71052 10.4229 1.95735 10.4708 2.17569C10.5606 2.22872 10.6165 2.29505 10.6287 2.3726C10.6427 2.4613 10.598 2.5542 10.5075 2.6437C10.4909 2.77859 10.4425 2.8756 10.3605 2.91769C10.2892 2.95427 10.2001 2.94546 10.1015 2.89883C9.89943 2.98733 9.65169 3.0601 9.37992 3.10442L8.88905 3.18447C8.15445 3.30428 7.52253 3.17087 7.47762 2.8865C7.43272 2.60213 7.99182 2.27448 8.72642 2.15468L9.21729 2.07463C9.26522 2.06681 9.31271 2.06007 9.35963 2.05438C9.33766 2.01412 9.31616 1.97287 9.29521 1.93071Z",
    fill: "#838383"
  }));
};

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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "iLat":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteBorderIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FavoriteBorderIcon = props => {
  return __jsx("svg", {
    width: "16",
    height: "15",
    viewBox: "0 0 16 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M8.07512 12.4695C9.277 11.3928 10.1659 10.579 10.7418 10.0282C11.3177 9.47731 11.9437 8.82629 12.6197 8.07512C13.2958 7.32394 13.759 6.66041 14.0094 6.08451C14.2848 5.50861 14.4225 4.94523 14.4225 4.39437C14.4225 3.59311 14.1471 2.92958 13.5962 2.40376C13.0704 1.87793 12.4069 1.61502 11.6056 1.61502C10.9797 1.61502 10.3912 1.7903 9.84038 2.14085C9.31455 2.49139 8.95149 2.9421 8.75117 3.49296H7.24883C7.04851 2.9421 6.67293 2.49139 6.12207 2.14085C5.59624 1.7903 5.02034 1.61502 4.39437 1.61502C3.59311 1.61502 2.91706 1.87793 2.3662 2.40376C1.84038 2.92958 1.57746 3.59311 1.57746 4.39437C1.57746 4.94523 1.70266 5.50861 1.95305 6.08451C2.22848 6.66041 2.70423 7.32394 3.38028 8.07512C4.05634 8.82629 4.68232 9.47731 5.25822 10.0282C5.83412 10.579 6.723 11.3928 7.92488 12.4695L8 12.5446L8.07512 12.4695ZM11.6056 0C12.8576 0 13.8967 0.425665 14.723 1.277C15.5743 2.12833 16 3.16745 16 4.39437C16 5.1205 15.8623 5.83412 15.5869 6.53521C15.3114 7.21127 14.7981 7.97496 14.0469 8.82629C13.3208 9.67762 12.6573 10.3912 12.0563 10.9671C11.4554 11.543 10.4914 12.4319 9.16432 13.6338L8 14.6854L6.83568 13.6714C5.10798 12.1189 3.85602 10.9546 3.07981 10.1784C2.32864 9.40219 1.62754 8.48826 0.976526 7.43662C0.325509 6.38498 0 5.37089 0 4.39437C0 3.16745 0.413146 2.12833 1.23944 1.277C2.09077 0.425665 3.14241 0 4.39437 0C5.84664 0 7.04851 0.56338 8 1.69014C8.95149 0.56338 10.1534 0 11.6056 0Z",
    fill: "url(#paint344_linear)"
  }), __jsx("defs", null, __jsx("linearGradient", {
    id: "paint344_linear",
    x1: "-9.74206e-07",
    y1: "9.33333",
    x2: "9.26447",
    y2: "1.54422",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#4e4e4e"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4e4e4e"
  }))));
};

/***/ }),

/***/ "iOOT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LocationIcon = () => {
  return __jsx("svg", {
    width: "27",
    height: "26",
    viewBox: "0 0 27 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 22L26.7384 17.0301H1L14 22Z",
    fill: "url(#paint21_linear)"
  }), __jsx("path", {
    d: "M12.2031 9.76562C12.7031 10.2344 13.2969 10.4688 13.9844 10.4688C14.6719 10.4688 15.25 10.2344 15.7188 9.76562C16.2188 9.26562 16.4688 8.67188 16.4688 7.98438C16.4688 7.29688 16.2188 6.71875 15.7188 6.25C15.25 5.75 14.6719 5.5 13.9844 5.5C13.2969 5.5 12.7031 5.75 12.2031 6.25C11.7344 6.71875 11.5 7.29688 11.5 7.98438C11.5 8.67188 11.7344 9.26562 12.2031 9.76562ZM9.01562 3.0625C10.3906 1.6875 12.0469 1 13.9844 1C15.9219 1 17.5625 1.6875 18.9062 3.0625C20.2812 4.40625 20.9688 6.04688 20.9688 7.98438C20.9688 8.95312 20.7188 10.0625 20.2188 11.3125C19.75 12.5625 19.1719 13.7344 18.4844 14.8281C17.7969 15.9219 17.1094 16.9531 16.4219 17.9219C15.7656 18.8594 15.2031 19.6094 14.7344 20.1719L13.9844 20.9688C13.7969 20.75 13.5469 20.4688 13.2344 20.125C12.9219 19.75 12.3594 19.0312 11.5469 17.9688C10.7344 16.875 10.0156 15.8281 9.39062 14.8281C8.79688 13.7969 8.25 12.6406 7.75 11.3594C7.25 10.0781 7 8.95312 7 7.98438C7 6.04688 7.67188 4.40625 9.01562 3.0625Z",
    fill: "url(#paint20_linear)"
  }), __jsx("defs", null, __jsx("linearGradient", {
    id: "paint21_linear",
    x1: "13.8691",
    y1: "22.3454",
    x2: "13.8691",
    y2: "17.0301",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#AD66D5"
  }), __jsx("stop", {
    offset: "0.0117647",
    stopColor: "#C492E0"
  }), __jsx("stop", {
    offset: "0.258824",
    stopColor: "#DFC4EE"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#FEFEFE"
  })), __jsx("linearGradient", {
    id: "paint20_linear",
    x1: "7",
    y1: "12.6484",
    x2: "17.2576",
    y2: "6.61565",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#675EAA"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#AD66D5"
  }))));
};

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

/***/ "myQD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "y", function() { return /* binding */ icons_SearchIcon; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* binding */ FilterIcon; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* binding */ SafeBuyingIcon; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AdvertisementIcon; });
__webpack_require__.d(__webpack_exports__, "E", function() { return /* binding */ TorgIcon; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* binding */ RatingIcon; });
__webpack_require__.d(__webpack_exports__, "F", function() { return /* binding */ UserAvatar; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ Bonus_icon; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ Auto_icon; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ PrevArrowIcon; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ BusinessIcon; });
__webpack_require__.d(__webpack_exports__, "A", function() { return /* reexport */ StoreIcon; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ QuestionIcon; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ LocationIcon["a" /* LocationIcon */]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ FavoriteIcon; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ FavoriteBorderIcon["a" /* FavoriteBorderIcon */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ DeliveryIcon["a" /* DeliveryIcon */]; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ SafeIcon["a" /* SafeIcon */]; });
__webpack_require__.d(__webpack_exports__, "D", function() { return /* reexport */ SwapIcon["a" /* SwapIcon */]; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ LockIcon; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ MegaphoneIcon; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ PromoteIcon; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ DoubleUpIcon; });
__webpack_require__.d(__webpack_exports__, "z", function() { return /* reexport */ SettingsIcon["a" /* SettingsIcon */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ EyeIcon; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ DoneAllIcon; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ CloseIcon; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ CameraIcon; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ Logo["a" /* Logo */]; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ PhoneIcon["a" /* PhoneIcon */]; });
__webpack_require__.d(__webpack_exports__, "C", function() { return /* reexport */ SurpriseIcon; });
__webpack_require__.d(__webpack_exports__, "B", function() { return /* reexport */ SubstractIcon; });

// UNUSED EXPORTS: Facebook, Instagram, Youtube, Twitter, Whatsapp, Telegram, PlIcon, CategoryIcon, SignIcon, AddIcon, Electronica, KrasotaZdorovye, Mebel, TelefonPlanshet, KompTexnika, JenskiyGarderob, UslugiOptom, OtdixOptom, DownArrowIcon, RightArrow, SafeBuyingIcon2, BackSpaceArrow, ShareIcon, DownArrow, HeartIcon, ComplainIcon, StarIcon, FullscreenIcon, FullscreenIcon2, Subscribe_icon, SpeakerNotes_icon, Auto_view_icon, Wheel_icon, Info_icon, ButtonCloseIcon, RaiseToTopIcon, RestoreIcon, Search_icon

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/components/elements/icons/close_icon/useStyles.js

const useStyles = Object(styles_["makeStyles"])(({
  palette
}) => ({
  root: {
    padding: '10px',
    backgroundColor: palette.primary.lotBgColor,
    '& svg': {
      width: '14px',
      height: '14px'
    },
    '&:active svg > path, &:hover svg > path': {
      fill: palette.primary.black
    }
  }
}));
// CONCATENATED MODULE: ./src/components/elements/icons/close_icon/CloseIcon.tsx
var __jsx = external_react_default.a.createElement;



const ButtonCloseIcon = ({
  onClick
}) => {
  const classes = useStyles();
  return __jsx(core_["IconButton"], {
    className: classes.root,
    onClick: onClick
  }, __jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M18 1.81208L10.8121 9L18 16.1879L16.1879 18L9 10.8121L1.81208 18L0 16.1879L7.18792 9L0 1.81208L1.81208 0L9 7.18792L16.1879 0L18 1.81208Z",
    fill: "#fafafa"
  })));
};
// CONCATENATED MODULE: ./src/components/elements/icons/prev_arrow_icon/useStyles.js

const useStyles_useStyles = Object(styles_["makeStyles"])(({
  palette
}) => ({
  root: {
    padding: '10px',
    backgroundColor: palette.primary.secondary,
    '& svg': {
      width: '14px',
      height: '14px'
    },
    '&:active svg > path, &:hover svg > path': {
      fill: palette.primary.black
    }
  }
}));
// CONCATENATED MODULE: ./src/components/elements/icons/prev_arrow_icon/PrevArrowIcon.tsx
var PrevArrowIcon_jsx = external_react_default.a.createElement;



const PrevArrowIcon = ({
  onClick
}) => {
  const classes = useStyles_useStyles();
  return PrevArrowIcon_jsx(core_["IconButton"], {
    className: classes.root,
    onClick: onClick
  }, PrevArrowIcon_jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, PrevArrowIcon_jsx("path", {
    d: "M18 7.89474V10.1053H4.31579L10.5789 16.4211L9 18L0 9L9 0L10.5789 1.57895L4.31579 7.89474H18Z",
    fill: "white"
  })));
};
// CONCATENATED MODULE: ./src/components/elements/icons/BusinessIcon.tsx
var BusinessIcon_jsx = external_react_default.a.createElement;

const BusinessIcon = () => {
  return BusinessIcon_jsx("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, BusinessIcon_jsx("path", {
    d: "M7.21127 2.39437V1.1831H4.78873V2.39437H7.21127ZM10.8169 2.39437C11.1549 2.39437 11.4366 2.51643 11.662 2.76056C11.8873 2.98592 12 3.26761 12 3.60563V10.1972C12 10.5352 11.8873 10.8263 11.662 11.0704C11.4366 11.2958 11.1549 11.4085 10.8169 11.4085H1.1831C0.84507 11.4085 0.56338 11.2958 0.338028 11.0704C0.112676 10.8263 0 10.5352 0 10.1972V3.60563C0 3.26761 0.112676 2.98592 0.338028 2.76056C0.56338 2.51643 0.84507 2.39437 1.1831 2.39437H3.60563V1.1831C3.60563 0.84507 3.71831 0.56338 3.94366 0.338028C4.16901 0.112676 4.4507 0 4.78873 0H7.21127C7.5493 0 7.83099 0.112676 8.05634 0.338028C8.28169 0.56338 8.39437 0.84507 8.39437 1.1831V2.39437H10.8169Z",
    fill: "#313131",
    fillOpacity: "0.6"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/StoreIcon.tsx
var StoreIcon_jsx = external_react_default.a.createElement;

const StoreIcon = () => {
  return StoreIcon_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, StoreIcon_jsx("path", {
    d: "M11.6909 13.2646C12.0156 12.9399 12.3903 12.7775 12.815 12.7775C13.2397 12.7775 13.6019 12.9399 13.9016 13.2646C14.2264 13.5894 14.3888 13.9641 14.3888 14.3888C14.3888 14.8134 14.2264 15.1881 13.9016 15.5129C13.6019 15.8126 13.2397 15.9625 12.815 15.9625C12.3903 15.9625 12.0156 15.8126 11.6909 15.5129C11.3661 15.1881 11.2037 14.8134 11.2037 14.3888C11.2037 13.9641 11.3661 13.5894 11.6909 13.2646ZM0 0H2.62295L3.37237 1.57377H15.2131C15.4379 1.57377 15.6253 1.6612 15.7752 1.83607C15.9251 1.98595 16 2.1733 16 2.39813C16 2.52303 15.9625 2.64793 15.8876 2.77283L13.0398 7.94379C12.74 8.49336 12.2779 8.76815 11.6534 8.76815H5.69555L4.98361 10.0796L4.94614 10.192C4.94614 10.3169 5.00859 10.3794 5.13349 10.3794H14.3888V11.9906H4.79625C4.37158 11.9906 3.99688 11.8283 3.67213 11.5035C3.37237 11.1788 3.22248 10.8041 3.22248 10.3794C3.22248 10.1296 3.28493 9.87978 3.40984 9.62998L4.49649 7.64403L1.61124 1.57377H0V0ZM3.67213 13.2646C3.99688 12.9399 4.37158 12.7775 4.79625 12.7775C5.22092 12.7775 5.59563 12.9399 5.92037 13.2646C6.24512 13.5894 6.40749 13.9641 6.40749 14.3888C6.40749 14.8134 6.24512 15.1881 5.92037 15.5129C5.59563 15.8126 5.22092 15.9625 4.79625 15.9625C4.37158 15.9625 3.99688 15.8126 3.67213 15.5129C3.37237 15.1881 3.22248 14.8134 3.22248 14.3888C3.22248 13.9641 3.37237 13.5894 3.67213 13.2646Z",
    fill: "#313131",
    fillOpacity: "0.6"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/QuestionIcon.tsx
var QuestionIcon_jsx = external_react_default.a.createElement;

const QuestionIcon = () => {
  return QuestionIcon_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, QuestionIcon_jsx("path", {
    d: "M10.4413 7.39906C10.9421 6.89828 11.1925 6.29734 11.1925 5.59624C11.1925 4.71987 10.8795 3.9687 10.2535 3.34272C9.62754 2.71674 8.87637 2.40376 8 2.40376C7.12363 2.40376 6.37246 2.71674 5.74648 3.34272C5.1205 3.9687 4.80751 4.71987 4.80751 5.59624H6.38498C6.38498 5.17058 6.54773 4.79499 6.87324 4.46948C7.19875 4.14397 7.57433 3.98122 8 3.98122C8.42566 3.98122 8.80125 4.14397 9.12676 4.46948C9.45227 4.79499 9.61502 5.17058 9.61502 5.59624C9.61502 6.02191 9.45227 6.3975 9.12676 6.723L8.15023 7.73709C7.52426 8.41315 7.21127 9.16432 7.21127 9.99061V10.4038H8.78873C8.78873 9.57747 9.10172 8.82629 9.7277 8.15023L10.4413 7.39906ZM8.78873 13.5962V12.0188H7.21127V13.5962H8.78873ZM2.32864 2.3662C3.9061 0.788732 5.79656 0 8 0C10.2034 0 12.0814 0.788732 13.6338 2.3662C15.2113 3.91862 16 5.79656 16 8C16 10.2034 15.2113 12.0939 13.6338 13.6714C12.0814 15.2238 10.2034 16 8 16C5.79656 16 3.9061 15.2238 2.32864 13.6714C0.776213 12.0939 0 10.2034 0 8C0 5.79656 0.776213 3.91862 2.32864 2.3662Z",
    fill: "url(#paint852_linear)"
  }), QuestionIcon_jsx("defs", null, QuestionIcon_jsx("linearGradient", {
    id: "paint852_linear",
    x1: "-9.74206e-07",
    y1: "9.33333",
    x2: "9.26447",
    y2: "1.54422",
    gradientUnits: "userSpaceOnUse"
  }, QuestionIcon_jsx("stop", {
    stopColor: "rgba(49, 49, 49, 0.6)"
  }), QuestionIcon_jsx("stop", {
    offset: "1",
    stopColor: "rgba(49, 49, 49, 0.6)"
  }))));
};
// EXTERNAL MODULE: ./src/components/elements/icons/LocationIcon.tsx
var LocationIcon = __webpack_require__("iOOT");

// CONCATENATED MODULE: ./src/components/elements/icons/FavoriteIcon.tsx
var FavoriteIcon_jsx = external_react_default.a.createElement;

const FavoriteIcon = props => {
  return FavoriteIcon_jsx("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, FavoriteIcon_jsx("path", {
    d: "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
    fill: `url(#${props.id})`
  }), FavoriteIcon_jsx("path", {
    d: "M16.0751 22.5857C17.277 21.4126 18.1659 20.526 18.7418 19.9258C19.3177 19.3257 19.9437 18.6164 20.6197 17.798C21.2958 16.9795 21.759 16.2566 22.0094 15.6292C22.2848 15.0017 22.4225 14.3879 22.4225 13.7877C22.4225 12.9147 22.1471 12.1918 21.5962 11.6189C21.0704 11.046 20.4069 10.7596 19.6056 10.7596C18.9797 10.7596 18.3912 10.9506 17.8404 11.3325C17.3146 11.7144 16.9515 12.2055 16.7512 12.8056H15.2488C15.0485 12.2055 14.6729 11.7144 14.1221 11.3325C13.5962 10.9506 13.0203 10.7596 12.3944 10.7596C11.5931 10.7596 10.9171 11.046 10.3662 11.6189C9.84038 12.1918 9.57746 12.9147 9.57746 13.7877C9.57746 14.3879 9.70266 15.0017 9.95305 15.6292C10.2285 16.2566 10.7042 16.9795 11.3803 17.798C12.0563 18.6164 12.6823 19.3257 13.2582 19.9258C13.8341 20.526 14.723 21.4126 15.9249 22.5857L16 22.6675L16.0751 22.5857ZM19.6056 9C20.8576 9 21.8967 9.46377 22.723 10.3913C23.5743 11.3188 24 12.451 24 13.7877C24 14.5789 23.8623 15.3564 23.5869 16.1202C23.3114 16.8568 22.7981 17.6888 22.0469 18.6164C21.3208 19.5439 20.6573 20.3214 20.0563 20.9488C19.4554 21.5763 18.4914 22.5448 17.1643 23.8542L16 25L14.8357 23.8951C13.108 22.2038 11.856 20.9352 11.0798 20.0895C10.3286 19.2438 9.62754 18.2481 8.97653 17.1023C8.32551 15.9565 8 14.8517 8 13.7877C8 12.451 8.41315 11.3188 9.23944 10.3913C10.0908 9.46377 11.1424 9 12.3944 9C13.8466 9 15.0485 9.61381 16 10.8414C16.9515 9.61381 18.1534 9 19.6056 9Z",
    fill: `url(#gradient_${props.id})`
  }), FavoriteIcon_jsx("defs", {
    className: "def1"
  }, FavoriteIcon_jsx("linearGradient", {
    id: `gradient_${props.id}`,
    x1: "-9.74206e-07",
    y1: "8.56651",
    x2: "8.59844",
    y2: "0.690255",
    gradientUnits: "userSpaceOnUse"
  }, FavoriteIcon_jsx("stop", {
    stopColor: "#4e4e4e"
  }), FavoriteIcon_jsx("stop", {
    offset: "1",
    stopColor: "#4e4e4e"
  }))), FavoriteIcon_jsx("defs", null, FavoriteIcon_jsx("linearGradient", {
    id: props.id,
    x1: "32",
    y1: "13.3333",
    x2: "13.4711",
    y2: "28.9116",
    gradientUnits: "userSpaceOnUse"
  }, FavoriteIcon_jsx("stop", {
    stopColor: "#675EAA"
  }), FavoriteIcon_jsx("stop", {
    offset: "1",
    stopColor: "#AD66D5"
  }))));
};
// EXTERNAL MODULE: ./src/components/elements/icons/FavoriteBorderIcon.tsx
var FavoriteBorderIcon = __webpack_require__("iLat");

// EXTERNAL MODULE: ./src/components/elements/icons/DeliveryIcon.tsx
var DeliveryIcon = __webpack_require__("T/Dk");

// EXTERNAL MODULE: ./src/components/elements/icons/SafeIcon.tsx
var SafeIcon = __webpack_require__("y+bb");

// EXTERNAL MODULE: ./src/components/elements/icons/SwapIcon.tsx
var SwapIcon = __webpack_require__("e/ez");

// CONCATENATED MODULE: ./src/components/elements/icons/LockIcon.tsx
var LockIcon_jsx = external_react_default.a.createElement;

const LockIcon = () => {
  return LockIcon_jsx("svg", {
    width: "18",
    height: "23",
    viewBox: "0 0 18 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, LockIcon_jsx("path", {
    d: "M12.4737 7.70089V5.4933C12.4737 4.5692 12.1228 3.78199 11.4211 3.1317C10.7544 2.44717 9.94737 2.10491 9 2.10491C8.05263 2.10491 7.22807 2.44717 6.52632 3.1317C5.85965 3.78199 5.52632 4.5692 5.52632 5.4933V7.70089H12.4737ZM7.42105 16.8906C7.87719 17.3356 8.40351 17.558 9 17.558C9.59649 17.558 10.1228 17.3356 10.5789 16.8906C11.0351 16.4457 11.2632 15.9323 11.2632 15.3504C11.2632 14.7686 11.0351 14.2552 10.5789 13.8103C10.1228 13.3653 9.59649 13.1429 9 13.1429C8.40351 13.1429 7.87719 13.3653 7.42105 13.8103C6.96491 14.2552 6.73684 14.7686 6.73684 15.3504C6.73684 15.9323 6.96491 16.4457 7.42105 16.8906ZM15.7368 7.70089C16.3333 7.70089 16.8596 7.92336 17.3158 8.3683C17.7719 8.77902 18 9.2753 18 9.85714V20.8438C18 21.4256 17.7719 21.939 17.3158 22.3839C16.8596 22.7946 16.3333 23 15.7368 23H2.26316C1.66667 23 1.14035 22.7946 0.684211 22.3839C0.22807 21.939 0 21.4256 0 20.8438V9.85714C0 9.2753 0.22807 8.77902 0.684211 8.3683C1.14035 7.92336 1.66667 7.70089 2.26316 7.70089H3.36842V5.4933C3.36842 3.98735 3.91228 2.70387 5 1.64286C6.12281 0.547619 7.45614 0 9 0C10.5439 0 11.8596 0.547619 12.9474 1.64286C14.0702 2.70387 14.6316 3.98735 14.6316 5.4933V7.70089H15.7368Z",
    fill: "#F5B100"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/MegaphoneIcon.tsx
var MegaphoneIcon_jsx = external_react_default.a.createElement;

const MegaphoneIcon = () => {
  return MegaphoneIcon_jsx("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 23 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, MegaphoneIcon_jsx("path", {
    d: "M2.50138 14.415L2.93292 14.2138L3.18921 14.7634C3.5556 15.5491 4.49281 15.8902 5.27854 15.5238L5.63272 15.3587L9.28281 19.4555C9.57146 19.7769 10.0567 19.8183 10.3935 19.5522C10.72 19.2959 10.797 18.8337 10.5754 18.486L7.92884 14.288L8.64129 13.9557C8.97105 13.802 9.11227 13.414 8.9585 13.0842L8.95091 13.0679C10.4322 12.62 13.0104 12.0374 15.6097 12.3716C16.265 12.8839 16.8622 13.0911 17.3141 12.8804C18.4662 12.3432 18.1857 9.29695 16.686 6.08077C15.1843 2.86051 13.033 0.691622 11.8809 1.22887C11.4656 1.4225 11.2361 1.9508 11.1838 2.68891C9.76579 4.94114 7.62121 6.57063 6.30969 7.42507C6.13637 7.14903 5.78362 7.04092 5.48236 7.1814L2.11961 8.74948C1.33388 9.11587 0.992762 10.0531 1.35915 10.8388L1.6553 11.4739L1.22376 11.6751C0.95914 11.7985 0.848057 12.113 0.969554 12.3736L1.80105 14.1567C1.92038 14.4232 2.23676 14.5384 2.50138 14.415ZM13.3481 5.92727C12.9116 4.69349 12.7442 3.68611 12.7297 3.03862C13.389 3.62335 14.3862 4.85838 15.2651 6.74331C16.1441 8.62824 16.4473 10.1819 16.4734 11.0669C15.9866 10.6396 15.3247 9.85785 14.658 8.73635C15.0519 8.3693 15.1322 7.63798 14.8151 6.9581C14.4943 6.27008 13.8825 5.86149 13.3481 5.92727Z",
    fill: "white"
  }), MegaphoneIcon_jsx("path", {
    d: "M20.4511 3.61137L18.1061 4.70485C17.7845 4.85482 17.6454 5.23687 17.7954 5.55849C17.9454 5.88011 18.3274 6.01916 18.649 5.86919L20.994 4.77571C21.3156 4.62574 21.4547 4.24369 21.3047 3.92207C21.1588 3.59855 20.7727 3.4614 20.4511 3.61137Z",
    fill: "white"
  }), MegaphoneIcon_jsx("path", {
    d: "M22.2607 7.18381C22.2195 6.85109 21.9287 6.61003 21.5906 6.62893L18.9376 6.78554C18.5712 6.80768 18.297 7.13379 18.3433 7.4988C18.3845 7.83151 18.6753 8.07257 19.0135 8.05368L21.6664 7.89707C22.0347 7.87899 22.307 7.54881 22.2607 7.18381Z",
    fill: "white"
  }), MegaphoneIcon_jsx("path", {
    d: "M17.5939 3.89305L19.4192 1.96143C19.6488 1.72052 19.6492 1.3387 19.4249 1.09141C19.175 0.821325 18.7471 0.817672 18.4965 1.08815L16.6712 3.01978C16.4416 3.26069 16.4412 3.64251 16.6656 3.88979C16.9154 4.15988 17.3393 4.16543 17.5939 3.89305Z",
    fill: "white"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/RaiseToTopIcon.tsx
var RaiseToTopIcon_jsx = external_react_default.a.createElement;

const RaiseToTopIcon = () => {
  return RaiseToTopIcon_jsx("svg", {
    width: "16",
    height: "18",
    viewBox: "0 0 16 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, RaiseToTopIcon_jsx("path", {
    d: "M3.88708 17.8079H0.824821V12.1792H3.88708V17.8079Z",
    fill: "white"
  }), RaiseToTopIcon_jsx("path", {
    d: "M7.89233 17.811H4.83007V10.8271H7.89233V17.811Z",
    fill: "white"
  }), RaiseToTopIcon_jsx("path", {
    d: "M11.8973 17.811H8.83508V8.78857H11.8973V17.811Z",
    fill: "white"
  }), RaiseToTopIcon_jsx("path", {
    d: "M15.9023 17.8109H12.8401V6.40967H15.9023V17.8109Z",
    fill: "white"
  }), RaiseToTopIcon_jsx("path", {
    d: "M15.0379 1.10175C15.0367 1.0766 15.0256 1.05318 15.0203 1.02829C15.016 1.00646 15.0184 0.9862 15.0114 0.964836C15.0081 0.956208 15.0025 0.948419 14.9992 0.93979C14.9975 0.935475 14.9972 0.931371 14.995 0.926688C14.9928 0.922005 14.9893 0.918005 14.9866 0.912953C14.9636 0.86628 14.9346 0.824817 14.8994 0.789981C14.896 0.785981 14.8925 0.781981 14.8886 0.778507C14.8871 0.777402 14.8866 0.774719 14.885 0.773614C14.8822 0.770878 14.8785 0.770615 14.8757 0.767878C14.8371 0.734568 14.7946 0.707938 14.7483 0.688885C14.7453 0.687569 14.7434 0.684674 14.7395 0.683515C14.738 0.68241 14.7362 0.682726 14.7342 0.682147C14.7284 0.68041 14.7231 0.679042 14.7172 0.677306C14.6698 0.662146 14.6215 0.654983 14.5714 0.655976C14.5668 0.65587 14.5629 0.654711 14.5583 0.654605C14.5538 0.655393 14.5495 0.657078 14.5449 0.656971C14.5049 0.660333 14.4655 0.667272 14.4262 0.682051L10.8705 2.02241C10.6343 2.11109 10.5138 2.38183 10.6008 2.62703C10.6726 2.83019 10.8642 2.95181 11.0618 2.93726C11.1032 2.93411 11.1445 2.92543 11.1857 2.91034L12.901 2.26341C9.60118 5.57525 5.39434 8.01913 0.622661 9.38068C0.380726 9.44962 0.239365 9.70973 0.307204 9.96109C0.366839 10.1816 0.56781 10.3223 0.779484 10.3067C0.809107 10.3047 0.838625 10.2995 0.868933 10.2909C5.72937 8.90448 10.0244 6.422 13.4149 3.06234L12.9878 4.27254C12.9013 4.51698 13.023 4.78881 13.259 4.87955C13.3222 4.90345 13.3871 4.91277 13.4494 4.90778C13.6225 4.8957 13.7801 4.78029 13.8435 4.60124L15.0116 1.29037C15.0122 1.28842 15.0118 1.28574 15.0123 1.28379C15.0203 1.26117 15.0198 1.23728 15.0239 1.2135C15.029 1.18493 15.0357 1.15747 15.0355 1.12753C15.0353 1.11879 15.0384 1.10995 15.0379 1.10175Z",
    fill: "white"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/PromoteIcon.tsx
var PromoteIcon_jsx = external_react_default.a.createElement;

const PromoteIcon = () => {
  return PromoteIcon_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, PromoteIcon_jsx("path", {
    d: "M3.88721 17.8079H0.824943V12.1792H3.88721V17.8079Z",
    fill: "white"
  }), PromoteIcon_jsx("path", {
    d: "M7.89233 17.811H4.83007V10.8271H7.89233V17.811Z",
    fill: "white"
  }), PromoteIcon_jsx("path", {
    d: "M11.8972 17.8112H8.83495V8.78882H11.8972V17.8112Z",
    fill: "white"
  }), PromoteIcon_jsx("path", {
    d: "M15.9023 17.8112H12.8401V6.40991H15.9023V17.8112Z",
    fill: "white"
  }), PromoteIcon_jsx("path", {
    d: "M15.038 1.10175C15.0368 1.0766 15.0257 1.05318 15.0204 1.02829C15.0161 1.00646 15.0185 0.9862 15.0115 0.964836C15.0082 0.956208 15.0027 0.948419 14.9993 0.93979C14.9976 0.935475 14.9973 0.931371 14.9951 0.926688C14.9929 0.922005 14.9895 0.918005 14.9867 0.912953C14.9637 0.86628 14.9347 0.824817 14.8996 0.789981C14.8961 0.785981 14.8926 0.781981 14.8888 0.778507C14.8872 0.777402 14.8867 0.774719 14.8851 0.773614C14.8824 0.770878 14.8786 0.770615 14.8758 0.767878C14.8372 0.734568 14.7947 0.707938 14.7485 0.688885C14.7455 0.687569 14.7436 0.684674 14.7397 0.683515C14.7381 0.68241 14.7363 0.682726 14.7344 0.682147C14.7285 0.68041 14.7232 0.679042 14.7174 0.677306C14.67 0.662146 14.6217 0.654983 14.5716 0.655976C14.5669 0.65587 14.563 0.654711 14.5584 0.654605C14.5539 0.655393 14.5496 0.657078 14.545 0.656971C14.505 0.660333 14.4657 0.667272 14.4263 0.682051L10.8706 2.02241C10.6345 2.11109 10.5139 2.38183 10.6009 2.62703C10.6727 2.83019 10.8643 2.95181 11.0619 2.93726C11.1033 2.93411 11.1447 2.92543 11.1858 2.91034L12.9011 2.26341C9.6013 5.57525 5.39446 8.01913 0.622783 9.38068C0.380848 9.44962 0.239487 9.70973 0.307326 9.96109C0.366961 10.1816 0.567932 10.3223 0.779606 10.3067C0.809229 10.3047 0.838747 10.2995 0.869055 10.2909C5.7295 8.90448 10.0245 6.422 13.4151 3.06234L12.9879 4.27254C12.9014 4.51698 13.0232 4.78881 13.2591 4.87955C13.3224 4.90345 13.3872 4.91277 13.4495 4.90778C13.6226 4.8957 13.7802 4.78029 13.8437 4.60124L15.0118 1.29037C15.0123 1.28842 15.0119 1.28574 15.0125 1.28379C15.0205 1.26117 15.0199 1.23728 15.024 1.2135C15.0291 1.18493 15.0358 1.15747 15.0356 1.12753C15.0355 1.11879 15.0385 1.10995 15.038 1.10175Z",
    fill: "white"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/DoubleUpIcon.tsx
var DoubleUpIcon_jsx = external_react_default.a.createElement;

const DoubleUpIcon = () => {
  return DoubleUpIcon_jsx("svg", {
    width: "17",
    height: "16",
    viewBox: "0 0 17 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, DoubleUpIcon_jsx("path", {
    d: "M1.73669 8.65444L8.06587 2.41584L14.395 8.65545C14.7918 9.04921 15.4363 9.04921 15.8331 8.65545C16.2298 8.26168 16.2298 7.62424 15.8331 7.23149L8.78484 0.28396C8.40321 -0.093648 7.72944 -0.095657 7.34581 0.28396L0.297583 7.23249C-0.0991942 7.62525 -0.0991942 8.26369 0.297583 8.65645C0.695447 9.0482 1.33992 9.0482 1.73669 8.65444Z",
    fill: "white"
  }), DoubleUpIcon_jsx("path", {
    d: "M8.78484 7.3323C8.40321 6.95469 7.72944 6.95268 7.34581 7.3323L0.297583 14.2798C-0.0991942 14.6736 -0.0991942 15.311 0.297583 15.7038C0.694359 16.0975 1.33883 16.0975 1.7356 15.7038L8.06578 9.46518L14.395 15.7048C14.7917 16.0986 15.4362 16.0986 15.833 15.7048C16.2298 15.311 16.2298 14.6736 15.833 14.2808L8.78484 7.3323Z",
    fill: "white"
  }));
};
// EXTERNAL MODULE: ./src/components/elements/icons/SettingsIcon.tsx
var SettingsIcon = __webpack_require__("2TXB");

// CONCATENATED MODULE: ./src/components/elements/icons/EyeIcon.tsx
var EyeIcon_jsx = external_react_default.a.createElement;

const EyeIcon = () => {
  return EyeIcon_jsx("svg", {
    width: "16",
    height: "11",
    viewBox: "0 0 16 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, EyeIcon_jsx("path", {
    d: "M6.46808 3.91489C6.89929 3.48369 7.40993 3.26809 8 3.26809C8.59007 3.26809 9.10071 3.48369 9.53191 3.91489C9.96312 4.3461 10.1787 4.85674 10.1787 5.44681C10.1787 6.03688 9.96312 6.54752 9.53191 6.97872C9.10071 7.40993 8.59007 7.62553 8 7.62553C7.40993 7.62553 6.89929 7.40993 6.46808 6.97872C6.03688 6.54752 5.82128 6.03688 5.82128 5.44681C5.82128 4.85674 6.03688 4.3461 6.46808 3.91489ZM5.41277 8.03404C6.13901 8.73759 7.00142 9.08936 8 9.08936C8.99858 9.08936 9.84964 8.73759 10.5532 8.03404C11.2794 7.3078 11.6426 6.44539 11.6426 5.44681C11.6426 4.44823 11.2794 3.59716 10.5532 2.89362C9.84964 2.16738 8.99858 1.80426 8 1.80426C7.00142 1.80426 6.13901 2.16738 5.41277 2.89362C4.70922 3.59716 4.35745 4.44823 4.35745 5.44681C4.35745 6.44539 4.70922 7.3078 5.41277 8.03404ZM3.13191 1.49787C4.5844 0.499291 6.20709 0 8 0C9.79291 0 11.4156 0.499291 12.8681 1.49787C14.3206 2.49645 15.3645 3.81277 16 5.44681C15.3645 7.08085 14.3206 8.39716 12.8681 9.39574C11.4156 10.3943 9.79291 10.8936 8 10.8936C6.20709 10.8936 4.5844 10.3943 3.13191 9.39574C1.67943 8.39716 0.635461 7.08085 0 5.44681C0.635461 3.81277 1.67943 2.49645 3.13191 1.49787Z",
    fill: "#4E4E4E"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/RestoreIcon.tsx
var RestoreIcon_jsx = external_react_default.a.createElement;

const RestoreIcon = () => {
  return RestoreIcon_jsx("svg", {
    width: "21",
    height: "18",
    viewBox: "0 0 21 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, RestoreIcon_jsx("path", {
    d: "M11.0156 5.01562H12.5156V9.23438L16.0312 11.3438L15.2812 12.5625L11.0156 9.98438V5.01562ZM5.625 2.625C7.40625 0.875 9.53125 0 12 0C14.4688 0 16.5781 0.875 18.3281 2.625C20.1094 4.375 21 6.5 21 9C21 11.5 20.1094 13.625 18.3281 15.375C16.5781 17.125 14.4688 18 12 18C9.53125 18 7.42188 17.125 5.67188 15.375L7.07812 13.9219C8.45312 15.2969 10.0938 15.9844 12 15.9844C13.9375 15.9844 15.5938 15.3125 16.9688 13.9688C18.3438 12.5938 19.0312 10.9375 19.0312 9C19.0312 7.0625 18.3438 5.42188 16.9688 4.07812C15.5938 2.70312 13.9375 2.01562 12 2.01562C10.0625 2.01562 8.40625 2.70312 7.03125 4.07812C5.6875 5.42188 5.01562 7.0625 5.01562 9H8.01562L3.98438 13.0312L3.89062 12.8906L0 9H3C3 6.5 3.875 4.375 5.625 2.625Z",
    fill: "white"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/DoneAllIcon.tsx
var DoneAllIcon_jsx = external_react_default.a.createElement;

const DoneAllIcon = () => {
  return DoneAllIcon_jsx("svg", {
    width: "24",
    height: "14",
    viewBox: "0 0 24 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, DoneAllIcon_jsx("path", {
    d: "M0 7.82812L1.40625 6.42188L6.98438 12L5.57812 13.4062L0 7.82812ZM21.7969 0L23.25 1.40625L11.25 13.4062L5.625 7.82812L7.07812 6.42188L11.25 10.5938L21.7969 0ZM17.5781 1.40625L11.25 7.78125L9.84375 6.375L16.1719 0L17.5781 1.40625Z",
    fill: "white"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/CloseIcon.tsx
var CloseIcon_jsx = external_react_default.a.createElement;

const CloseIcon = () => {
  return CloseIcon_jsx("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, CloseIcon_jsx("path", {
    d: "M14 1.4094L8.4094 7L14 12.5906L12.5906 14L7 8.4094L1.4094 14L0 12.5906L5.5906 7L0 1.4094L1.4094 0L7 5.5906L12.5906 0L14 1.4094Z",
    fill: "white"
  }));
};
// CONCATENATED MODULE: ./src/components/elements/icons/CameraIcon.tsx
var CameraIcon_jsx = external_react_default.a.createElement;

const CameraIcon = () => {
  return CameraIcon_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 420.8 420.8",
    enableBackground: "new 0 0 420.8 420.8"
  }, CameraIcon_jsx("path", {
    d: "M406.8,96.4c-8.4-8.8-20-14-33.2-14h-66.4v-0.8c0-10-4-19.6-10.8-26c-6.8-6.8-16-10.8-26-10.8h-120     c-10.4,0-19.6,4-26.4,10.8c-6.8,6.8-10.8,16-10.8,26v0.8h-66c-13.2,0-24.8,5.2-33.2,14c-8.4,8.4-14,20.4-14,33.2v199.2     C0,342,5.2,353.6,14,362c8.4,8.4,20.4,14,33.2,14h326.4c13.2,0,24.8-5.2,33.2-14c8.4-8.4,14-20.4,14-33.2V129.6     C420.8,116.4,415.6,104.8,406.8,96.4z M400,328.8h-0.4c0,7.2-2.8,13.6-7.6,18.4s-11.2,7.6-18.4,7.6H47.2     c-7.2,0-13.6-2.8-18.4-7.6c-4.8-4.8-7.6-11.2-7.6-18.4V129.6c0-7.2,2.8-13.6,7.6-18.4s11.2-7.6,18.4-7.6h77.2     c6,0,10.8-4.8,10.8-10.8V81.2c0-4.4,1.6-8.4,4.4-11.2s6.8-4.4,11.2-4.4h119.6c4.4,0,8.4,1.6,11.2,4.4c2.8,2.8,4.4,6.8,4.4,11.2     v11.6c0,6,4.8,10.8,10.8,10.8H374c7.2,0,13.6,2.8,18.4,7.6s7.6,11.2,7.6,18.4V328.8z"
  }), CameraIcon_jsx("path", {
    d: "M210.4,130.8c-27.2,0-52,11.2-69.6,28.8c-18,18-28.8,42.4-28.8,69.6s11.2,52,28.8,69.6c18,18,42.4,28.8,69.6,28.8     s52-11.2,69.6-28.8c18-18,28.8-42.4,28.8-69.6s-11.2-52-28.8-69.6C262.4,142,237.6,130.8,210.4,130.8z M264.8,284     c-14,13.6-33.2,22.4-54.4,22.4S170,297.6,156,284c-14-14-22.4-33.2-22.4-54.4c0-21.2,8.8-40.4,22.4-54.4     c14-14,33.2-22.4,54.4-22.4s40.4,8.8,54.4,22.4c14,14,22.4,33.2,22.4,54.4C287.6,250.8,278.8,270,264.8,284z"
  }), CameraIcon_jsx("circle", {
    cx: "352.8",
    cy: "150",
    r: "19.6"
  }));
};
// EXTERNAL MODULE: ./src/components/elements/icons/logo/Logo.tsx
var Logo = __webpack_require__("zgiF");

// EXTERNAL MODULE: ./src/components/elements/icons/PhoneIcon.tsx
var PhoneIcon = __webpack_require__("/TEV");

// CONCATENATED MODULE: ./src/components/elements/icons/SurpriseIcon.tsx
var SurpriseIcon_jsx = external_react_default.a.createElement;

const SurpriseIcon = () => {
  return SurpriseIcon_jsx(external_react_default.a.Fragment, null, SurpriseIcon_jsx("svg", {
    width: "16",
    height: "15",
    viewBox: "0 0 16 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, SurpriseIcon_jsx("path", {
    d: "M1 7.99023V13.9979C1 14.5507 1.449 14.9992 2 14.9992H7V7.99023H1Z",
    fill: "#313131",
    fillOpacity: "0.6"
  }), SurpriseIcon_jsx("path", {
    d: "M15 3.98587H11.836C12.063 3.83067 12.258 3.67647 12.394 3.53829C13.201 2.72625 13.201 1.40455 12.394 0.592511C11.61 -0.198505 10.244 -0.196502 9.461 0.592511C9.027 1.02807 7.877 2.80135 8.036 3.98587H7.964C8.122 2.80135 6.972 1.02807 6.539 0.592511C5.755 -0.196502 4.389 -0.196502 3.606 0.592511C2.8 1.40455 2.8 2.72625 3.605 3.53829C3.742 3.67647 3.937 3.83067 4.164 3.98587H1C0.449 3.98587 0 4.43544 0 4.98715V6.48908C0 6.76544 0.224 6.98972 0.5 6.98972H7V4.98715H9V6.98972H15.5C15.776 6.98972 16 6.76544 16 6.48908V4.98715C16 4.43544 15.552 3.98587 15 3.98587ZM6.941 3.95282C6.941 3.95282 6.899 3.98587 6.756 3.98587C6.065 3.98587 4.746 3.26694 4.315 2.83239C3.896 2.40984 3.896 1.72096 4.315 1.29842C4.518 1.09415 4.787 0.982011 5.073 0.982011C5.358 0.982011 5.627 1.09415 5.83 1.29842C6.504 1.97729 7.174 3.71152 6.941 3.95282ZM9.243 3.98587C9.101 3.98587 9.059 3.95383 9.059 3.95282C8.826 3.71152 9.496 1.97729 10.17 1.29842C10.573 0.890894 11.278 0.888891 11.685 1.29842C12.105 1.72096 12.105 2.40984 11.685 2.83239C11.254 3.26694 9.935 3.98587 9.243 3.98587Z",
    fill: "#313131",
    fillOpacity: "0.6"
  }), SurpriseIcon_jsx("path", {
    d: "M9 7.99023V14.9992H14C14.552 14.9992 15 14.5507 15 13.9979V7.99023H9Z",
    fill: "#313131",
    fillOpacity: "0.6"
  })));
};
// CONCATENATED MODULE: ./src/components/elements/icons/SubstractIcon.tsx
var SubstractIcon_jsx = external_react_default.a.createElement;

const SubstractIcon = () => {
  return SubstractIcon_jsx(external_react_default.a.Fragment, null, SubstractIcon_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, SubstractIcon_jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM10.8073 10.5147C10.9361 10.2129 11 9.88189 11 9.51883C11 9.16452 10.9361 8.84617 10.8073 8.56525C10.6786 8.28481 10.4955 8.0486 10.255 7.85468C10.0171 7.66026 9.72233 7.513 9.37726 7.41337C9.03018 7.31422 8.58954 7.2661 8.05684 7.2661H6.67656V5.27873H10.1916C10.2309 5.27873 10.2661 5.26804 10.2988 5.24471C10.3315 5.22187 10.3576 5.1859 10.3818 5.13293C10.4059 5.08238 10.423 5.01726 10.4341 4.93706C10.4452 4.85444 10.4492 4.75771 10.4492 4.64155C10.4492 4.51907 10.4452 4.41798 10.4341 4.33779C10.423 4.25565 10.4059 4.19004 10.3818 4.13949C10.3576 4.087 10.3315 4.05103 10.2988 4.03207C10.2661 4.01069 10.2289 4 10.1876 4H5.5C5.35815 4 5.23994 4.04034 5.14386 4.12053C5.04779 4.20073 5 4.33147 5 4.51275V11.4683C5 11.6622 5.04779 11.7993 5.14386 11.8795C5.23994 11.9597 5.36469 12 5.51962 12H7.70272C8.334 12 8.84909 11.9388 9.24447 11.8143C9.64135 11.6899 9.96931 11.5188 10.2289 11.2972C10.4864 11.0756 10.6786 10.8165 10.8073 10.5147ZM9.20724 9.14557C9.2661 9.287 9.29678 9.4469 9.29678 9.62235C9.29678 9.80364 9.26157 9.96598 9.19416 10.1118C9.12425 10.2552 9.03018 10.3776 8.91046 10.4768C8.79024 10.5735 8.64185 10.6474 8.46278 10.6979C8.28571 10.7465 8.05885 10.7718 7.7837 10.7718H6.67656V8.46853H7.76408C8.06942 8.46853 8.31187 8.49575 8.49547 8.54872C8.67656 8.60121 8.82746 8.67947 8.94316 8.78056C9.05885 8.88165 9.14587 9.00219 9.20724 9.14557Z",
    fill: "#313131",
    fillOpacity: "0.6"
  })));
};
// EXTERNAL MODULE: ./src/components/elements/icons/SearchIcon.tsx
var SearchIcon = __webpack_require__("v4xS");

// CONCATENATED MODULE: ./src/components/elements/icons/index.tsx
const Facebook = `/icons/fb_icon.svg`;
const Instagram = `/icons/instagram_icon.svg`;
const Youtube = `/icons/youtube_icon.svg`;
const Twitter = `/icons/tw_icon.svg`;
const Whatsapp = `/icons/wp_icon.svg`;
const Telegram = `/icons/tg_icon.svg`;
const PlIcon = `/icons/place_icon.svg`;
const CategoryIcon = `/icons/kat_icon.svg`;
const icons_SearchIcon = `/icons/sr_icon.svg`;
const SignIcon = `/icons/sign_icon.svg`;
const AddIcon = `/icons/add.svg`;
const Electronica = `/icons/elektronika_optim_fin.svg`;
const KrasotaZdorovye = `/icons/krasota_zdorovye_optim_fin.svg`;
const Mebel = `/icons/mebel_optim_fin.svg`;
const TelefonPlanshet = `/icons/tel_plansh_optim_fin.svg`;
const KompTexnika = `/icons/komp_tehnika_optim_fin.svg`;
const JenskiyGarderob = `/icons/jenskiy_garderob_optim_fin.svg`;
const UslugiOptom = `/icons/uslugi_optim_fin.svg`;
const OtdixOptom = `/icons/otdih_optim_fin.svg`;
const DownArrowIcon = `/icons/down-arrow.svg`;
const FilterIcon = `/icons/filter_icon.svg`;
const RightArrow = `/icons/right_arrow.svg`;
const SafeBuyingIcon = `/icons/safe_buying.svg`;
const SafeBuyingIcon2 = `/icons/safe_buying2.svg`;
const AdvertisementIcon = `/icons/ads_icon.svg`;
const TorgIcon = `/icons/torg_icon.svg`;
const RatingIcon = `/icons/rating_icon.svg`;
const BackSpaceArrow = `/icons/back_space_arrow.svg`;
const ShareIcon = `/icons/share-icon.svg`;
const DownArrow = `/icons/down_arrow.svg`;
const HeartIcon = `/icons/heart_icon.svg`;
const ComplainIcon = `/icons/complain_icon.svg`;
const UserAvatar = `/icons/user-avatar_icon.svg`;
const StarIcon = `/icons/star_icon.svg`;
const FullscreenIcon = `/icons/fullscreen-icon.svg`;
const FullscreenIcon2 = `/icons/fullscreen-icon2.svg`;
const Subscribe_icon = `/icons/touch_icon.svg`;
const SpeakerNotes_icon = `/icons/speaker_notes.svg`;
const Bonus_icon = `/icons/bonus_icon.svg`;
const Auto_view_icon = `/icons/auto_view_icon.svg`;
const Auto_icon = `/icons/auto_icon.svg`;
const Wheel_icon = `/icons/wheel_icon.svg`;
const Info_icon = `/icons/info_icon.svg`; // Custom svgs





























/***/ }),

/***/ "n9sB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Rating");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "riHB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomTabPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const CustomTabPanel = props => {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return __jsx("div", _extends({
    hidden: value !== index
  }, other), value === index && children);
};

/***/ }),

/***/ "v4xS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search_icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Search_icon = () => {
  return __jsx("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M3.32812 9.70312C4.20312 10.5781 5.26562 11.0156 6.51562 11.0156C7.76562 11.0156 8.82812 10.5781 9.70312 9.70312C10.5781 8.82812 11.0156 7.76562 11.0156 6.51562C11.0156 5.26562 10.5781 4.20312 9.70312 3.32812C8.82812 2.45312 7.76562 2.01562 6.51562 2.01562C5.26562 2.01562 4.20312 2.45312 3.32812 3.32812C2.45312 4.20312 2.01562 5.26562 2.01562 6.51562C2.01562 7.76562 2.45312 8.82812 3.32812 9.70312ZM12.5156 11.0156L17.4844 15.9844L15.9844 17.4844L11.0156 12.5156V11.7188L10.7344 11.4375C9.54688 12.4688 8.14062 12.9844 6.51562 12.9844C4.70312 12.9844 3.15625 12.3594 1.875 11.1094C0.625 9.85938 0 8.32812 0 6.51562C0 4.70312 0.625 3.17188 1.875 1.92188C3.15625 0.640625 4.70312 0 6.51562 0C8.32812 0 9.85938 0.640625 11.1094 1.92188C12.3594 3.17188 12.9844 4.70312 12.9844 6.51562C12.9844 8.14062 12.4688 9.54688 11.4375 10.7344L11.7188 11.0156H12.5156Z",
    fill: "#4E4E4E"
  }));
};

/***/ }),

/***/ "vYFU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ShoppingIcon = () => {
  return __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "M11.6909 13.2646C12.0156 12.9399 12.3903 12.7775 12.815 12.7775C13.2397 12.7775 13.6019 12.9399 13.9016 13.2646C14.2264 13.5894 14.3888 13.9641 14.3888 14.3888C14.3888 14.8134 14.2264 15.1881 13.9016 15.5129C13.6019 15.8126 13.2397 15.9625 12.815 15.9625C12.3903 15.9625 12.0156 15.8126 11.6909 15.5129C11.3661 15.1881 11.2037 14.8134 11.2037 14.3888C11.2037 13.9641 11.3661 13.5894 11.6909 13.2646ZM0 0H2.62295L3.37237 1.57377H15.2131C15.4379 1.57377 15.6253 1.6612 15.7752 1.83607C15.9251 1.98595 16 2.1733 16 2.39813C16 2.52303 15.9625 2.64793 15.8876 2.77283L13.0398 7.94379C12.74 8.49336 12.2779 8.76815 11.6534 8.76815H5.69555L4.98361 10.0796L4.94614 10.192C4.94614 10.3169 5.00859 10.3794 5.13349 10.3794H14.3888V11.9906H4.79625C4.37158 11.9906 3.99688 11.8283 3.67213 11.5035C3.37237 11.1788 3.22248 10.8041 3.22248 10.3794C3.22248 10.1296 3.28493 9.87978 3.40984 9.62998L4.49649 7.64403L1.61124 1.57377H0V0ZM3.67213 13.2646C3.99688 12.9399 4.37158 12.7775 4.79625 12.7775C5.22092 12.7775 5.59563 12.9399 5.92037 13.2646C6.24512 13.5894 6.40749 13.9641 6.40749 14.3888C6.40749 14.8134 6.24512 15.1881 5.92037 15.5129C5.59563 15.8126 5.22092 15.9625 4.79625 15.9625C4.37158 15.9625 3.99688 15.8126 3.67213 15.5129C3.37237 15.1881 3.22248 14.8134 3.22248 14.3888C3.22248 13.9641 3.37237 13.5894 3.67213 13.2646Z",
    fill: "url(#paint8_linear)"
  }), __jsx("defs", null, __jsx("linearGradient", {
    id: "paint8_linear",
    x1: "-9.74206e-07",
    y1: "9.31147",
    x2: "9.24647",
    y2: "1.51925",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#4e4e4e"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4e4e4e"
  }))));
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y+bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SafeIcon = () => {
  return __jsx("svg", {
    width: "19",
    height: "22",
    viewBox: "0 0 19 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.693359 2.86387C0.693359 2.86387 0.834259 7.26697 0.950959 8.43817C1.06756 9.60947 1.74306 12.8463 2.89976 14.8583C4.05646 16.8703 4.87286 17.8083 4.87286 17.8083C4.87286 17.8083 5.62376 18.6952 6.76586 19.6915C7.90796 20.6878 8.79246 21.1932 8.79246 21.1932C8.79246 21.1932 9.44366 21.5444 9.57616 21.576C9.70856 21.6075 9.76086 21.576 9.76086 21.576C9.76086 21.576 10.5949 21.2036 11.2194 20.7394C11.8439 20.2753 12.7819 19.5366 13.6664 18.6618C14.5509 17.787 15.382 16.5331 15.5521 16.2901C15.7222 16.0471 16.5338 14.7058 17.1073 13.3644C17.6807 12.0231 18.1813 9.56877 18.1813 9.56877C18.1813 9.56877 18.3854 8.44127 18.4437 6.85687C18.5021 5.27257 18.5944 2.86197 18.5944 2.86197C15.9791 2.39087 13.8048 2.04447 11.3725 0.896173C10.0651 0.278873 9.76376 0.0844727 9.76376 0.0844727L9.50626 0.0857727C9.50626 0.0857727 8.66666 0.525573 7.96926 0.843873C5.39006 2.02117 3.48146 2.39897 0.693359 2.86387ZM13.913 13.5138C13.5202 14.4657 12.7475 15.0306 11.7888 15.3413C10.5052 15.7597 8.13676 15.6024 6.72746 15.6024C6.23796 15.6024 6.02136 15.3294 6.02136 14.8548V5.07337C6.02136 4.63387 6.24636 4.35247 6.70076 4.35247H13.0704C13.442 4.35247 13.4264 5.00377 13.4264 5.25437C13.4264 5.49057 13.4297 6.15037 13.0764 6.15037H8.29986V8.94497C9.40946 8.94497 10.9298 8.84527 11.9698 9.15267C12.8405 9.41167 13.5389 9.92917 13.913 10.7725C14.2749 11.5883 14.2512 12.694 13.913 13.5138ZM11.7384 11.5884C11.6553 11.3867 11.5366 11.2176 11.3794 11.0751C10.956 10.6917 10.3222 10.6361 9.77726 10.6361H8.29986V13.8758H9.80396C10.5885 13.8758 11.3506 13.7333 11.7206 12.9472C11.9036 12.5397 11.9049 12.0017 11.7384 11.5884ZM1.35236 3.60437L1.50786 7.33437C1.50786 7.33437 1.57106 8.70977 1.73626 9.62827C1.90156 10.5468 2.05706 11.1689 2.35836 12.1847C2.65966 13.2004 3.52966 14.8576 3.52966 14.8576C3.52966 14.8576 4.02046 15.8539 5.03136 17.1175C6.04226 18.3811 7.48566 19.5329 7.48566 19.5329C7.48566 19.5329 8.15876 20.1088 8.80756 20.4563C9.45636 20.8038 9.64836 20.833 9.64836 20.833C9.64836 20.833 9.81606 20.799 10.4454 20.4053C11.0748 20.0116 11.9496 19.4479 13.1792 18.2621C14.4087 17.0762 15.5022 15.21 15.5022 15.21C15.5022 15.21 16.4305 13.7083 16.8922 12.051C17.3539 10.3938 17.4365 10.0147 17.592 9.02327C17.7475 8.03177 17.8885 3.72587 17.8885 3.72587C17.8885 3.72587 17.9188 3.54487 17.7512 3.49867C17.5835 3.45247 15.1778 3.07827 14.5168 2.91307C13.8559 2.74777 12.3396 2.28607 11.2364 1.72237C10.1331 1.15857 9.76616 0.998173 9.67866 0.983573C9.59116 0.969073 9.49886 0.988473 9.41626 1.02247C9.33366 1.05647 7.76866 1.85597 7.00086 2.14757C6.23296 2.43917 5.35086 2.75997 4.66316 2.91307C3.97546 3.06617 2.62316 3.29817 2.62316 3.29817C2.62316 3.29817 1.52236 3.48047 1.45076 3.50107C1.37906 3.52177 1.36936 3.56187 1.35236 3.60437ZM1.91846 3.93117C1.91846 3.93117 2.08856 8.23957 2.16146 8.87627C2.23436 9.51287 2.40446 10.3852 2.54536 11.0122C2.68626 11.6391 3.10666 12.978 3.73366 14.227C4.36056 15.4761 5.21586 16.5987 5.21586 16.5987C5.21586 16.5987 5.98866 17.6242 7.03836 18.5573C8.08816 19.4904 9.07226 20.0323 9.07226 20.0323C9.07226 20.0323 9.49756 20.2668 9.60326 20.2765C9.70896 20.2862 9.77336 20.2741 9.80976 20.2571C9.84626 20.24 10.6239 19.8561 11.3626 19.2875C12.1013 18.7189 13.2021 17.657 13.5083 17.2901C13.8145 16.9231 15.0319 15.3801 15.7026 13.9221C16.3732 12.4641 16.6843 11.0304 16.6843 11.0304C16.6843 11.0304 17.0536 9.52867 17.1265 8.97947C17.1994 8.43027 17.3537 4.08787 17.3537 4.08787C17.3537 4.08787 17.3768 3.94697 17.2444 3.90327C17.112 3.85947 15.5884 3.60067 14.8278 3.45007C14.0672 3.29937 13.1511 3.07097 12.1378 2.66517C11.1245 2.25937 9.93126 1.61177 9.93126 1.61177C9.70816 1.49207 9.55506 1.49237 9.33476 1.61057C9.23506 1.66397 8.66046 1.95927 8.16836 2.19737C7.67626 2.43557 6.76986 2.82187 6.20496 2.99927C5.63996 3.17667 5.28156 3.26897 4.99726 3.32617C4.71296 3.38327 2.66806 3.78057 2.66806 3.78057C2.66806 3.78057 1.93236 3.91117 1.91846 3.93117Z",
    fill: "#E88F00"
  }));
};

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

/***/ "zgiF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Logo = () => {
  return __jsx("svg", {
    width: "148",
    height: "39",
    viewBox: "0 0 148 39",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M44.0759 16.8202C44.0759 16.8202 43.8627 16.9637 43.8472 17.0459C43.8317 17.1288 43.8022 17.1572 43.9061 17.2294C44.01 17.3008 44.0844 17.2831 44.11 17.4566C44.1364 17.6301 44.2054 17.8658 44.2713 17.8942C44.338 17.9218 44.0759 16.8202 44.0759 16.8202Z",
    fill: "#7461BA"
  }), __jsx("path", {
    d: "M53.6645 27.2458C51.4247 28.9777 47.9073 29.135 45.2892 28.2031C44.7263 28.0081 43.9991 27.6895 43.5627 27.2758C43.4363 27.1453 43.3456 26.9595 43.2898 26.7192C43.1851 26.2663 43.089 24.4822 43.5123 24.1521C43.7813 23.9564 44.1294 24.1652 44.3635 24.318C45.9055 25.2937 48.1352 26.0022 49.9424 25.471C51.4046 25.0273 52.3271 23.3645 51.3604 22.1217C50.834 21.4331 49.9137 20.9633 49.1276 20.6224C47.015 19.6989 44.845 18.8845 43.8976 16.6068C42.6323 13.5991 44.3984 10.3143 47.477 9.42765C49.1276 8.95323 50.9712 8.99392 52.6163 9.47294C53.0497 9.60498 53.9599 9.92663 54.277 10.2398C54.5677 10.5285 54.5925 10.7864 54.6157 11.1879C54.6421 11.6186 54.6452 12.1114 54.6103 12.5413C54.594 12.7524 54.5545 13.1523 54.3878 13.3036C54.1614 13.5108 53.8219 13.3097 53.6087 13.1877C52.2954 12.4399 50.4169 11.7598 48.9144 12.2557C47.622 12.6687 47.0243 14.1595 47.8414 15.2335C48.7423 16.4387 51.6837 17.31 53.1373 18.2012C54.1583 18.8208 54.9375 19.6414 55.4011 20.743C56.3245 22.9239 55.5352 25.7704 53.6645 27.2458ZM69.1165 28.0572C69.0397 28.2614 68.9103 28.4334 68.6707 28.4334H59.876C59.1038 28.4334 58.7216 27.9536 58.7216 27.2151V9.94966C58.7216 9.69633 58.9178 9.56813 59.1372 9.4929C59.7721 9.27565 61.5901 9.27488 62.2251 9.4929C62.4445 9.56813 62.6406 9.69633 62.6406 9.94966V25.2453H68.6707C68.9056 25.2453 69.0335 25.3873 69.1165 25.5907C69.3343 26.1112 69.3033 27.5191 69.1165 28.0572ZM87.6975 22.9339C86.9369 25.3297 85.4128 27.1391 83.035 28.0826C80.765 28.98 77.4321 28.983 75.1311 28.1824C72.7913 27.3717 71.3826 25.7128 70.681 23.3899C69.9282 20.9011 69.9181 17.3783 70.7159 14.8972C71.4811 12.5183 73.0184 10.7212 75.3792 9.78384C77.6492 8.87647 80.9332 8.87417 83.242 9.66332C85.5655 10.4617 86.9966 12.1306 87.7176 14.4267C88.4968 16.9162 88.4875 20.4467 87.6975 22.9339ZM83.1459 14.0804C81.4651 11.5065 77.0057 11.6477 75.3032 14.2209C73.8379 16.4341 73.8581 21.5544 75.2629 23.7714C76.8956 26.3277 81.4418 26.1688 83.1102 23.6056C84.5499 21.3978 84.5801 16.2767 83.1459 14.0804ZM107.408 27.08C107.408 27.6819 107.102 28.2008 106.497 28.3835C105.958 28.5424 104.867 28.4633 104.274 28.4633C103.67 28.4633 103.152 28.3889 102.68 27.9874C102.148 27.546 101.702 26.6624 101.393 26.0521C99.2894 22.1271 96.6349 17.7698 95.0145 13.6644C95.0045 13.6644 95.1045 26.6732 95.1045 27.8922C95.1045 28.1386 94.9556 28.2638 94.7409 28.3536C94.1966 28.5816 92.4646 28.5885 91.9251 28.3536C91.7111 28.2722 91.5816 28.1248 91.5816 27.8922V10.8064C91.5816 9.94351 92.129 9.42304 92.9934 9.42304H95.0843C96.0751 9.42304 96.7349 9.61803 97.2969 10.4456C97.4745 10.7012 97.6567 11.0274 97.8443 11.4082C99.929 15.2926 102.142 19.1869 103.96 23.1995C103.976 23.1995 103.884 10.8885 103.884 9.99418C103.884 9.75083 104.063 9.61419 104.269 9.52284C104.773 9.3102 106.586 9.29177 107.074 9.52284C107.278 9.62417 107.408 9.75774 107.408 9.99418V27.08ZM126.85 23.1243C125.945 25.5585 124.239 27.1361 121.731 27.8822C119.07 28.6737 115.559 28.4334 112.75 28.4334C111.974 28.4334 111.591 27.9582 111.591 27.2151V10.6413C111.591 9.89823 111.974 9.42304 112.75 9.42304C115.559 9.42304 119.409 9.14822 122.025 10.0195C124.383 10.801 126.039 12.3501 126.901 14.6669C127.795 17.0828 127.74 20.7207 126.85 23.1243ZM123.179 16.2713C122.759 14.7445 121.828 13.5738 120.35 12.9374C118.924 12.3286 117.029 12.4607 115.479 12.4607V25.3658C116.996 25.3658 118.788 25.491 120.207 24.9544C121.757 24.3802 122.677 23.1995 123.135 21.6557C123.61 20.0452 123.624 17.8942 123.179 16.2713ZM147.401 22.9339C146.64 25.3297 145.117 27.1391 142.738 28.0826C140.469 28.98 137.135 28.983 134.834 28.1824C132.495 27.3717 131.086 25.7128 130.384 23.3899C129.632 20.9011 129.622 17.3783 130.42 14.8972C131.185 12.5183 132.722 10.7212 135.083 9.78384C137.352 8.87647 140.637 8.87417 142.946 9.66332C145.269 10.4617 146.7 12.1306 147.422 14.4267C148.201 16.9162 148.191 20.4467 147.401 22.9339ZM142.85 14.0804C141.167 11.5042 136.708 11.6485 135.007 14.2209C133.54 16.4364 133.55 21.536 134.967 23.7714C136.601 26.3292 141.147 26.1673 142.814 23.6056C144.257 21.3924 144.293 16.2913 142.85 14.0804Z",
    fill: "#494A61"
  }), __jsx("path", {
    d: "M19.2267 37.4181C29.5585 37.4181 37.934 29.1247 37.934 18.8944C37.934 8.66405 29.5585 0.370728 19.2267 0.370728C8.89486 0.370728 0.519287 8.66405 0.519287 18.8944C0.519287 29.1247 8.89486 37.4181 19.2267 37.4181Z",
    fill: "white"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.2229 0C29.8395 0 38.4459 8.52181 38.4459 19.0342C38.4459 29.5465 29.8395 38.0683 19.2229 38.0683C8.60632 38.0683 0 29.5465 0 19.0342C0 8.52181 8.60632 0 19.2229 0ZM22.2008 21.1744L23.8885 8.498C23.8885 8.498 22.6721 6.45833 20.613 6.26258C18.5546 6.06605 16.2715 6.70475 15.5024 8.96474C14.7333 11.2247 14.7085 14.2463 15.552 16.5554C16.3955 18.8645 18.5787 20.363 19.5214 20.7568C20.4642 21.1491 22.2008 21.1744 22.2008 21.1744ZM24.3351 9.12365L22.821 20.756C22.821 20.756 22.5853 21.7141 22.176 21.8369C21.7666 21.9597 19.6199 21.8123 17.9081 20.5841C16.1963 19.3558 14.9558 17.6117 14.4472 15.106C13.9387 12.6004 14.3604 10.8808 14.5829 9.94735C14.807 9.01387 15.0551 8.76745 15.0551 8.76745C15.0551 8.76745 12.6974 9.0868 8.87689 13.7542C5.05557 18.4223 5.79983 22.6967 5.79983 22.6967C5.79983 22.6967 6.49447 21.7632 6.69294 21.6649C6.89141 21.5667 6.74179 22.5001 6.94026 24.4654C7.13873 26.4306 7.80934 28.666 7.80934 28.666L11.9772 28.7405C11.9772 28.7405 11.8036 24.9321 12.2501 24.1706C12.6967 23.4091 13.7883 22.4756 15.6241 22.5247C17.46 22.5738 18.6508 23.459 18.9733 25.0795C19.2958 26.7016 19.2958 28.7643 19.2958 28.7643L23.2404 28.6906C23.2404 28.6906 23.0419 26.9963 22.9683 24.7847C22.8931 22.5738 23.1412 21.0508 24.4064 20.6086C25.6717 20.1665 27.3098 21.6404 27.4835 23.3845C27.6572 25.1286 27.161 27.2167 26.5408 27.4623C25.9205 27.708 25.8461 27.3886 25.3492 27.4876C24.8538 27.5851 24.953 28.2246 25.0515 28.3965C25.1515 28.5685 26.1934 28.8879 28.0789 28.0027C29.9644 27.1184 31.3537 22.9669 31.5025 19.7734C31.6514 16.5799 29.8651 12.8453 27.4835 10.93C25.1018 9.01311 24.3351 9.12365 24.3351 9.12365ZM25.9298 14.6577C26.4896 14.6577 26.9439 15.1014 26.9439 15.6495C26.9439 16.1969 26.4896 16.6414 25.9298 16.6414C25.3693 16.6414 24.9158 16.1969 24.9158 15.6495C24.9158 15.1014 25.3693 14.6577 25.9298 14.6577ZM28.0789 28.0027C29.4767 27.3472 30.6016 24.8952 31.1513 22.3696C31.0769 22.3681 31.0032 22.3658 30.9296 22.3627C27.1338 22.2046 26.7431 21.159 25.9221 20.852C26.7121 21.3356 27.3757 22.309 27.4835 23.3845C27.6572 25.1286 27.161 27.2167 26.5408 27.4623C25.9205 27.708 25.8461 27.3886 25.3492 27.4876C24.8538 27.5851 24.953 28.2246 25.0515 28.3965C25.1515 28.5685 26.1934 28.8879 28.0789 28.0027Z",
    fill: "url(#paint0_linear)"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M38.3682 18.7831C40.9522 18.8898 43.2765 18.5106 43.8463 18.3417C44.6774 18.0953 47.587 17.0658 48.5011 16.3258C49.4151 15.5842 49.1345 16.2736 49.4151 16.4386C49.6958 16.6029 49.9345 16.4287 50.0175 16.6444C50.0291 16.6743 49.9811 16.735 49.8803 16.8209C49.2554 17.3522 46.604 18.8491 43.5447 20.0182C42.0151 20.6032 40.1692 21.1935 38.2589 21.6649C38.3543 21.0408 38.4054 20.3998 38.4054 19.7457C38.4054 19.421 38.3923 19.1001 38.3682 18.7831Z",
    fill: "#6A5EAE"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M49.7804 16.9008C49.7804 16.9008 50.0681 16.6728 50.1254 16.5231C50.182 16.3742 50.0836 16.2345 49.9952 16.2191C49.9068 16.2038 49.7455 16.3205 49.5176 16.1677C49.2889 16.0157 49.2943 15.7823 49.206 15.7048C49.1176 15.628 48.9617 15.5919 48.7067 15.6173C48.4524 15.6434 48.2911 15.7201 48.2911 15.7201C48.2911 15.7201 48.4625 15.8568 48.5291 15.899C48.595 15.942 48.6617 15.9919 48.6617 15.9919L49.806 16.5707L49.7804 16.9008Z",
    fill: "#7461BA"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M29.8468 13.7365C29.8468 13.7365 31.126 16.9875 34.786 18.0108C38.4461 19.0341 43.0156 18.3401 43.8467 18.0929C44.6778 17.8457 47.5874 16.8171 48.5014 16.0763C49.4155 15.3355 49.1348 16.0248 49.4155 16.1891C49.6961 16.3542 49.9349 16.1791 50.0179 16.3956C50.1016 16.6113 47.0982 18.4123 43.5451 19.7703C39.9912 21.1283 34.7263 22.52 30.9298 22.3627C27.1341 22.2045 26.7294 21.1943 25.9223 20.8519C25.7006 20.7575 25.6006 20.6853 25.3284 20.5901C24.7493 20.3898 24.4687 19.8225 24.8206 19.6259C25.2982 19.358 29.8468 13.7365 29.8468 13.7365Z",
    fill: "white"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M44.182 16.8986C44.182 16.8986 43.9122 16.9401 43.9122 17.0736C43.9122 17.208 44.0681 17.1972 44.12 17.3108C44.1719 17.4237 44.1479 17.9411 44.334 17.9373C44.52 17.9334 44.7681 17.8559 44.8806 17.7476C44.993 17.6402 44.7542 17.393 44.7643 17.1205C44.7743 16.8479 44.993 16.6368 44.7643 16.6368C44.5356 16.6368 44.182 16.8986 44.182 16.8986Z",
    fill: "white"
  }), __jsx("defs", null, __jsx("linearGradient", {
    id: "paint0_linear",
    x1: "42.4401",
    y1: "24.0562",
    x2: "-57.2885",
    y2: "-37.875",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#675EAA"
  }), __jsx("stop", {
    offset: "0.145098",
    stopColor: "#835CAA"
  }), __jsx("stop", {
    offset: "0.290196",
    stopColor: "#855CAC"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#A05AA9"
  }))));
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });