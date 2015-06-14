'use strict';

var React = require('react');

var Portfolio = React.createClass({
    render: function () {
        return (
            <div className="portfolio">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Portfolio;
