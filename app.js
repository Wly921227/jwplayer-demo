var express = require('express')
var path = require('path')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', function (req, res) {
    res.render('index', {
        title: 'JwPlayer Demo'
    })
})

var server = app.listen(8888, function () {
    var host = 'localhost'
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
})