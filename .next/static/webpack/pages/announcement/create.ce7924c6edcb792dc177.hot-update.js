webpackHotUpdate_N_E("pages/announcement/create",{

/***/ "./src/components/announcement/create_ancmnt/CreateAncmntContainer.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/announcement/create_ancmnt/CreateAncmntContainer.tsx ***!
  \*****************************************************************************/
/*! exports provided: CreateAncmntContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAncmntContainer", function() { return CreateAncmntContainer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _root_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @root/i18n */ "./i18n.tsx");
/* harmony import */ var _src_api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/api/api */ "./src/api/api.tsx");
/* harmony import */ var _CreateAncmnt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreateAncmnt */ "./src/components/announcement/create_ancmnt/CreateAncmnt.tsx");
/* harmony import */ var _src_components_MainLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/components/MainLayout */ "./src/components/MainLayout.tsx");
/* harmony import */ var _ancmnt_form_AncmntFormContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ancmnt_form/AncmntFormContainer */ "./src/components/announcement/create_ancmnt/ancmnt_form/AncmntFormContainer.tsx");
/* harmony import */ var _root_src_redux_slices_errorSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @root/src/redux/slices/errorSlice */ "./src/redux/slices/errorSlice.ts");
/* harmony import */ var _src_components_announcement_ancmnt_types_page_AncmntTypesPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/components/announcement/ancmnt_types_page/AncmntTypesPage */ "./src/components/announcement/ancmnt_types_page/AncmntTypesPage.tsx");
/* harmony import */ var _src_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/helpers */ "./src/helpers.ts");
/* harmony import */ var _ancmnt_header_AncmntHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ancmnt_header/AncmntHeader */ "./src/components/announcement/create_ancmnt/ancmnt_header/AncmntHeader.tsx");
/* harmony import */ var _src_components_announcement_create_ancmnt_ancmnt_form_success_ancmnt_SuccessAncmnt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/components/announcement/create_ancmnt/ancmnt_form/success_ancmnt/SuccessAncmnt */ "./src/components/announcement/create_ancmnt/ancmnt_form/success_ancmnt/SuccessAncmnt.tsx");




