'use strict';

var request = require('superagent');

var ContactUtils = {
    post: function (form) {
        request
            .post('/contact')
            .accept('json')
            .type('json')
            .send({ form: form })
            .end(function(err, res) {
                if(err) {
                    console.error(err);
                } else if (res.ok) {
                    console.log(JSON.stringify(res.body.res.name));
                }
            });

    }
};

module.exports = ContactUtils;
