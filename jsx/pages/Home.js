'use strict';

var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div className="home">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Home;
