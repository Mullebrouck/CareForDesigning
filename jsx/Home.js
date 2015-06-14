'use strict';

var React = require('react');
var NavigationBar = require('./NavigationBar');

var Home = React.createClass({
    render: function () {
        return (
            <div className="home">
                <NavigationBar index={0} />
            </div>
        );
    }
});

module.exports = Home;
