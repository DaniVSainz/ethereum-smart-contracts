'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

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
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault;

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 13:
                                _this.setState({ loading: false });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 10]]);
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
                    lineNumber: 34
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'New Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
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
                    lineNumber: 42
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Create!')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFLLEFBQU8sQUFBTzs7QUFDM0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBR1g7Ozs7Ozs7Ozs7Ozs7OzswTkFDRixBO2lDQUFRLEFBQ2lCLEFBQ3JCOzBCQUZJLEFBRVUsQUFDZDtxQkFISSxBQUdLLEE7QUFITCxBQUNKLGlCLEFBS0o7aUdBQVcsaUJBQUEsQUFBTyxPQUFQO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFFTjs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU8sY0FIeEIsQUFHUCxBQUFjLEFBQStCOztnREFIdEM7Z0RBQUE7dUNBTW9CLGNBQUEsQUFBSyxJQU56QixBQU1vQixBQUFTOztpQ0FBMUI7QUFOSCxvREFBQTtnREFBQTt5REFPRyxBQUFRLFFBQVIsQUFBZ0IsZUFBZSxNQUFBLEFBQUssTUFBcEMsQUFBMEMscUJBQTFDLEFBQ0Q7MENBQ1MsU0FUWCxBQU9HLEFBQ0ksQUFDSSxBQUFTO0FBRGIsQUFDRixpQ0FGRjs7aUNBUEg7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBWUg7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFaM0IsQUFZSCxBQUFjLEFBQW9COztpQ0FFdEM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FkUixBQWNQLEFBQWMsQUFBVTs7aUNBZGpCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBaUJGO3lCQUNMOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFFQSxpQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSx5Q0FBQSxBQUFDO3VCQUFELEFBQ1UsQUFDTjsrQkFGSixBQUVrQixBQUNkO3VCQUFPLEtBQUEsQUFBSyxNQUhoQixBQUdzQixBQUNsQjswQkFBVyx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLHFCQUFxQixNQUFBLEFBQU0sT0FBcEQsQUFBUyxBQUFjLEFBQW9DO0FBSjFFOzs4QkFBQTtnQ0FMUixBQUNJLEFBSUksQUFPSjtBQVBJO0FBQ0ksaUNBTVIsQUFBRSwwQ0FBUSxPQUFWLE1BQWdCLFFBQWhCLEFBQXVCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQVpKLEFBWUksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQzs4QkFBQTtnQ0FBQTtBQUFBO2VBakJaLEFBQ0ksQUFHSSxBQWFJLEFBSWY7Ozs7O0FBOUNxQixBLEFBaUQxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovY29kZS9ldGhlcmV1bS1jb250cmFjdHMvZXRoLWtpY2tzdGFydCJ9