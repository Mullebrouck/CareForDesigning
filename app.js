'use strict';

var express = require('express');
var path = require('path');

var app = express();
/*eslint-disable new-cap */
var router = express.Router();
/*eslint-enable new-cap */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

router.get('/', function(req, res) {
    res.render('index', { title: 'Kaatje Design' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('404 - Not Found');
    err.status = 404;
    next(err);
});

var port = process.env.port || 8080;

app.listen(port);
