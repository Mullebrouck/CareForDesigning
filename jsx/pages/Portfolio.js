'use strict';

var React = require('react');
var Footer = require('../components/Footer');
var Grid = require('../components/Grid');

var Portfolio = React.createClass({
    render: function () {
        return (
            <div className="portfolio">
                {this.props.children}
                <Grid />
                <Footer />
            </div>
        );
    }
});

module.exports = Portfolio;
