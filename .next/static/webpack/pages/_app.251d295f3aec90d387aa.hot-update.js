webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/api/api.tsx":
/*!*************************!*\
  !*** ./src/api/api.tsx ***!
  \*************************/
/*! exports provided: userAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAPI", function() { return userAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // import Cookies from 'universal-cookie';

// const cookies = new Cookies();
// const {token} = cookies.get('token') || {token: ''};
var amazonServer = 'http://54.205.72.116/api/';
var localServer = 'http://192.168.1.60/slondo/public/api/';
var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  withCredentials: true,
  baseURL: amazonServer
}); // const config = {
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         // 'Authorization': `Bearer ${token}`,
//         "Access-Control-Allow-Origin": "*"
//     }
// };

var userAPI = {
  login: function login(phone, password) {
    var form = new FormData();
    form.set('phone', phone);
    form.set('password', password);
    return instance.post("login", form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (res) {
      return res.data;
    })["catch"](function (err) {
      throw err;
    });
  },
  getCategories: function getCategories(lang) {
    return instance.get("categories/all?lang=".concat(lang)).then(function (res) {
      return res.data;
    })["catch"](function (err) {
      throw err;
    });
  },
  getDataForCreateAncmnt: function getDataForCreateAncmnt(ctgryID, subCtgryID, lang) {
    return instance.get("subcategory?parent_id=".concat(ctgryID, "&lang=").concat(lang, "&child_id=").concat(subCtgryID)).then(function (res) {
      return res.data;
    })["catch"](function (err) {
      throw err;
    });
  },
  getCards: function getCards(itemsPerPage, page, type, lang) {
    return instance.get("ads/all?itemsPerPage=".concat(itemsPerPage, "&page=").concat(page, "&type=").concat(type, "&lang=").concat(lang)).then(function (res) {
      return res.data;
    })["catch"](function (err) {
      throw err;
    });
  },
  getAddById: function getAddById(ads_id, lang) {
    return instance.get("getAddById?ads_id=".concat(ads_id, "&lang=").concat(lang)).then(function (res) {
      return res.data;
    })["catch"](function (err) {
      throw err;
    });
  },
  getLocations: function getLocations(lang) {
    return instance.get("location?lang=".concat(lang)).then(function (res) {
      return res.data;
    })["catch"](function (err) {
      throw err;
    });
  },
  createAdvrt: function createAdvrt(data) {
    return instance.post("regular/ads/new", data).then(function (res) {
      return res.data;
    })["catch"](function (err) {
      throw err;
    });
  },
  getAncmntsTypes: function getAncmntsTypes(lang) {
    return instance.get("ads/type?lang=".concat(lang)).then(function (res) {
      return res.data;
    })["catch"](function (err) {
      throw err;
    });
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9hcGkudHN4Il0sIm5hbWVzIjpbImFtYXpvblNlcnZlciIsImxvY2FsU2VydmVyIiwiaW5zdGFuY2UiLCJBeGlvcyIsImNyZWF0ZSIsIndpdGhDcmVkZW50aWFscyIsImJhc2VVUkwiLCJ1c2VyQVBJIiwibG9naW4iLCJwaG9uZSIsInBhc3N3b3JkIiwiZm9ybSIsIkZvcm1EYXRhIiwic2V0IiwicG9zdCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImdldENhdGVnb3JpZXMiLCJsYW5nIiwiZ2V0IiwiZ2V0RGF0YUZvckNyZWF0ZUFuY21udCIsImN0Z3J5SUQiLCJzdWJDdGdyeUlEIiwiZ2V0Q2FyZHMiLCJpdGVtc1BlclBhZ2UiLCJwYWdlIiwidHlwZSIsImdldEFkZEJ5SWQiLCJhZHNfaWQiLCJnZXRMb2NhdGlvbnMiLCJjcmVhdGVBZHZydCIsImdldEFuY21udHNUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7O0FBS0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRywyQkFBckI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsd0NBQXBCO0FBRUEsSUFBTUMsUUFBUSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDMUJDLGlCQUFlLEVBQUUsSUFEUztBQUUxQkMsU0FBTyxFQUFFTjtBQUZpQixDQUFiLENBQWpCLEMsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNTyxPQUFPLEdBQUc7QUFDbkJDLE9BQUssRUFBRSxlQUFDQyxLQUFELEVBQWdCQyxRQUFoQixFQUF1RDtBQUMxRCxRQUFNQyxJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFiO0FBQ0FELFFBQUksQ0FBQ0UsR0FBTCxDQUFTLE9BQVQsRUFBa0JKLEtBQWxCO0FBQ0FFLFFBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQVQsRUFBcUJILFFBQXJCO0FBQ0Es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QUFOO0FBQ0gsS0FKRSxDQUFQO0FBS0g7QUE5RGtCLENBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjUxZDI5NWYzYWVjOTBkMzg3YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5pbXBvcnQge0xvY2F0aW9uc0RhdGFUeXBlc30gZnJvbSBcIkByb290L2ludGVyZmFjZXMvTG9jYXRpb25zXCI7XHJcbmltcG9ydCB7Q2F0ZWdvcnlUeXBlfSBmcm9tIFwiQHJvb3QvaW50ZXJmYWNlcy9DYXRlZ29yaWVzXCI7XHJcblxyXG5cclxuLy8gY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbi8vIGNvbnN0IHt0b2tlbn0gPSBjb29raWVzLmdldCgndG9rZW4nKSB8fCB7dG9rZW46ICcnfTtcclxuXHJcbmNvbnN0IGFtYXpvblNlcnZlciA9ICdodHRwOi8vNTQuMjA1LjcyLjExNi9hcGkvJztcclxuY29uc3QgbG9jYWxTZXJ2ZXIgPSAnaHR0cDovLzE5Mi4xNjguMS42MC9zbG9uZG8vcHVibGljL2FwaS8nO1xyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBBeGlvcy5jcmVhdGUoe1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgYmFzZVVSTDogYW1hem9uU2VydmVyXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgY29uZmlnID0ge1xyXG4vLyAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbi8vICAgICAgICAgLy8gJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuLy8gICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIlxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJBUEkgPSB7XHJcbiAgICBsb2dpbjogKHBob25lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+ID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybS5zZXQoJ3Bob25lJywgcGhvbmUpO1xyXG4gICAgICAgIGZvcm0uc2V0KCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VcclxuICAgICAgICAgICAgLnBvc3QoYGxvZ2luYCwgZm9ybSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSd9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRDYXRlZ29yaWVzOiAobGFuZzogc3RyaW5nKTogUHJvbWlzZTxDYXRlZ29yeVR5cGVbXT4gPT4ge1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5nZXQoYGNhdGVnb3JpZXMvYWxsP2xhbmc9JHtsYW5nfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RGF0YUZvckNyZWF0ZUFuY21udDogKGN0Z3J5SUQ6IG51bWJlciwgc3ViQ3RncnlJRDogbnVtYmVyLCBsYW5nOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+ID0+IHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuZ2V0KGBzdWJjYXRlZ29yeT9wYXJlbnRfaWQ9JHtjdGdyeUlEfSZsYW5nPSR7bGFuZ30mY2hpbGRfaWQ9JHtzdWJDdGdyeUlEfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q2FyZHM6IChpdGVtc1BlclBhZ2U6IG51bWJlciwgcGFnZTogbnVtYmVyLCB0eXBlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmdldChgYWRzL2FsbD9pdGVtc1BlclBhZ2U9JHtpdGVtc1BlclBhZ2V9JnBhZ2U9JHtwYWdlfSZ0eXBlPSR7dHlwZX0mbGFuZz0ke2xhbmd9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldEFkZEJ5SWQ6IChhZHNfaWQ6IHN0cmluZyB8IHN0cmluZ1tdLCBsYW5nOiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5nZXQoYGdldEFkZEJ5SWQ/YWRzX2lkPSR7YWRzX2lkfSZsYW5nPSR7bGFuZ31gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0TG9jYXRpb25zOiAobGFuZzogc3RyaW5nKTogUHJvbWlzZTxMb2NhdGlvbnNEYXRhVHlwZXM+ID0+IHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuZ2V0KGBsb2NhdGlvbj9sYW5nPSR7bGFuZ31gKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUFkdnJ0OiAoZGF0YTogYW55KTogUHJvbWlzZTxMb2NhdGlvbnNEYXRhVHlwZXM+ID0+IHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UucG9zdChgcmVndWxhci9hZHMvbmV3YCwgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRocm93IGVyclxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRBbmNtbnRzVHlwZXM6IChsYW5nOiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5nZXQoYGFkcy90eXBlP2xhbmc9JHtsYW5nfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=