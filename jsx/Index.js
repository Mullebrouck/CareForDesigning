'use strict';

var React = require('react');
var Home = require('./pages/Home');
var About = require('./pages/About');

var Index = React.createClass({
    render: function () {
        return (
            <About />
        );
    }
});

module.exports = Index;
