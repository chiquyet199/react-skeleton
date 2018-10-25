var path = require('path')
var express = require('express')

var app = express()

var staticPath = path.join(__dirname, '/dist')
app.use(express.static(staticPath))

app.listen(1992, function() {
  console.log('server is running on port 1992')
})
