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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _contributeForm = require('../../components/contributeForm');

var _contributeForm2 = _interopRequireDefault(_contributeForm);

var _routes = require('../../routes');

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
                    lineNumber: 59
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'CamPaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_contributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'View Requests')))))));
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
                                    address: props.query.campaign,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVEsQUFBTSxBQUFNOztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7OztzQ0FlWTt5QkFRTixLQVJNLEFBUUQ7Z0JBUkMsQUFHTixpQkFITSxBQUdOO2dCQUhNLEFBSU4saUJBSk0sQUFJTjtnQkFKTSxBQUtOLDZCQUxNLEFBS047Z0JBTE0sQUFNTixzQkFOTSxBQU1OO2dCQU5NLEFBT04sd0JBUE0sQUFPTixBQUdKOztnQkFBTTt3QkFDRixBQUNZLEFBQ1I7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2lCLEFBQ2I7dUJBQU8sRUFBQyxjQUxGLEFBQ1YsQUFJVyxBQUFlO0FBSjFCLEFBQ0ksYUFGTTt3QkFNUixBQUNVLEFBQ1I7c0JBRkYsQUFFUSxBQUNOOzZCQVRNLEFBTVIsQUFHZTtBQUhmLEFBQ0U7d0JBR0YsQUFDVSxBQUNSO3NCQUZGLEFBRU8sQUFDTDs2QkFiTSxBQVVSLEFBR2U7QUFIZixBQUNFO3dCQUdGLEFBQ1UsQUFDUjtzQkFGRixBQUVRLEFBQ047NkJBakJNLEFBY1IsQUFHZTtBQUhmLEFBQ0U7d0JBSVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDdCLEFBQ1UsQUFBNEIsQUFDcEM7c0JBRkYsQUFFUSxBQUNOOzZCQXJCUixBQUFjLEFBa0JSLEFBR2UsQUFJckI7QUFQTSxBQUNFOztpREFNRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVELEFBQ047bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNLO0FBREw7b0JBREosQUFDSSxBQUNLLEFBQUssQUFHVixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQywwQ0FBZSxTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBUFosQUFDSSxBQUtJLEFBQ0ksQUFHUjtBQUhRO2tDQUdQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBakI1QixBQUNJLEFBRUksQUFVSSxBQUNJLEFBQ0ksQUFDSSxBQUNJLEFBUS9COzs7OztpSEE3RTRCLEE7Ozs7O2lDQUNuQjtBLDJDQUFXLHdCQUFTLE1BQUEsQUFBTSxNQUFmLEFBQXFCLEE7O3VDQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBLEFBQThCOztpQ0FBOUM7QTs7NkNBR08sTUFBQSxBQUFNLE1BRFosQUFDa0IsQUFDckI7eURBQXFCLFFBRmxCLEFBRWtCLEFBQVEsQUFDN0I7NkNBQVMsUUFITixBQUdNLEFBQVEsQUFDakI7a0RBQWMsUUFKWCxBQUlXLEFBQVEsQUFDdEI7b0RBQWdCLFFBTGIsQUFLYSxBQUFRLEFBQ3hCOzZDQUFTLFFBQUEsQSxBQU5OLEFBTWM7QUFOZCxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTmUsQSxBQWlGM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9jb2RlL2V0aGVyZXVtLWNvbnRyYWN0cy9ldGgta2lja3N0YXJ0In0=