'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:campaign', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtCQUE2QixBQUE3QixrQkFDSyxBQURMLElBQ1MsQUFEVCx3QkFDaUMsQUFEakMsbUJBRUssQUFGTCxJQUVTLEFBRlQsZ0NBRXlDLEFBRnpDLDZCQUdLLEFBSEwsSUFHUyxBQUhULG9DQUc2QyxBQUg3Qzs7QUFLQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L2NvZGUvZXRoZXJldW0tY29udHJhY3RzL2V0aC1raWNrc3RhcnQifQ==