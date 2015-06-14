'use strict';

var React = require('react');
var Home = require('./pages/Home');
var About = require('./pages/About');
var Portfolio = require('./pages/Portfolio');
var Contact = require('./pages/Contact');

var Index = React.createClass({
    render: function () {
        return (
            <Contact />
        );
    }
});

module.exports = Index;
