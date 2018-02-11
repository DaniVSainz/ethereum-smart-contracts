webpackHotUpdate(6,{

/***/ 1127:
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

var _layout = __webpack_require__(1105);

var _layout2 = _interopRequireDefault(_layout);

var _campaign = __webpack_require__(1128);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(479);

var _web = __webpack_require__(715);

var _web2 = _interopRequireDefault(_web);

var _contributeForm = __webpack_require__(1130);

var _contributeForm2 = _interopRequireDefault(_contributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\code\\ethereum-contracts\\eth-kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestCount = _props.requestCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become a contributor'
            }, {
                header: requestCount,
                meta: 'Number of requests',
                description: "Requests must be voted on by approvers to be cashed out to recipients"
            }, {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have contributed to this campaign and are approvers'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campagin has left'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'CamPaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_contributeForm2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.campaign);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0Q291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFRLEFBQU07O0FBQ2QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBRXJCOzs7Ozs7Ozs7OztzQ0FjWTt5QkFRTixLQVJNLEFBUUQ7Z0JBUkMsQUFHTixpQkFITSxBQUdOO2dCQUhNLEFBSU4saUJBSk0sQUFJTjtnQkFKTSxBQUtOLDZCQUxNLEFBS047Z0JBTE0sQUFNTixzQkFOTSxBQU1OO2dCQU5NLEFBT04sd0JBUE0sQUFPTixBQUdKOztnQkFBTTt3QkFDRixBQUNZLEFBQ1I7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2lCLEFBQ2I7dUJBQU8sRUFBQyxjQUxGLEFBQ1YsQUFJVyxBQUFlO0FBSjFCLEFBQ0ksYUFGTTt3QkFNUixBQUNVLEFBQ1I7c0JBRkYsQUFFUSxBQUNOOzZCQVRNLEFBTVIsQUFHZTtBQUhmLEFBQ0U7d0JBR0YsQUFDVSxBQUNSO3NCQUZGLEFBRU8sQUFDTDs2QkFiTSxBQVVSLEFBR2U7QUFIZixBQUNFO3dCQUdGLEFBQ1UsQUFDUjtzQkFGRixBQUVRLEFBQ047NkJBakJNLEFBY1IsQUFHZTtBQUhmLEFBQ0U7d0JBSVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDdCLEFBQ1UsQUFBNEIsQUFDcEM7c0JBRkYsQUFFUSxBQUNOOzZCQXJCUixBQUFjLEFBa0JSLEFBR2UsQUFJckI7QUFQTSxBQUNFOztpREFNRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVELEFBQ047bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSztBQURMO29CQURKLEFBQ0ksQUFDSyxBQUFLLEFBRVYsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQVJoQixBQUNJLEFBRUksQUFJSSxBQUNJLEFBS25CO0FBTG1CO0FBQUE7Ozs7O2lIQTNEUyxBOzs7OztpQ0FDbkI7QSwyQ0FBVyx3QkFBUyxNQUFBLEFBQU0sTUFBZixBQUFxQixBOzt1Q0FDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7aUNBQTlDO0E7O3lEQUdtQixRQURsQixBQUNrQixBQUFRLEFBQzdCOzZDQUFTLFFBRk4sQUFFTSxBQUFRLEFBQ2pCO2tEQUFjLFFBSFgsQUFHVyxBQUFRLEFBQ3RCO29EQUFnQixRQUpiLEFBSWEsQUFBUSxBQUN4Qjs2Q0FBUyxRQUxOLEFBS00sQUFBUSxBO0FBTGQsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5lLEEsQUFvRTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovY29kZS9ldGhlcmV1bS1jb250cmFjdHMvZXRoLWtpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\code\\ethereum-contracts\\eth-kickstart\\pages\\campaigns\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\code\\ethereum-contracts\\eth-kickstart\\pages\\campaigns\\show.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5lN2JiMmNiNDZiMDZmMjk4NGFlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/YTY3NzNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCB7Q2FyZCwgR3JpZCAgfWZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRyaWJ1dGVGb3JtJztcclxuXHJcbmNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5jYW1wYWlnbik7XHJcbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcclxuICAgICAgICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcclxuICAgICAgICAgICAgcmVxdWVzdENvdW50OiBzdW1tYXJ5WzJdLFxyXG4gICAgICAgICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcclxuICAgICAgICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FyZHMoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYmFsYW5jZSxcclxuICAgICAgICAgICAgbWFuYWdlcixcclxuICAgICAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgICAgICAgcmVxdWVzdENvdW50LFxyXG4gICAgICAgICAgICBhcHByb3ZlcnNDb3VudFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxyXG4gICAgICAgICAgICAgICAgbWV0YTonQWRkcmVzcyBvZiBNYW5hZ2VyJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3RzIHRvIHdpdGhkcmF3IG1vbmV5JyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9XHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCB0aGlzIG11Y2ggd2VpIHRvIGJlY29tZSBhIGNvbnRyaWJ1dG9yJ1xyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogcmVxdWVzdENvdW50LFxyXG4gICAgICAgICAgICAgICAgbWV0YTonTnVtYmVyIG9mIHJlcXVlc3RzJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlcXVlc3RzIG11c3QgYmUgdm90ZWQgb24gYnkgYXBwcm92ZXJzIHRvIGJlIGNhc2hlZCBvdXQgdG8gcmVjaXBpZW50c1wiXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgQXBwcm92ZXJzJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBjb250cmlidXRlZCB0byB0aGlzIGNhbXBhaWduIGFuZCBhcmUgYXBwcm92ZXJzJ1xyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsICdldGhlcicpLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ0NhbXBhaWduIEJhbGFuY2UgKGV0aGVyKScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBiYWxhbmNlIGlzIGhvdyBtdWNoIG1vbmV5IHRoaXMgY2FtcGFnaW4gaGFzIGxlZnQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMz5DYW1QYWlnbiBTaG93PC9oMz5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBUUE7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBRkE7QUFJQTtBQUVBO0FBSUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBS0E7QUFMQTtBQUFBOzs7Ozs7Ozs7O0FBMURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==