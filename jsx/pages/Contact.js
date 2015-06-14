'use strict';

var React = require('react');
var NavigationBar = require('../components/NavigationBar');

var Contact = React.createClass({
    render: function () {
        return (
            <div className="contact">
                <NavigationBar index={3} />
            </div>
        );
    }
});

module.exports = Contact;
