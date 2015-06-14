'use strict';

var React = require('react');
var NavigationBar = require('../components/NavigationBar');

var Portfolio = React.createClass({
    render: function () {
        return (
            <div className="portfolio">
                <NavigationBar index={2}
                  onNavButtonClick={this.props.onNavButtonClick} />
            </div>
        );
    }
});

module.exports = Portfolio;
