'use strict';

var React = require('react');
var NavigationBar = require('../components/NavigationBar');

var About = React.createClass({
    render: function () {
        return (
            <div className="about">
                <NavigationBar index={1} />
            </div>
        );
    }
});

module.exports = About;
