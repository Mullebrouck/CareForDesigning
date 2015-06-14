'use strict';

var React = require('react');
var NavigationBar = require('../components/NavigationBar');

var Portfolio = React.createClass({
    render: function () {
        return (
            <div className="portfolio">
                <NavigationBar index={2} />
            </div>
        );
    }
});

module.exports = Portfolio;
