webpackHotUpdate(6,{

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(866);

var _layout = __webpack_require__(1100);

var _layout2 = _interopRequireDefault(_layout);

var _factory = __webpack_require__(708);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(709);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\code\\ethereum-contracts\\eth-kickstart\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault;

                                _context.prev = 1;
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;
                                _context.next = 7;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 7:
                                _context.next = 12;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](1);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 9]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'New Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Create!')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwic2V0U3RhdGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQUssQUFBTyxBQUFPOztBQUMzQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBR1gsQTs7Ozs7Ozs7Ozs7Ozs7OzBOQUNGLEE7aUNBQVEsQUFDaUIsQUFDckI7MEJBRkksQSxBQUVVO0FBRlYsQUFDSixpQkFJSixBO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FETyxBQUNQLEFBQU07O2dEQURDO2dEQUFBO3VDQUlvQixjQUFBLEFBQUssSUFKekIsQUFJb0IsQUFBUzs7aUNBQTFCO0FBSkgsb0RBQUE7Z0RBQUE7eURBS0csQUFBUSxRQUFSLEFBQWdCLGVBQWUsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLHFCQUExQyxBQUNEOzBDQUNTLFNBUFgsQUFLRyxBQUNJLEFBQ0ksQUFBUztBQURiLEFBQ0YsaUNBRkY7O2lDQUxIO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQVVIOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBVjNCLEFBVUgsQUFBYyxBQUFvQjs7aUNBVi9CO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBY0Y7eUJBQ0w7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUVBLGlDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLHlDQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzBCQUFXLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUscUJBQXFCLE1BQUEsQUFBTSxPQUFwRCxBQUFTLEFBQWMsQUFBb0M7QUFKMUU7OzhCQUFBO2dDQUxSLEFBQ0ksQUFJSSxBQU9KO0FBUEk7QUFDSSxpQ0FNUixBQUFFLDBDQUFRLE9BQVYsTUFBZ0IsUUFBaEIsQUFBdUIsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBWkosQUFZSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUFqQlosQUFDSSxBQUdJLEFBYUksQUFJZjs7Ozs7QUExQ3FCLEEsQUE2QzFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9jb2RlL2V0aGVyZXVtLWNvbnRyYWN0cy9ldGgta2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\code\\ethereum-contracts\\eth-kickstart\\pages\\campaigns\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\code\\ethereum-contracts\\eth-kickstart\\pages\\campaigns\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5lYWFkOWQ4OTY1OGVhOTkwNjJjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz85MGY4MmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Zvcm0sQnV0dG9uLElucHV0LCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnXHJcblxyXG5cclxuY2xhc3MgQ2FtcGFpZ25OZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogJycsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xyXG5cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLmNyZWF0ZUNhbXBhaWduKHRoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbilcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1jYXRjaChlcnIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pk5ldyBDYW1wYWlnbjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW5pbXVtIENvbnRyaWJ1dGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIndlaVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IG1pbmltdW1Db250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8IE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+Q3JlYXRlITwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduTmV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9uZXcuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7O0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQUE7QUFLQTtBQUVBO0FBQUE7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVVBO0FBQ0E7QUFEQTtBQUNBO0FBWEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFKQTs7QUFBQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9