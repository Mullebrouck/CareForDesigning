'use strict';

var React = require('react');
var Island = require('../components/Island');

var About = React.createClass({
    render: function () {
        return (
            <div className="about">
                {this.props.children}
                <Island title={"About"}/>
            </div>
        );
    }
});

module.exports = About;
