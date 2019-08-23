var express = require('express');
var router = express.Router();

var home = require('../controllers/home');

module.exports = function(app){
  router.get('/', home.index);
  router.get('/:user', home.user);
  app.use(router);
}
