'use strict';

var React = require('react');
var NavigationBar = require('../components/NavigationBar');
var Island = require('../components/Island');

var Contact = React.createClass({
    render: function () {
        return (
            <div className="contact">
                <NavigationBar index={3}
                  onNavButtonClick={this.props.onNavButtonClick}/>
                <Island title={"Contact"}/>
            </div>
        );
    }
});

module.exports = Contact;
