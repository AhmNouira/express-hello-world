let path = require('path'),
  express = require('express'),
  routes = require('../routes')

module.exports = (app) => {
  app.use('/public/',express.static(path.join(__dirname,'../public')))
  routes.home(app)
  return app
}