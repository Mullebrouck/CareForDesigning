'use strict';

var React = require('react');
var Island = require('../components/Island');

var Contact = React.createClass({
    render: function () {
        return (
            <div className="contact">
                {this.props.children}
                <Island title={"Contact"}/>
            </div>
        );
    }
});

module.exports = Contact;
