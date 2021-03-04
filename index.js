//Load express module with `require` directive
var express = require('express')
var app = express()
//Define port
var port = 9995
//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('project4 biotches')
})
//Launch listening server on port 9995
app.listen(port, function () {
    console.log('this is project4 listening on port ${port}!')
})