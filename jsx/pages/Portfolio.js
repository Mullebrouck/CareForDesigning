'use strict';

var React = require('react');
var Footer = require('../components/Footer');

var Portfolio = React.createClass({
    render: function () {
        return (
            <div className="portfolio">
                {this.props.children}
                <Footer />
            </div>
        );
    }
});

module.exports = Portfolio;
