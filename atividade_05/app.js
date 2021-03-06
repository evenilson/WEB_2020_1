var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
cors = require('cors')

var disciplinaRoute = require('./routes/DisciplinaRoute')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content_Type, Accept" )
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next()
})

app.use('/disciplinas', disciplinaRoute)

module.exports = app;
