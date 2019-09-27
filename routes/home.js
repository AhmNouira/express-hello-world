let home = require('../controllers/home')

module.exports = (app) => {
  app.get('/', home.index)
  app.get('/:user', home.user)
}