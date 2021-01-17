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
  }; // const setFoundCategoriesChilds = () => {
  //     const model = !!searchTxt
  //         ? categorySearchHelper(searchTxt, categoriesList)
  //         : [];
  //
  //     setCreateAncmnt({
  //         ...createAncmnt,
  //         category: {
  //             ...initCreateAncmntState.category,
  //             model
  //         }
  //     });
  // };


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYW5ub3VuY2VtZW50L2NyZWF0ZV9hbmNtbnQvQ3JlYXRlQW5jbW50Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJzdGVwcyIsImluaXRBbmNtbnRUeXBlU3RhdGVzIiwiaXNGZXRjaCIsInR5cGVzIiwiaWQiLCJuYW1lIiwiY3VycmVuY3kiLCJleHBpcmVkIiwiZXhwaXJhdGlvbl9hdCIsImltYWdlIiwidXJsIiwiQ3JlYXRlQW5jbW50Q29udGFpbmVyIiwidCIsImxhbmciLCJpMThuIiwibGFuZ3VhZ2UiLCJpbml0QW5jbW50VHlwZVN0YXRlIiwiaW5pdENyZWF0ZUFuY21udFN0YXRlIiwiZXJyb3IiLCJjYXRlZ29yeSIsImljb24iLCJtb2RlbCIsImhhc19hdWN0aW9uIiwiY2F0ZWdvcmllc0xpc3QiLCJ1c2VTZWxlY3RvciIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeURhdGFOb3JtYWxpemF0aW9uIiwibGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImFuY21udFR5cGUiLCJzZXRBbmNtbnRUeXBlIiwiYW5jbW50VHlwZXMiLCJzZXRBbmNtbnRUeXBlcyIsImNyZWF0ZUFuY21udCIsInNldENyZWF0ZUFuY21udCIsInN1Ykx2bEN0Z3JzIiwic2V0U3ViTHZsQ3RncnMiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInNlYXJjaFR4dCIsInNldFNlYXJjaFR4dCIsImhhbmRsZU5leHRTdGVwIiwicHJldlN0ZXAiLCJoYW5kbGVQcmV2U3RlcCIsImhhbmRsZVJlc2V0U3RlcHMiLCJoYW5kbGVBbmNtbnRUeXBlIiwic2VsZWN0ZWRBbmNtbnRUeXBlIiwiaGFuZGxlU2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDYXRlZ29yeSIsInR5cGUiLCJlIiwic2V0RXJyb3JNc2dBY3Rpb24iLCJtZXNzYWdlIiwiaGFuZGxlQmFja0N0Z3IiLCJoYW5kbGVTdWJDYXRlZ29yeSIsInBhcmVudCIsImNoaWxkX2lkIiwidXNlckFQSSIsImdldERhdGFGb3JDcmVhdGVBbmNtbnQiLCJkYXRhIiwiaGFuZGxlUmVzZXRDcmVhdGVEYXRhIiwiaGFuZGxlUmVzZXRBbmNtbnRUeXBlIiwiaGFuZGxlQmFja0J0biIsInNldENyZWF0ZUFuY21udEJ5TGFuZyIsInJlbmRlclBhZ2VCeUFjdGl2ZVN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsS0FBSyxHQUFHLENBQUMsZ0JBQUQsRUFBbUIsV0FBbkIsRUFBZ0MsWUFBaEMsRUFBOEMsVUFBOUMsQ0FBZDtBQUVBLElBQU1DLG9CQUFvQixHQUFHO0FBQ3pCQyxTQUFPLEVBQUUsS0FEZ0I7QUFFekJDLE9BQUssRUFBRSxDQUNIO0FBQ0lDLE1BQUUsRUFBRSxDQURSO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBR0lDLFlBQVEsRUFBRSxDQUNOO0FBQ0lGLFFBQUUsRUFBRSxDQURSO0FBRUlDLFVBQUksRUFBRTtBQUZWLEtBRE0sRUFLTjtBQUNJRCxRQUFFLEVBQUUsQ0FEUjtBQUVJQyxVQUFJLEVBQUU7QUFGVixLQUxNLENBSGQ7QUFhSUUsV0FBTyxFQUFFLENBQ0w7QUFDSUgsUUFBRSxFQUFFLENBRFI7QUFFSUksbUJBQWEsRUFBRTtBQUZuQixLQURLLENBYmI7QUFtQklDLFNBQUssRUFBRTtBQUNIQyxTQUFHLEVBQUU7QUFERjtBQW5CWCxHQURHLEVBd0JIO0FBQ0lOLE1BQUUsRUFBRSxDQURSO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBR0lDLFlBQVEsRUFBRSxDQUNOO0FBQ0lGLFFBQUUsRUFBRSxDQURSO0FBRUlDLFVBQUksRUFBRTtBQUZWLEtBRE0sQ0FIZDtBQVNJRSxXQUFPLEVBQUUsQ0FDTDtBQUNJSCxRQUFFLEVBQUUsQ0FEUjtBQUVJSSxtQkFBYSxFQUFFO0FBRm5CLEtBREssRUFLTDtBQUNJSixRQUFFLEVBQUUsQ0FEUjtBQUVJSSxtQkFBYSxFQUFFO0FBRm5CLEtBTEssQ0FUYjtBQW1CSUMsU0FBSyxFQUFFO0FBQ0hDLFNBQUcsRUFBRTtBQURGO0FBbkJYLEdBeEJHLEVBK0NIO0FBQ0lOLE1BQUUsRUFBRSxDQURSO0FBRUlDLFFBQUksRUFBRSxxQkFGVjtBQUdJQyxZQUFRLEVBQUUsQ0FDTjtBQUNJRixRQUFFLEVBQUUsQ0FEUjtBQUVJQyxVQUFJLEVBQUU7QUFGVixLQURNLENBSGQ7QUFTSUUsV0FBTyxFQUFFLENBQ0w7QUFDSUgsUUFBRSxFQUFFLENBRFI7QUFFSUksbUJBQWEsRUFBRTtBQUZuQixLQURLLEVBS0w7QUFDSUosUUFBRSxFQUFFLENBRFI7QUFFSUksbUJBQWEsRUFBRTtBQUZuQixLQUxLLENBVGI7QUFtQklDLFNBQUssRUFBRTtBQUNIQyxTQUFHLEVBQUU7QUFERjtBQW5CWCxHQS9DRztBQUZrQixDQUE3QjtBQTJFTyxJQUFNQyxxQkFBZ0MsR0FBRyxTQUFuQ0EscUJBQW1DLE9BQVM7QUFBQTs7QUFBQSxNQUFQQyxDQUFPLFFBQVBBLENBQU87QUFDckQsTUFBTUMsSUFBSSxHQUFHQywrQ0FBSSxDQUFDQyxRQUFsQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHO0FBQ3hCWixNQUFFLEVBQUUsSUFEb0I7QUFFeEJDLFFBQUksRUFBRSxFQUZrQjtBQUd4QkMsWUFBUSxFQUFFLENBQUM7QUFDUEYsUUFBRSxFQUFFLElBREc7QUFFUEMsVUFBSSxFQUFFO0FBRkMsS0FBRCxDQUhjO0FBT3hCRSxXQUFPLEVBQUUsQ0FBQztBQUNOSCxRQUFFLEVBQUUsSUFERTtBQUVOSSxtQkFBYSxFQUFFO0FBRlQsS0FBRCxDQVBlO0FBV3hCQyxTQUFLLEVBQUU7QUFDSEMsU0FBRyxFQUFFO0FBREY7QUFYaUIsR0FBNUI7QUFnQkEsTUFBTU8scUJBQXFCLEdBQUc7QUFDMUJmLFdBQU8sRUFBRSxLQURpQjtBQUUxQmdCLFNBQUssRUFBRSxJQUZtQjtBQUcxQkMsWUFBUSxFQUFFO0FBQ05mLFFBQUUsRUFBRSxJQURFO0FBRU5DLFVBQUksRUFBRSxFQUZBO0FBR05JLFdBQUssRUFBRTtBQUNIQyxXQUFHLEVBQUU7QUFDRCxxQkFBUztBQURSO0FBREYsT0FIRDtBQVFOVSxVQUFJLEVBQUU7QUFDRmhCLFVBQUUsRUFBRSxJQURGO0FBRUZNLFdBQUcsRUFBRTtBQUZILE9BUkE7QUFZTlcsV0FBSyxFQUFFLEVBWkQ7QUFhTkMsaUJBQVcsRUFBRTtBQWJQO0FBSGdCLEdBQTlCO0FBb0JBLE1BQU1DLGNBQWMsR0FBR0MsK0RBQVcsQ0FBQyxpQkFBNkI7QUFBQSxRQUEzQkMsVUFBMkIsU0FBM0JBLFVBQTJCO0FBQzVELFdBQU9DLCtFQUF5QixDQUFDRCxVQUFVLENBQUNFLElBQVosQ0FBaEMsQ0FENEQsQ0FFNUQ7QUFDSCxHQUhpQyxDQUFsQztBQUtBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBNUNxRCxrQkE4Q2pCQyxzREFBUSxDQUFhZCxtQkFBYixDQTlDUztBQUFBLE1BOEM5Q2UsVUE5QzhDO0FBQUEsTUE4Q2xDQyxhQTlDa0M7O0FBQUEsbUJBZ0RmRixzREFBUSxDQUE0QzdCLG9CQUE1QyxDQWhETztBQUFBLE1BZ0Q5Q2dDLFdBaEQ4QztBQUFBLE1BZ0RqQ0MsY0FoRGlDOztBQUFBLG1CQWtEYkosc0RBQVEsQ0FBb0JiLHFCQUFwQixDQWxESztBQUFBLE1Ba0Q5Q2tCLFlBbEQ4QztBQUFBLE1Ba0RoQ0MsZUFsRGdDOztBQUFBLG1CQW9EZk4sc0RBQVEsQ0FBb0IsRUFBcEIsQ0FwRE87QUFBQSxNQW9EOUNPLFdBcEQ4QztBQUFBLE1Bb0RqQ0MsY0FwRGlDOztBQUFBLG1CQXNEakJSLHNEQUFRLENBQUMsQ0FBRCxDQXREUztBQUFBLE1Bc0Q5Q1MsVUF0RDhDO0FBQUEsTUFzRGxDQyxhQXREa0M7O0FBQUEsbUJBd0RuQlYsc0RBQVEsQ0FBQyxFQUFELENBeERXO0FBQUEsTUF3RDlDVyxTQXhEOEM7QUFBQSxNQXdEbkNDLFlBeERtQzs7QUEwRHJELE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QkgsaUJBQWEsQ0FBQyxVQUFDSSxRQUFEO0FBQUEsYUFBY0EsUUFBUSxHQUFHLENBQXpCO0FBQUEsS0FBRCxDQUFiO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekJMLGlCQUFhLENBQUMsVUFBQ0ksUUFBRDtBQUFBLGFBQWNBLFFBQVEsR0FBRyxDQUF6QjtBQUFBLEtBQUQsQ0FBYjtBQUNILEdBRkQ7O0FBSUEsTUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCTixpQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNILEdBRkQsQ0FsRXFELENBc0VyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTU8sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxrQkFBRDtBQUFBLFdBQXdCLFlBQU07QUFDbkRMLG9CQUFjO0FBQ2RYLG1CQUFhLENBQUNnQixrQkFBRCxDQUFiO0FBQ0gsS0FId0I7QUFBQSxHQUF6Qjs7QUFLQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFjO0FBQUEsUUFBWkMsTUFBWSxTQUFaQSxNQUFZO0FBQy9CUixnQkFBWSxDQUFDUSxNQUFNLENBQUNDLEtBQVIsQ0FBWjtBQUNILEdBRkQsQ0F6RnFELENBNkZyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDakMsUUFBRDtBQUFBLFdBQWMsWUFBTTtBQUN2QyxVQUFJO0FBQ0EsWUFBSVEsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsWUFBSVIsUUFBUSxDQUFDa0MsSUFBYixFQUFtQjtBQUNmMUIsY0FBSSxHQUFHUixRQUFRLENBQUNrQyxJQUFoQjtBQUNILFNBRkQsTUFFTyxJQUFJbEMsUUFBUSxDQUFDRSxLQUFiLEVBQW9CO0FBQ3ZCTSxjQUFJLEdBQUdSLFFBQVEsQ0FBQ0UsS0FBaEI7QUFDQWUseUJBQWUsQ0FBQ2pCLFFBQUQsQ0FBZjtBQUNIOztBQUNEbUIsc0JBQWMsQ0FBQ1gsSUFBRCxDQUFkO0FBQ0gsT0FURCxDQVNFLE9BQU8yQixDQUFQLEVBQVU7QUFDUjFCLGdCQUFRLENBQUMyQiw0RkFBaUIsQ0FBQ0QsQ0FBQyxDQUFDRSxPQUFILENBQWxCLENBQVI7QUFDQXBCLHVCQUFlLGlDQUFLRCxZQUFMO0FBQW1CakMsaUJBQU8sRUFBRTtBQUE1QixXQUFmO0FBQ0g7QUFDSixLQWRzQjtBQUFBLEdBQXZCOztBQWdCQSxNQUFNdUQsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCbkIsa0JBQWMsQ0FBQ0gsWUFBWSxDQUFDaEIsUUFBYixDQUFzQkUsS0FBdkIsQ0FBZDtBQUNILEdBRkQ7O0FBSUEsTUFBTXFDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULEVBQW1CdkQsSUFBbkI7QUFBQSx5TUFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFOUMrQiw2QkFBZSxpQ0FDUkQsWUFEUTtBQUVYakMsdUJBQU8sRUFBRTtBQUZFLGlCQUFmO0FBRjhDO0FBQUEscUJBTzNCMkQsb0RBQU8sQ0FBQ0Msc0JBQVIsQ0FBK0JILE1BQU0sQ0FBQ3ZELEVBQXRDLEVBQTBDd0QsUUFBMUMsRUFBb0QvQyxJQUFwRCxDQVAyQjs7QUFBQTtBQU94Q2tELGtCQVB3QztBQVM5QzNCLDZCQUFlLGlDQUNSRCxZQURRO0FBRVhqQyx1QkFBTyxFQUFFLEtBRkUsQ0FHWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUlcsaUJBQWY7QUFVQXlDLDRCQUFjO0FBbkJnQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCOUNmLHNCQUFRLENBQUMyQiw0RkFBaUIsQ0FBQyxZQUFFQyxPQUFILENBQWxCLENBQVI7QUFDQXBCLDZCQUFlLGlDQUFLRCxZQUFMO0FBQW1CakMsdUJBQU8sRUFBRTtBQUE1QixpQkFBZjs7QUF0QjhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTVCO0FBQUEsR0FBMUI7O0FBMEJBLE1BQU04RCxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDaEN0QixnQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNBTixtQkFBZSxDQUFDbkIscUJBQUQsQ0FBZjtBQUNILEdBSEQ7O0FBS0EsTUFBTWdELHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNoQ25CLG9CQUFnQjtBQUNoQmtCLHlCQUFxQjtBQUNyQmhDLGlCQUFhLENBQUNoQixtQkFBRCxDQUFiO0FBQ0gsR0FKRDs7QUFNQSxNQUFNa0QsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCckIsa0JBQWM7O0FBQ2QsWUFBUU4sVUFBUjtBQUNJLFdBQUssQ0FBTDtBQUNJMEIsNkJBQXFCO0FBQ3JCOztBQUNKLFdBQUssQ0FBTDtBQUNJRCw2QkFBcUI7QUFMN0I7QUFPSCxHQVREOztBQVdBLE1BQU1HLHFCQUFxQjtBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBckJBLHFCQUFxQjtBQUFBO0FBQUE7QUFBQSxLQUEzQjs7QUFnQ0EsTUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ2pDLFlBQVE3QixVQUFSO0FBQ0ksV0FBSyxDQUFMO0FBQ0ksZUFBTyxNQUFDLCtHQUFEO0FBQ0gscUJBQVcsRUFBRU4sV0FEVjtBQUVILDBCQUFnQixFQUFFYztBQUZmLFVBQVA7O0FBSUosV0FBSyxDQUFMO0FBQ0ksZUFBTyxNQUFDLDBEQUFEO0FBQ0gsb0JBQVUsRUFBRWhCLFVBRFQ7QUFFSCxzQkFBWSxFQUFFSSxZQUZYO0FBR0gsd0JBQWMsRUFBRVosY0FIYjtBQUlILHFCQUFXLEVBQUVjLFdBSlY7QUFLSCxtQkFBUyxFQUFFSSxTQUxSO0FBTUgsd0JBQWMsRUFBRWdCLGNBTmI7QUFPSCxzQkFBWSxFQUFFUixZQVBYO0FBUUgsd0JBQWMsRUFBRUcsY0FSYjtBQVNILDJCQUFpQixFQUFFTTtBQVRoQixVQUFQOztBQVdKLFdBQUssQ0FBTDtBQUNJLGVBQU8sTUFBQyxrSUFBRDtBQUNILCtCQUFxQixFQUFFTztBQURwQixVQUFQOztBQUdKO0FBQ0ksZUFBTyxNQUFDLG9GQUFEO0FBQ0gsV0FBQyxFQUFFckQsQ0FEQTtBQUVILG9CQUFVLEVBQUUyQixVQUZUO0FBR0gsb0JBQVUsRUFBRVIsVUFIVDtBQUlILHNCQUFZLEVBQUVJLFlBSlg7QUFLSCx3QkFBYyxFQUFFUTtBQUxiLFVBQVA7QUF2QlI7QUErQkgsR0FoQ0QsQ0EvTXFELENBaVByRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFDQSxTQUNJLE1BQUMscUVBQUQsUUFDS0osVUFBVSxLQUFLLENBQWYsSUFBb0JBLFVBQVUsS0FBSyxDQUFuQyxJQUNFLE1BQUMseUVBQUQ7QUFDQyxTQUFLLEVBQUV2QyxLQURSO0FBRUMsY0FBVSxFQUFFdUMsVUFGYjtBQUdDLGlCQUFhLEVBQUUyQjtBQUhoQixJQUZQLEVBT0tFLHNCQUFzQixFQVAzQixDQURKO0FBV0gsQ0ExUU07O0dBQU16RCxxQjtVQXVDY2EsdUQsRUFLTkssdUQ7OztLQTVDUmxCLHFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fubm91bmNlbWVudC9jcmVhdGUuNmUzNmIyYTBmYjY2MjQwODM4NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3IsIHVzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtpMThufSBmcm9tIFwiQHJvb3QvaTE4blwiO1xyXG5pbXBvcnQge3VzZXJBUEl9IGZyb20gJ0BzcmMvYXBpL2FwaSc7XHJcbmltcG9ydCB7Q3JlYXRlQW5jbW50fSBmcm9tIFwiLi9DcmVhdGVBbmNtbnRcIjtcclxuaW1wb3J0IHtSb290U3RhdGV9IGZyb20gXCJAc3JjL3JlZHV4L3Jvb3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7TWFpbkxheW91dH0gZnJvbSBcIkBzcmMvY29tcG9uZW50cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCB7V2l0aFR9IGZyb20gXCJpMThuZXh0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBDcmVhdGVBbmNtbnRTdGF0ZSxcclxuICAgIEFuY21udFR5cGVcclxufSBmcm9tIFwiQHJvb3QvaW50ZXJmYWNlcy9Bbm5vdW5jZW1lbnRcIjtcclxuaW1wb3J0IHtBbmNtbnRGb3JtQ29udGFpbmVyfSBmcm9tIFwiLi9hbmNtbnRfZm9ybS9BbmNtbnRGb3JtQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7c2V0RXJyb3JNc2dBY3Rpb259IGZyb20gJ0Byb290L3NyYy9yZWR1eC9zbGljZXMvZXJyb3JTbGljZSc7XHJcbmltcG9ydCB7QW5jbW50VHlwZXNQYWdlfSBmcm9tIFwiQHNyYy9jb21wb25lbnRzL2Fubm91bmNlbWVudC9hbmNtbnRfdHlwZXNfcGFnZS9BbmNtbnRUeXBlc1BhZ2VcIjtcclxuaW1wb3J0IHtjYXRlZ29yeURhdGFOb3JtYWxpemF0aW9uLCBjYXRlZ29yeVNlYXJjaEhlbHBlcn0gZnJvbSBcIkBzcmMvaGVscGVyc1wiO1xyXG5pbXBvcnQge0FuY21udEhlYWRlcn0gZnJvbSAnLi9hbmNtbnRfaGVhZGVyL0FuY21udEhlYWRlcic7XHJcbmltcG9ydCB7U3VjY2Vzc0FuY21udH0gZnJvbSBcIkBzcmMvY29tcG9uZW50cy9hbm5vdW5jZW1lbnQvY3JlYXRlX2FuY21udC9hbmNtbnRfZm9ybS9zdWNjZXNzX2FuY21udC9TdWNjZXNzQW5jbW50XCI7XHJcbmltcG9ydCB7U3ViTHZsQ3RncnNUeXBlfSBmcm9tIFwiQHJvb3QvaW50ZXJmYWNlcy9DYXRlZ29yaWVzXCI7XHJcblxyXG5cclxuY29uc3Qgc3RlcHMgPSBbJ9Ci0LjQvyDQvtCx0YrRj9Cy0LvQtdC90LjRjycsICfQmtCw0YLQtdCz0L7RgNC40Y8nLCAn0JfQsNC/0L7Qu9C90LXQvdC40LUnLCAn0J/RgNC+0LLQtdGA0LrQsCddO1xyXG5cclxuY29uc3QgaW5pdEFuY21udFR5cGVTdGF0ZXMgPSB7XHJcbiAgICBpc0ZldGNoOiBmYWxzZSxcclxuICAgIHR5cGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmFtZTogXCLQntCx0YvRh9C90YvQuVwiLFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwi0YPQtVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3VtXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZXhwaXJlZDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyYXRpb25fYXQ6IDcyMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2ltZy9hZHYtYmFja2dyb3VuZC5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwi0JDRg9C60YbQuNC+0L1cIixcclxuICAgICAgICAgICAgY3VycmVuY3k6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN1bVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGV4cGlyZWQ6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uX2F0OiAyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyYXRpb25fYXQ6IDcyMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2ltZy9sb3QtYmFja2dyb3VuZC5wbmcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIG5hbWU6IFwi0J/RgNC+0LTQstC40L3Rg9GC0YvQuSDQsNGD0LrRhtC40L7QvVwiLFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3VtXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZXhwaXJlZDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyYXRpb25fYXQ6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbl9hdDogNzIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvaW1nL2FkdmFuY2VkLWxvdC1iYWNrZ3JvdW5kLnBuZydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVBbmNtbnRDb250YWluZXI6IEZDPFdpdGhUPiA9ICh7dH0pID0+IHtcclxuICAgIGNvbnN0IGxhbmcgPSBpMThuLmxhbmd1YWdlO1xyXG5cclxuICAgIGNvbnN0IGluaXRBbmNtbnRUeXBlU3RhdGUgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgY3VycmVuY3k6IFt7XHJcbiAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICBuYW1lOiAnJ1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGV4cGlyZWQ6IFt7XHJcbiAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uX2F0OiBudWxsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdENyZWF0ZUFuY21udFN0YXRlID0ge1xyXG4gICAgICAgIGlzRmV0Y2g6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgIHVybDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2RlbDogW10sXHJcbiAgICAgICAgICAgIGhhc19hdWN0aW9uOiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcmllc0xpc3QgPSB1c2VTZWxlY3Rvcigoe2NhdGVnb3JpZXN9OiBSb290U3RhdGUpID0+IHtcclxuICAgICAgICByZXR1cm4gY2F0ZWdvcnlEYXRhTm9ybWFsaXphdGlvbihjYXRlZ29yaWVzLmxpc3QpO1xyXG4gICAgICAgIC8vIHJldHVybiBjYXRlZ29yaWVzLmxpc3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgW2FuY21udFR5cGUsIHNldEFuY21udFR5cGVdID0gdXNlU3RhdGU8QW5jbW50VHlwZT4oaW5pdEFuY21udFR5cGVTdGF0ZSk7XHJcblxyXG4gICAgY29uc3QgW2FuY21udFR5cGVzLCBzZXRBbmNtbnRUeXBlc10gPSB1c2VTdGF0ZTx7IGlzRmV0Y2g6IGJvb2xlYW4sIHR5cGVzOiBBbmNtbnRUeXBlW10gfT4oaW5pdEFuY21udFR5cGVTdGF0ZXMpO1xyXG5cclxuICAgIGNvbnN0IFtjcmVhdGVBbmNtbnQsIHNldENyZWF0ZUFuY21udF0gPSB1c2VTdGF0ZTxDcmVhdGVBbmNtbnRTdGF0ZT4oaW5pdENyZWF0ZUFuY21udFN0YXRlKTtcclxuXHJcbiAgICBjb25zdCBbc3ViTHZsQ3RncnMsIHNldFN1Ykx2bEN0Z3JzXSA9IHVzZVN0YXRlPFN1Ykx2bEN0Z3JzVHlwZVtdPihbXSk7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaFR4dCwgc2V0U2VhcmNoVHh0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVOZXh0U3RlcCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmVTdGVwKChwcmV2U3RlcCkgPT4gcHJldlN0ZXAgKyAxKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUHJldlN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlU3RlcCgocHJldlN0ZXApID0+IHByZXZTdGVwIC0gMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlc2V0U3RlcHMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlU3RlcCgwKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29uc3Qgc2V0QW5jbW50c1R5cGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHR5cGVzID0gdXNlckFQSS5nZXRBbmNtbnRzVHlwZXMobGFuZyk7XHJcbiAgICAvLyAgICAgICAgIGF3YWl0IHNldEZldGNoZWREYXRhKFxyXG4gICAgLy8gICAgICAgICAgICAgYW5jbW50VHlwZXMsXHJcbiAgICAvLyAgICAgICAgICAgICBzZXRBbmNtbnRUeXBlcyxcclxuICAgIC8vICAgICAgICAgICAgIHt0eXBlc30sXHJcbiAgICAvLyAgICAgICAgICk7XHJcbiAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gICAgICAgICBkaXNwYXRjaChzZXRFcnJvck1zZ0FjdGlvbihlLm1lc3NhZ2UpKTtcclxuICAgIC8vICAgICAgICAgc2V0QW5jbW50VHlwZXMoey4uLmFuY21udFR5cGVzLCBpc0ZldGNoOiBmYWxzZX0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQW5jbW50VHlwZSA9IChzZWxlY3RlZEFuY21udFR5cGUpID0+ICgpID0+IHtcclxuICAgICAgICBoYW5kbGVOZXh0U3RlcCgpO1xyXG4gICAgICAgIHNldEFuY21udFR5cGUoc2VsZWN0ZWRBbmNtbnRUeXBlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHt0YXJnZXR9KSA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoVHh0KHRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbnN0IHNldEZvdW5kQ2F0ZWdvcmllc0NoaWxkcyA9ICgpID0+IHtcclxuICAgIC8vICAgICBjb25zdCBtb2RlbCA9ICEhc2VhcmNoVHh0XHJcbiAgICAvLyAgICAgICAgID8gY2F0ZWdvcnlTZWFyY2hIZWxwZXIoc2VhcmNoVHh0LCBjYXRlZ29yaWVzTGlzdClcclxuICAgIC8vICAgICAgICAgOiBbXTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgc2V0Q3JlYXRlQW5jbW50KHtcclxuICAgIC8vICAgICAgICAgLi4uY3JlYXRlQW5jbW50LFxyXG4gICAgLy8gICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgLy8gICAgICAgICAgICAgLi4uaW5pdENyZWF0ZUFuY21udFN0YXRlLmNhdGVnb3J5LFxyXG4gICAgLy8gICAgICAgICAgICAgbW9kZWxcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4gKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gY2F0ZWdvcnkudHlwZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yeS5tb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IGNhdGVnb3J5Lm1vZGVsO1xyXG4gICAgICAgICAgICAgICAgc2V0Q3JlYXRlQW5jbW50KGNhdGVnb3J5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFN1Ykx2bEN0Z3JzKGxpc3QpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0RXJyb3JNc2dBY3Rpb24oZS5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIHNldENyZWF0ZUFuY21udCh7Li4uY3JlYXRlQW5jbW50LCBpc0ZldGNoOiBmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQmFja0N0Z3IgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3ViTHZsQ3RncnMoY3JlYXRlQW5jbW50LmNhdGVnb3J5Lm1vZGVsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3ViQ2F0ZWdvcnkgPSAocGFyZW50LCBjaGlsZF9pZCwgbmFtZSkgPT4gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNldENyZWF0ZUFuY21udCh7XHJcbiAgICAgICAgICAgICAgICAuLi5jcmVhdGVBbmNtbnQsXHJcbiAgICAgICAgICAgICAgICBpc0ZldGNoOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB1c2VyQVBJLmdldERhdGFGb3JDcmVhdGVBbmNtbnQocGFyZW50LmlkLCBjaGlsZF9pZCwgbGFuZyk7XHJcblxyXG4gICAgICAgICAgICBzZXRDcmVhdGVBbmNtbnQoe1xyXG4gICAgICAgICAgICAgICAgLi4uY3JlYXRlQW5jbW50LFxyXG4gICAgICAgICAgICAgICAgaXNGZXRjaDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBzdWJDYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlkOiBjaGlsZF9pZCxcclxuICAgICAgICAgICAgICAgIC8vICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcGFyZW50XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBoYW5kbGVOZXh0U3RlcCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0RXJyb3JNc2dBY3Rpb24oZS5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIHNldENyZWF0ZUFuY21udCh7Li4uY3JlYXRlQW5jbW50LCBpc0ZldGNoOiBmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVzZXRDcmVhdGVEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaFR4dCgnJyk7XHJcbiAgICAgICAgc2V0Q3JlYXRlQW5jbW50KGluaXRDcmVhdGVBbmNtbnRTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlc2V0QW5jbW50VHlwZSA9ICgpID0+IHtcclxuICAgICAgICBoYW5kbGVSZXNldFN0ZXBzKCk7XHJcbiAgICAgICAgaGFuZGxlUmVzZXRDcmVhdGVEYXRhKCk7XHJcbiAgICAgICAgc2V0QW5jbW50VHlwZShpbml0QW5jbW50VHlwZVN0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQmFja0J0biA9ICgpID0+IHtcclxuICAgICAgICBoYW5kbGVQcmV2U3RlcCgpO1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aXZlU3RlcCkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVSZXNldEFuY21udFR5cGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVSZXNldENyZWF0ZURhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldENyZWF0ZUFuY21udEJ5TGFuZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBjb25zdCBbY3RnckJ5TGFuZ10gPSBjYXRlZ29yaWVzTGlzdC5maWx0ZXIoY3RnciA9PiBjdGdyLmlkID09PSBzdWJDYXRlZ29yeS5wYXJlbnQuaWQpO1xyXG4gICAgICAgIC8vIGN0Z3JCeUxhbmcgJiYgc2V0Q3JlYXRlQW5jbW50KHtcclxuICAgICAgICAvLyAgICAgLi4uY3JlYXRlQW5jbW50LFxyXG4gICAgICAgIC8vICAgICBjYXRlZ29yeTogY3RnckJ5TGFuZyxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBpZiAoc3ViQ2F0ZWdvcnkuaWQgIT09IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgW3N1YkN0Z3JCeUxhbmddID0gY3RnckJ5TGFuZy5tb2RlbC5maWx0ZXIoc3ViQ3RnciA9PiBzdWJDdGdyLmlkID09PSBzdWJDYXRlZ29yeS5pZCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgdHJ5IHtcclxuICAgICAgICAvLyAgICAgICAgIHNldENyZWF0ZUFuY21udCh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLi4uY3JlYXRlQW5jbW50LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlzRmV0Y2g6IHRydWVcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdXNlckFQSS5nZXRBZERhdGFGb3JDcmVhdGVBbmNtbnQoc3ViQ2F0ZWdvcnkucGFyZW50LmlkLCBzdWJDYXRlZ29yeS5pZCwgbGFuZyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIHNldENyZWF0ZUFuY21udCh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLi4uY3JlYXRlQW5jbW50LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlzRmV0Y2g6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHN1YkNhdGVnb3J5OiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC4uLnN1YkN0Z3JCeUxhbmcsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgZGlzcGF0Y2goc2V0RXJyb3JNc2dBY3Rpb24oZS5tZXNzYWdlKSk7XHJcbiAgICAgICAgLy8gICAgICAgICBzZXRDcmVhdGVBbmNtbnQoey4uLmNyZWF0ZUFuY21udCwgaXNGZXRjaDogZmFsc2V9KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyUGFnZUJ5QWN0aXZlU3RlcCA9ICgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGl2ZVN0ZXApIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBbmNtbnRUeXBlc1BhZ2VcclxuICAgICAgICAgICAgICAgICAgICBhbmNtbnRUeXBlcz17YW5jbW50VHlwZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQW5jbW50VHlwZT17aGFuZGxlQW5jbW50VHlwZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8Q3JlYXRlQW5jbW50XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jbW50VHlwZT17YW5jbW50VHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBbmNtbnQ9e2NyZWF0ZUFuY21udH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzTGlzdD17Y2F0ZWdvcmllc0xpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViTHZsQ3RncnM9e3N1Ykx2bEN0Z3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFR4dD17c2VhcmNoVHh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUJhY2tDdGdyPXtoYW5kbGVCYWNrQ3Rncn1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWFyY2g9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYXRlZ29yeT17aGFuZGxlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3ViQ2F0ZWdvcnk9e2hhbmRsZVN1YkNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxTdWNjZXNzQW5jbW50XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ3JlYXRlTmV3QW5jbW50PXtoYW5kbGVSZXNldEFuY21udFR5cGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBbmNtbnRGb3JtQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgdD17dH1cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY21udFR5cGU9e2FuY21udFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQW5jbW50PXtjcmVhdGVBbmNtbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTmV4dFN0ZXA9e2hhbmRsZU5leHRTdGVwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICBzZXRBbmNtbnRzVHlwZXMoKTtcclxuICAgIC8vIH0sIFtdKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldENyZWF0ZUFuY21udEJ5TGFuZygpO1xyXG4gICAgLy8gfSwgW2NhdGVnb3JpZXNMaXN0WzBdLm5hbWVdKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldEZvdW5kQ2F0ZWdvcmllc0NoaWxkcygpO1xyXG4gICAgLy8gfSwgW3NlYXJjaFR4dF0pO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGNyZWF0ZUFuY21udClcclxuICAgIC8vIGNvbnNvbGUubG9nKGNhdGVnb3JpZXNMaXN0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAge2FjdGl2ZVN0ZXAgIT09IDAgJiYgYWN0aXZlU3RlcCAhPT0gNFxyXG4gICAgICAgICAgICAmJiA8QW5jbW50SGVhZGVyXHJcbiAgICAgICAgICAgICAgICBzdGVwcz17c3RlcHN9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQmFja0J0bj17aGFuZGxlQmFja0J0bn1cclxuICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgIHtyZW5kZXJQYWdlQnlBY3RpdmVTdGVwKCl9XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==