var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var steps = ['Тип объявления', 'Категория', 'Заполнение', 'Проверка'];
var initAncmntTypeStates = {
  isFetch: false,
  types: [{
    id: 1,
    name: "Обычный",
    currency: [{
      id: 1,
      name: "уе"
    }, {
      id: 2,
      name: "sum"
    }],
    expired: [{
      id: 3,
      expiration_at: 720
    }],
    image: {
      url: '/img/adv-background.png'
    }
  }, {
    id: 2,
    name: "Аукцион",
    currency: [{
      id: 3,
      name: "sum"
    }],
    expired: [{
      id: 1,
      expiration_at: 2
    }, {
      id: 2,
      expiration_at: 720
    }],
    image: {
      url: '/img/lot-background.png'
    }
  }, {
    id: 3,
    name: "Продвинутый аукцион",
    currency: [{
      id: 4,
      name: "sum"
    }],
    expired: [{
      id: 4,
      expiration_at: 2
    }, {
      id: 5,
      expiration_at: 720
    }],
    image: {
      url: '/img/advanced-lot-background.png'
    }
  }]
};
var CreateAncmntContainer = function CreateAncmntContainer(_ref) {
  _s();

  var t = _ref.t;
  var lang = _root_i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].language;
  var initAncmntTypeState = {
    id: null,
    name: '',
    currency: [{
      id: null,
      name: ''
    }],
    expired: [{
      id: null,
      expiration_at: null
    }],
    image: {
      url: ''
    }
  };
  var initCreateAncmntState = {
    isFetch: false,
    error: null,
    category: {
      id: null,
      name: '',
      image: {
        url: {
          "default": ''
        }
      },
      icon: {
        id: null,
        url: ''
      },
      model: [],
      has_auction: null
    }
  };
  var categoriesList = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (_ref2) {
    var categories = _ref2.categories;
    return Object(_src_helpers__WEBPACK_IMPORTED_MODULE_12__["categoryDataNormalization"])(categories.list); // return categories.list;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initAncmntTypeState),
      ancmntType = _useState[0],
      setAncmntType = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initAncmntTypeStates),
      ancmntTypes = _useState2[0],
      setAncmntTypes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initCreateAncmntState),
      createAncmnt = _useState3[0],
      setCreateAncmnt = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      subLvlCtgrs = _useState4[0],
      setSubLvlCtgrs = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      activeStep = _useState5[0],
      setActiveStep = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      searchTxt = _useState6[0],
      setSearchTxt = _useState6[1];

  var handleNextStep = function handleNextStep() {
    setActiveStep(function (prevStep) {
      return prevStep + 1;
    });
  };

  var handlePrevStep = function handlePrevStep() {
    setActiveStep(function (prevStep) {
      return prevStep - 1;
    });
  };

  var handleResetSteps = function handleResetSteps() {
    setActiveStep(0);
  }; // const setAncmntsTypes = async () => {
  //     try {
  //         const types = userAPI.getAncmntsTypes(lang);
  //         await setFetchedData(
  //             ancmntTypes,
  //             setAncmntTypes,
  //             {types},
  //         );
  //     } catch (e) {
  //         dispatch(setErrorMsgAction(e.message));
  //         setAncmntTypes({...ancmntTypes, isFetch: false});
  //     }
  // };


  var handleAncmntType = function handleAncmntType(selectedAncmntType) {
    return function () {
      handleNextStep();
      setAncmntType(selectedAncmntType);
    };
  };

  var handleSearch = function handleSearch(_ref3) {
    var target = _ref3.target;
    setSearchTxt(target.value);
  };

  var setFoundCategoriesChilds = function setFoundCategoriesChilds() {
    var model = !!searchTxt ? Object(_src_helpers__WEBPACK_IMPORTED_MODULE_12__["categorySearchHelper"])(searchTxt, categoriesList) : [];
    setCreateAncmnt(_objectSpread(_objectSpread({}, createAncmnt), {}, {
      category: _objectSpread(_objectSpread({}, initCreateAncmntState.category), {}, {
        model: model
      })
    }));
  };

  var handleCategory = function handleCategory(category) {
    return function () {
      try {
        var list = [];

        if (category.type) {
          list = category.type;
        } else if (category.model) {
          list = category.model;
          setCreateAncmnt(category);
        }

        setSubLvlCtgrs(list);
      } catch (e) {
        dispatch(Object(_root_src_redux_slices_errorSlice__WEBPACK_IMPORTED_MODULE_10__["setErrorMsgAction"])(e.message));
        setCreateAncmnt(_objectSpread(_objectSpread({}, createAncmnt), {}, {
          isFetch: false
        }));
      }
    };
  };

  var handleBackCtgr = function handleBackCtgr() {
    setSubLvlCtgrs(createAncmnt.category.model);
  };

  var handleSubCategory = function handleSubCategory(parent, child_id, name) {
    return /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setCreateAncmnt(_objectSpread(_objectSpread({}, createAncmnt), {}, {
                isFetch: true
              }));
              _context.next = 4;
              return _src_api_api__WEBPACK_IMPORTED_MODULE_6__["userAPI"].getDataForCreateAncmnt(parent.id, child_id, lang);

            case 4:
              data = _context.sent;
              setCreateAncmnt(_objectSpread(_objectSpread({}, createAncmnt), {}, {
                isFetch: false // subCategory: {
                //     id: child_id,
                //     name,
                //     data,
                //     parent
                // }

              }));
              handleNextStep();
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              dispatch(Object(_root_src_redux_slices_errorSlice__WEBPACK_IMPORTED_MODULE_10__["setErrorMsgAction"])(_context.t0.message));
              setCreateAncmnt(_objectSpread(_objectSpread({}, createAncmnt), {}, {
                isFetch: false
              }));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));
  };

  var handleResetCreateData = function handleResetCreateData() {
    setSearchTxt('');
    setCreateAncmnt(initCreateAncmntState);
  };

  var handleResetAncmntType = function handleResetAncmntType() {
    handleResetSteps();
    handleResetCreateData();
    setAncmntType(initAncmntTypeState);
  };

  var handleBackBtn = function handleBackBtn() {
    handlePrevStep();

    switch (activeStep) {
      case 1:
        handleResetAncmntType();
        break;

      case 2:
        handleResetCreateData();
    }
  };

  var setCreateAncmntByLang = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function setCreateAncmntByLang() {
      return _ref5.apply(this, arguments);
    };
  }();

  var renderPageByActiveStep = function renderPageByActiveStep() {
    switch (activeStep) {
      case 0:
        return __jsx(_src_components_announcement_ancmnt_types_page_AncmntTypesPage__WEBPACK_IMPORTED_MODULE_11__["AncmntTypesPage"], {
          ancmntTypes: ancmntTypes,
          handleAncmntType: handleAncmntType
        });

      case 1:
        return __jsx(_CreateAncmnt__WEBPACK_IMPORTED_MODULE_7__["CreateAncmnt"], {
          ancmntType: ancmntType,
          createAncmnt: createAncmnt,
          categoriesList: categoriesList,
          subLvlCtgrs: subLvlCtgrs,
          searchTxt: searchTxt,
          handleBackCtgr: handleBackCtgr,
          handleSearch: handleSearch,
          handleCategory: handleCategory,
          handleSubCategory: handleSubCategory
        });

      case 4:
        return __jsx(_src_components_announcement_create_ancmnt_ancmnt_form_success_ancmnt_SuccessAncmnt__WEBPACK_IMPORTED_MODULE_14__["SuccessAncmnt"], {
          handleCreateNewAncmnt: handleResetAncmntType
        });

      default:
        return __jsx(_ancmnt_form_AncmntFormContainer__WEBPACK_IMPORTED_MODULE_9__["AncmntFormContainer"], {
          t: t,
          activeStep: activeStep,
          ancmntType: ancmntType,
          createAncmnt: createAncmnt,
          handleNextStep: handleNextStep
        });
    }
  }; // useEffect(() => {
  //    setAncmntsTypes();
  // }, []);
  // useEffect(() => {
  //     setCreateAncmntByLang();
  // }, [categoriesList[0].name]);
  // useEffect(() => {
  //     setFoundCategoriesChilds();
  // }, [searchTxt]);
  // console.log(createAncmnt)
  // console.log(categoriesList)


  return __jsx(_src_components_MainLayout__WEBPACK_IMPORTED_MODULE_8__["MainLayout"], null, activeStep !== 0 && activeStep !== 4 && __jsx(_ancmnt_header_AncmntHeader__WEBPACK_IMPORTED_MODULE_13__["AncmntHeader"], {
    steps: steps,
    activeStep: activeStep,
    handleBackBtn: handleBackBtn
  }), renderPageByActiveStep());
};

