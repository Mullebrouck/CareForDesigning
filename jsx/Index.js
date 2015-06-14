'use strict';

var React = require('react');
var Home = require('./Home');
var About = require('./About');

var Index = React.createClass({
    render: function () {
        return (
            <About />
        );
    }
});

module.exports = Index;
