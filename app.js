var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); // added manually

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var propertiesRouter = require('./routes/properties');

var app = express();
app.use(cors());  // added manually

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/properties', propertiesRouter);  // added manually 

module.exports = app;