_s(CreateAncmntContainer, "CAYN6df+m2xSADaDYV3OvshmEVs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = CreateAncmntContainer;

var _c;

$RefreshReg$(_c, "CreateAncmntContainer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYW5ub3VuY2VtZW50L2NyZWF0ZV9hbmNtbnQvQ3JlYXRlQW5jbW50Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzdGVwcyIsImluaXRBbmNtbnRUeXBlU3RhdGVzIiwiaXNGZXRjaCIsInR5cGVzIiwiaWQiLCJuYW1lIiwiY3VycmVuY3kiLCJleHBpcmVkIiwiZXhwaXJhdGlvbl9hdCIsImltYWdlIiwidXJsIiwiQ3JlYXRlQW5jbW50Q29udGFpbmVyIiwidCIsImxhbmciLCJpMThuIiwibGFuZ3VhZ2UiLCJpbml0QW5jbW50VHlwZVN0YXRlIiwiaW5pdENyZWF0ZUFuY21udFN0YXRlIiwiZXJyb3IiLCJjYXRlZ29yeSIsImljb24iLCJtb2RlbCIsImhhc19hdWN0aW9uIiwiY2F0ZWdvcmllc0xpc3QiLCJ1c2VTZWxlY3RvciIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeURhdGFOb3JtYWxpemF0aW9uIiwibGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImFuY21udFR5cGUiLCJzZXRBbmNtbnRUeXBlIiwiYW5jbW50VHlwZXMiLCJzZXRBbmNtbnRUeXBlcyIsImNyZWF0ZUFuY21udCIsInNldENyZWF0ZUFuY21udCIsInN1Ykx2bEN0Z3JzIiwic2V0U3ViTHZsQ3RncnMiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInNlYXJjaFR4dCIsInNldFNlYXJjaFR4dCIsImhhbmRsZU5leHRTdGVwIiwicHJldlN0ZXAiLCJoYW5kbGVQcmV2U3RlcCIsImhhbmRsZVJlc2V0U3RlcHMiLCJoYW5kbGVBbmNtbnRUeXBlIiwic2VsZWN0ZWRBbmNtbnRUeXBlIiwiaGFuZGxlU2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRGb3VuZENhdGVnb3JpZXNDaGlsZHMiLCJjYXRlZ29yeVNlYXJjaEhlbHBlciIsImhhbmRsZUNhdGVnb3J5IiwidHlwZSIsImUiLCJzZXRFcnJvck1zZ0FjdGlvbiIsIm1lc3NhZ2UiLCJoYW5kbGVCYWNrQ3RnciIsImhhbmRsZVN1YkNhdGVnb3J5IiwicGFyZW50IiwiY2hpbGRfaWQiLCJ1c2VyQVBJIiwiZ2V0RGF0YUZvckNyZWF0ZUFuY21udCIsImRhdGEiLCJoYW5kbGVSZXNldENyZWF0ZURhdGEiLCJoYW5kbGVSZXNldEFuY21udFR5cGUiLCJoYW5kbGVCYWNrQnRuIiwic2V0Q3JlYXRlQW5jbW50QnlMYW5nIiwicmVuZGVyUGFnZUJ5QWN0aXZlU3RlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxnQkFBRCxFQUFtQixXQUFuQixFQUFnQyxZQUFoQyxFQUE4QyxVQUE5QyxDQUFkO0FBRUEsSUFBTUMsb0JBQW9CLEdBQUc7QUFDekJDLFNBQU8sRUFBRSxLQURnQjtBQUV6QkMsT0FBSyxFQUFFLENBQ0g7QUFDSUMsTUFBRSxFQUFFLENBRFI7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsWUFBUSxFQUFFLENBQ047QUFDSUYsUUFBRSxFQUFFLENBRFI7QUFFSUMsVUFBSSxFQUFFO0FBRlYsS0FETSxFQUtOO0FBQ0lELFFBQUUsRUFBRSxDQURSO0FBRUlDLFVBQUksRUFBRTtBQUZWLEtBTE0sQ0FIZDtBQWFJRSxXQUFPLEVBQUUsQ0FDTDtBQUNJSCxRQUFFLEVBQUUsQ0FEUjtBQUVJSSxtQkFBYSxFQUFFO0FBRm5CLEtBREssQ0FiYjtBQW1CSUMsU0FBSyxFQUFFO0FBQ0hDLFNBQUcsRUFBRTtBQURGO0FBbkJYLEdBREcsRUF3Qkg7QUFDSU4sTUFBRSxFQUFFLENBRFI7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsWUFBUSxFQUFFLENBQ047QUFDSUYsUUFBRSxFQUFFLENBRFI7QUFFSUMsVUFBSSxFQUFFO0FBRlYsS0FETSxDQUhkO0FB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MTc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7aTE4bn0gZnJvbSBcIkByb290L2kxOG5cIjtcclxuaW1wb3J0IHt1c2VyQVBJfSBmcm9tICdAc3JjL2FwaS9hcGknO1xyXG5pbXBvcnQge0NyZWF0ZUFuY21udH0gZnJvbSBcIi4vQ3JlYXRlQW5jbW50XCI7XHJcbmltcG9ydCB7Um9vdFN0YXRlfSBmcm9tIFwiQHNyYy9yZWR1eC9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQge01haW5MYXlvdXR9IGZyb20gXCJAc3JjL2NvbXBvbmVudHMvTWFpbkxheW91dFwiO1xyXG5pbXBvcnQge1dpdGhUfSBmcm9tIFwiaTE4bmV4dFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ3JlYXRlQW5jbW50U3RhdGUsXHJcbiAgICBBbmNtbnRUeXBlXHJcbn0gZnJvbSBcIkByb290L2ludGVyZmFjZXMvQW5ub3VuY2VtZW50XCI7XHJcbmltcG9ydCB7QW5jbW50Rm9ybUNvbnRhaW5lcn0gZnJvbSBcIi4vYW5jbW50X2Zvcm0vQW5jbW50Rm9ybUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge3NldEVycm9yTXNnQWN0aW9ufSBmcm9tICdAcm9vdC9zcmMvcmVkdXgvc2xpY2VzL2Vycm9yU2xpY2UnO1xyXG5pbXBvcnQge0FuY21udFR5cGVzUGFnZX0gZnJvbSBcIkBzcmMvY29tcG9uZW50cy9hbm5vdW5jZW1lbnQvYW5jbW50X3R5cGVzX3BhZ2UvQW5jbW50VHlwZXNQYWdlXCI7XHJcbmltcG9ydCB7Y2F0ZWdvcnlEYXRhTm9ybWFsaXphdGlvbiwgY2F0ZWdvcnlTZWFyY2hIZWxwZXJ9IGZyb20gXCJAc3JjL2hlbHBlcnNcIjtcclxuaW1wb3J0IHtBbmNtbnRIZWFkZXJ9IGZyb20gJy4vYW5jbW50X2hlYWRlci9BbmNtbnRIZWFkZXInO1xyXG5pbXBvcnQge1N1Y2Nlc3NBbmNtbnR9IGZyb20gXCJAc3JjL2NvbXBvbmVudHMvYW5ub3VuY2VtZW50L2NyZWF0ZV9hbmNtbnQvYW5jbW50X2Zvcm0vc3VjY2Vzc19hbmNtbnQvU3VjY2Vzc0FuY21udFwiO1xyXG5pbXBvcnQge1N1Ykx2bEN0Z3JzVHlwZX0gZnJvbSBcIkByb290L2ludGVyZmFjZXMvQ2F0ZWdvcmllc1wiO1xyXG5cclxuXHJcbmNvbnN0IHN0ZXBzID0gWyfQotC40L8g0L7QsdGK0Y/QstC70LXQvdC40Y8nLCAn0JrQsNGC0LXQs9C+0YDQuNGPJywgJ9CX0LDQv9C+0LvQvdC10L3QuNC1JywgJ9Cf0YDQvtCy0LXRgNC60LAnXTtcclxuXHJcbmNvbnN0IGluaXRBbmNtbnRUeXBlU3RhdGVzID0ge1xyXG4gICAgaXNGZXRjaDogZmFsc2UsXHJcbiAgICB0eXBlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6IFwi0J7QsdGL0YfQvdGL0LlcIixcclxuICAgICAgICAgICAgY3VycmVuY3k6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcItGD0LVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN1bVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGV4cGlyZWQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uX2F0OiA3MjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9pbWcvYWR2LWJhY2tncm91bmQucG5nJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBuYW1lOiBcItCQ0YPQutGG0LjQvtC9XCIsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdW1cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBleHBpcmVkOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbl9hdDogMlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uX2F0OiA3MjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9pbWcvbG90LWJhY2tncm91bmQucG5nJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICBuYW1lOiBcItCf0YDQvtC00LLQuNC90YPRgtGL0Lkg0LDRg9C60YbQuNC+0L1cIixcclxuICAgICAgICAgICAgY3VycmVuY3k6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN1bVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGV4cGlyZWQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uX2F0OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyYXRpb25fYXQ6IDcyMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2ltZy9hZHZhbmNlZC1sb3QtYmFja2dyb3VuZC5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlQW5jbW50Q29udGFpbmVyOiBGQzxXaXRoVD4gPSAoe3R9KSA9PiB7XHJcbiAgICBjb25zdCBsYW5nID0gaTE4bi5sYW5ndWFnZTtcclxuXHJcbiAgICBjb25zdCBpbml0QW5jbW50VHlwZVN0YXRlID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGN1cnJlbmN5OiBbe1xyXG4gICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgbmFtZTogJydcclxuICAgICAgICB9XSxcclxuICAgICAgICBleHBpcmVkOiBbe1xyXG4gICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgZXhwaXJhdGlvbl9hdDogbnVsbFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogJydcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRDcmVhdGVBbmNtbnRTdGF0ZSA9IHtcclxuICAgICAgICBpc0ZldGNoOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHVybDogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kZWw6IFtdLFxyXG4gICAgICAgICAgICBoYXNfYXVjdGlvbjogbnVsbCxcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3JpZXNMaXN0ID0gdXNlU2VsZWN0b3IoKHtjYXRlZ29yaWVzfTogUm9vdFN0YXRlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNhdGVnb3J5RGF0YU5vcm1hbGl6YXRpb24oY2F0ZWdvcmllcy5saXN0KTtcclxuICAgICAgICAvLyByZXR1cm4gY2F0ZWdvcmllcy5saXN0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IFthbmNtbnRUeXBlLCBzZXRBbmNtbnRUeXBlXSA9IHVzZVN0YXRlPEFuY21udFR5cGU+KGluaXRBbmNtbnRUeXBlU3RhdGUpO1xyXG5cclxuICAgIGNvbnN0IFthbmNtbnRUeXBlcywgc2V0QW5jbW50VHlwZXNdID0gdXNlU3RhdGU8eyBpc0ZldGNoOiBib29sZWFuLCB0eXBlczogQW5jbW50VHlwZVtdIH0+KGluaXRBbmNtbnRUeXBlU3RhdGVzKTtcclxuXHJcbiAgICBjb25zdCBbY3JlYXRlQW5jbW50LCBzZXRDcmVhdGVBbmNtbnRdID0gdXNlU3RhdGU8Q3JlYXRlQW5jbW50U3RhdGU+KGluaXRDcmVhdGVBbmNtbnRTdGF0ZSk7XHJcblxyXG4gICAgY29uc3QgW3N1Ykx2bEN0Z3JzLCBzZXRTdWJMdmxDdGdyc10gPSB1c2VTdGF0ZTxTdWJMdmxDdGdyc1R5cGVbXT4oW10pO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFtzZWFyY2hUeHQsIHNldFNlYXJjaFR4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTmV4dFN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlU3RlcCgocHJldlN0ZXApID0+IHByZXZTdGVwICsgMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByZXZTdGVwID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZTdGVwKSA9PiBwcmV2U3RlcCAtIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXNldFN0ZXBzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZVN0ZXAoMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IHNldEFuY21udHNUeXBlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICBjb25zdCB0eXBlcyA9IHVzZXJBUEkuZ2V0QW5jbW50c1R5cGVzKGxhbmcpO1xyXG4gICAgLy8gICAgICAgICBhd2FpdCBzZXRGZXRjaGVkRGF0YShcclxuICAgIC8vICAgICAgICAgICAgIGFuY21udFR5cGVzLFxyXG4gICAgLy8gICAgICAgICAgICAgc2V0QW5jbW50VHlwZXMsXHJcbiAgICAvLyAgICAgICAgICAgICB7dHlwZXN9LFxyXG4gICAgLy8gICAgICAgICApO1xyXG4gICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vICAgICAgICAgZGlzcGF0Y2goc2V0RXJyb3JNc2dBY3Rpb24oZS5tZXNzYWdlKSk7XHJcbiAgICAvLyAgICAgICAgIHNldEFuY21udFR5cGVzKHsuLi5hbmNtbnRUeXBlcywgaXNGZXRjaDogZmFsc2V9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFuY21udFR5cGUgPSAoc2VsZWN0ZWRBbmNtbnRUeXBlKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlTmV4dFN0ZXAoKTtcclxuICAgICAgICBzZXRBbmNtbnRUeXBlKHNlbGVjdGVkQW5jbW50VHlwZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICh7dGFyZ2V0fSkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaFR4dCh0YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRGb3VuZENhdGVnb3JpZXNDaGlsZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSAhIXNlYXJjaFR4dFxyXG4gICAgICAgICAgICA/IGNhdGVnb3J5U2VhcmNoSGVscGVyKHNlYXJjaFR4dCwgY2F0ZWdvcmllc0xpc3QpXHJcbiAgICAgICAgICAgIDogW107XHJcblxyXG4gICAgICAgIHNldENyZWF0ZUFuY21udCh7XHJcbiAgICAgICAgICAgIC4uLmNyZWF0ZUFuY21udCxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgIC4uLmluaXRDcmVhdGVBbmNtbnRTdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIG1vZGVsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+ICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IGNhdGVnb3J5LnR5cGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2F0ZWdvcnkubW9kZWwpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSBjYXRlZ29yeS5tb2RlbDtcclxuICAgICAgICAgICAgICAgIHNldENyZWF0ZUFuY21udChjYXRlZ29yeSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTdWJMdmxDdGdycyhsaXN0KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEVycm9yTXNnQWN0aW9uKGUubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBzZXRDcmVhdGVBbmNtbnQoey4uLmNyZWF0ZUFuY21udCwgaXNGZXRjaDogZmFsc2V9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJhY2tDdGdyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFN1Ykx2bEN0Z3JzKGNyZWF0ZUFuY21udC5jYXRlZ29yeS5tb2RlbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1YkNhdGVnb3J5ID0gKHBhcmVudCwgY2hpbGRfaWQsIG5hbWUpID0+IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzZXRDcmVhdGVBbmNtbnQoe1xyXG4gICAgICAgICAgICAgICAgLi4uY3JlYXRlQW5jbW50LFxyXG4gICAgICAgICAgICAgICAgaXNGZXRjaDogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdXNlckFQSS5nZXREYXRhRm9yQ3JlYXRlQW5jbW50KHBhcmVudC5pZCwgY2hpbGRfaWQsIGxhbmcpO1xyXG5cclxuICAgICAgICAgICAgc2V0Q3JlYXRlQW5jbW50KHtcclxuICAgICAgICAgICAgICAgIC4uLmNyZWF0ZUFuY21udCxcclxuICAgICAgICAgICAgICAgIGlzRmV0Y2g6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gc3ViQ2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZDogY2hpbGRfaWQsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHBhcmVudFxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaGFuZGxlTmV4dFN0ZXAoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEVycm9yTXNnQWN0aW9uKGUubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBzZXRDcmVhdGVBbmNtbnQoey4uLmNyZWF0ZUFuY21udCwgaXNGZXRjaDogZmFsc2V9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlc2V0Q3JlYXRlRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hUeHQoJycpO1xyXG4gICAgICAgIHNldENyZWF0ZUFuY21udChpbml0Q3JlYXRlQW5jbW50U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXNldEFuY21udFR5cGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlUmVzZXRTdGVwcygpO1xyXG4gICAgICAgIGhhbmRsZVJlc2V0Q3JlYXRlRGF0YSgpO1xyXG4gICAgICAgIHNldEFuY21udFR5cGUoaW5pdEFuY21udFR5cGVTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJhY2tCdG4gPSAoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlUHJldlN0ZXAoKTtcclxuICAgICAgICBzd2l0Y2ggKGFjdGl2ZVN0ZXApIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlUmVzZXRBbmNtbnRUeXBlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlUmVzZXRDcmVhdGVEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRDcmVhdGVBbmNtbnRCeUxhbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgW2N0Z3JCeUxhbmddID0gY2F0ZWdvcmllc0xpc3QuZmlsdGVyKGN0Z3IgPT4gY3Rnci5pZCA9PT0gc3ViQ2F0ZWdvcnkucGFyZW50LmlkKTtcclxuICAgICAgICAvLyBjdGdyQnlMYW5nICYmIHNldENyZWF0ZUFuY21udCh7XHJcbiAgICAgICAgLy8gICAgIC4uLmNyZWF0ZUFuY21udCxcclxuICAgICAgICAvLyAgICAgY2F0ZWdvcnk6IGN0Z3JCeUxhbmcsXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gaWYgKHN1YkNhdGVnb3J5LmlkICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IFtzdWJDdGdyQnlMYW5nXSA9IGN0Z3JCeUxhbmcubW9kZWwuZmlsdGVyKHN1YkN0Z3IgPT4gc3ViQ3Rnci5pZCA9PT0gc3ViQ2F0ZWdvcnkuaWQpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHRyeSB7XHJcbiAgICAgICAgLy8gICAgICAgICBzZXRDcmVhdGVBbmNtbnQoe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC4uLmNyZWF0ZUFuY21udCxcclxuICAgICAgICAvLyAgICAgICAgICAgICBpc0ZldGNoOiB0cnVlXHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHVzZXJBUEkuZ2V0QWREYXRhRm9yQ3JlYXRlQW5jbW50KHN1YkNhdGVnb3J5LnBhcmVudC5pZCwgc3ViQ2F0ZWdvcnkuaWQsIGxhbmcpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBzZXRDcmVhdGVBbmNtbnQoe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC4uLmNyZWF0ZUFuY21udCxcclxuICAgICAgICAvLyAgICAgICAgICAgICBpc0ZldGNoOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBzdWJDYXRlZ29yeToge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAuLi5zdWJDdGdyQnlMYW5nLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyAgICAgICAgIGRpc3BhdGNoKHNldEVycm9yTXNnQWN0aW9uKGUubWVzc2FnZSkpO1xyXG4gICAgICAgIC8vICAgICAgICAgc2V0Q3JlYXRlQW5jbW50KHsuLi5jcmVhdGVBbmNtbnQsIGlzRmV0Y2g6IGZhbHNlfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclBhZ2VCeUFjdGl2ZVN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3RpdmVTdGVwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QW5jbW50VHlwZXNQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgYW5jbW50VHlwZXM9e2FuY21udFR5cGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUFuY21udFR5cGU9e2hhbmRsZUFuY21udFR5cGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPENyZWF0ZUFuY21udFxyXG4gICAgICAgICAgICAgICAgICAgIGFuY21udFR5cGU9e2FuY21udFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQW5jbW50PXtjcmVhdGVBbmNtbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllc0xpc3Q9e2NhdGVnb3JpZXNMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ykx2bEN0Z3JzPXtzdWJMdmxDdGdyc31cclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUeHQ9e3NlYXJjaFR4dH1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVCYWNrQ3Rncj17aGFuZGxlQmFja0N0Z3J9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2VhcmNoPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2F0ZWdvcnk9e2hhbmRsZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1YkNhdGVnb3J5PXtoYW5kbGVTdWJDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8U3VjY2Vzc0FuY21udFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNyZWF0ZU5ld0FuY21udD17aGFuZGxlUmVzZXRBbmNtbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8QW5jbW50Rm9ybUNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIHQ9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cclxuICAgICAgICAgICAgICAgICAgICBhbmNtbnRUeXBlPXthbmNtbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuY21udD17Y3JlYXRlQW5jbW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU5leHRTdGVwPXtoYW5kbGVOZXh0U3RlcH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgc2V0QW5jbW50c1R5cGVzKCk7XHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBzZXRDcmVhdGVBbmNtbnRCeUxhbmcoKTtcclxuICAgIC8vIH0sIFtjYXRlZ29yaWVzTGlzdFswXS5uYW1lXSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBzZXRGb3VuZENhdGVnb3JpZXNDaGlsZHMoKTtcclxuICAgIC8vIH0sIFtzZWFyY2hUeHRdKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjcmVhdGVBbmNtbnQpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWVzTGlzdClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgICAgIHthY3RpdmVTdGVwICE9PSAwICYmIGFjdGl2ZVN0ZXAgIT09IDRcclxuICAgICAgICAgICAgJiYgPEFuY21udEhlYWRlclxyXG4gICAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUJhY2tCdG49e2hhbmRsZUJhY2tCdG59XHJcbiAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICB7cmVuZGVyUGFnZUJ5QWN0aXZlU3RlcCgpfVxyXG4gICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=