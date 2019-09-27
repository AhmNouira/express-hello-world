let path = require('path'),
  homeFile = path.join(__dirname, '../views/home.html')

module.exports = {
  index: (req, res) => {
    res.sendFile(homeFile)
  },
  user: (req, res) => {
    res.send("<h1> Hello, <span style='color:red;'>" + req.params.user + "</span> ! </h1>")
  }
}
