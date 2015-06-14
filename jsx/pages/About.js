'use strict';

var React = require('react');
var NavigationBar = require('../components/NavigationBar');
var Island = require('../components/Island');

var About = React.createClass({
    render: function () {
        return (
            <div className="about">
                <NavigationBar index={1} />
                <Island title={"About"}/>
            </div>
        );
    }
});

module.exports = About;
