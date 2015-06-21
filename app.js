'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var request = require('superagent');

var favicon = require('serve-favicon');

var postUrl = 'https://docs.google.com/forms/d/1h0yHX8FR_M_9YxfAOosdfwZXt8W-5PueZoBHuTQp0cI/formResponse';

var app = express();
/*eslint-disable new-cap */
var router = express.Router();
/*eslint-enable new-cap */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);
app.use(favicon(__dirname + '/public/images/favicon.ico'));

router.get('/', function(req, res) {
    res.render('index', { title: 'Kaatje Mullebrouck' });
});

router.post('/contact', function(req, res) {
    var form = {
        'entry.1187367439': req.body.form.name,
        'entry.2042372520': req.body.form.email,
        'entry.1292810695': req.body.form.message
    };

    request.post(postUrl)
        .type('form')
        .accept('application/json')
        .send(form)
        .end(function(err, response) {
            if(err) {
                console.log('err:', err);
            } else {
                console.log('success google form', JSON.stringify(response.body));
            }
        });

    res.send({
        res: { name: form['entry.1187367439']}
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('404 - Not Found');
    err.status = 404;
    next(err);
});

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
