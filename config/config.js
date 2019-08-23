var path = require('path');
var express = require('express');
var routes = require('../routes');

module.exports = function(app) {

  app.use('/public/',express.static(path.join(__dirname,'../public')))
  routes.home(app);
  return app;

};
