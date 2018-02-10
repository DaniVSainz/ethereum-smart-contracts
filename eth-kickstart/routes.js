const routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new');
routes.add('/campaigns/:campaign', '/campaigns/show');

module.exports = routes;

