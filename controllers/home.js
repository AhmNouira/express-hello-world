path = require('path')

var homeFile = path.join(__dirname, '../views/home.html')

module.exports = {
  index: function(req, res) {
    res.sendFile(homeFile);
  },

  user: function(req, res){
    res.send("<h1> Hello, <span style='color:red;'>" + req.params.user + "</span> ! </h1>");
  }
}
