'use strict';

var React = require('react');
var NavigationBar = require('../components/NavigationBar');

var Home = React.createClass({
    render: function () {
        return (
            <div className="home">
                <NavigationBar index={0}
                  onNavButtonClick={this.props.onNavButtonClick}/>
            </div>
        );
    }
});

module.exports = Home;
