webpackHotUpdate(5,{

/***/ 707:
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

var _factory = __webpack_require__(708);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(866);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\code\\ethereum-contracts\\eth-kickstart\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            // console.log(campaigns);
            var items = this.props.campaigns.map(function (campaign) {
                return {
                    header: campaign,
                    description: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    }, 'View Campaign'),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'Open Campaigns'), this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Create Campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }));
        }
    }], [{
        key: 'getInitialProps',

        //Next uses this because something something expensive computationally and if not it has to wait for react to render to get the props
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJjYW1wYWlnbiIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBTTs7Ozs7OztJLEFBRVQ7Ozs7Ozs7Ozs7OzBDQU9nQixBQUNkO0FBQ0E7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUssb0JBQVksQUFDaEQ7OzRCQUFPLEFBQ0ssQUFDUjtpREFBYSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEscUJBQUEsRUFGVixBQUVVLEFBQ2I7MkJBSEosQUFBTyxBQUdJLEFBRWQ7QUFMVSxBQUNIO0FBRlIsQUFBYyxBQVFkLGFBUmM7O2lEQVFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0YsQUFDTDttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLDBDQUNVLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCOzhCQUE1QjtnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0Msd0JBSEwsQUFHSyxBQUFLLEFBQ04sbUNBQUEsQUFBQzt5QkFBRCxBQUNRLEFBQ1I7c0JBRkEsQUFFSyxBQUNMO3lCQUhBOzs4QkFBQTtnQ0FMUixBQUNJLEFBSUksQUFPWDtBQVBXO0FBQ0E7OzthQTFCWjs7Ozs7Ozs7Ozs7dUNBRTRCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQUFBdUMsQTs7aUNBQXpEO0E7aUVBQ0MsRUFBQyxXQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKYSxBLEFBb0M1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9jb2RlL2V0aGVyZXVtLWNvbnRyYWN0cy9ldGgta2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\code\\ethereum-contracts\\eth-kickstart\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\code\\ethereum-contracts\\eth-kickstart\\pages\\index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40YWQ1NDc1NzUzMjViNzc1NTdiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YTk1YmI5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLy9OZXh0IHVzZXMgdGhpcyBiZWNhdXNlIHNvbWV0aGluZyBzb21ldGhpbmcgZXhwZW5zaXZlIGNvbXB1dGF0aW9uYWxseSBhbmQgaWYgbm90IGl0IGhhcyB0byB3YWl0IGZvciByZWFjdCB0byByZW5kZXIgdG8gZ2V0IHRoZSBwcm9wc1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcbiAgICAgICAgcmV0dXJuIHtjYW1wYWlnbnN9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhbXBhaWducygpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKCBjYW1wYWlnbiA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGNhbXBhaWduLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgQ2FtcGFpZ248L2E+LFxyXG4gICAgICAgICAgICAgICAgZmx1aWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPiA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIENhbXBhaWduXCJcclxuICAgICAgICAgICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUFBOztBQUdBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBSEE7O0FBQUE7QUFPQTtBQVBBO0FBQ0E7OztBQTFCQTtBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQURBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=