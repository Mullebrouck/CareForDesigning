'use strict';

var React = require('react');

var NavigationBar = React.createClass({
    render: function () {

        var css = {
            base: 'navigationBar-button',
            home: this.props.index === 0 ? ' is-selected' : '',
            about: this.props.index === 1 ? ' is-selected' : '',
            portfolio: this.props.index === 2 ? ' is-selected' : '',
            contact: this.props.index === 3 ? ' is-selected' : ''
        };

        return (
            <header className="navigationBar">
                <div className="navigationBar-buttons">
                    <div className={css.base + css.home}>Home</div>
                    <div className={css.base + css.about}>About</div>
                    <div className={css.base + css.portfolio}>Portfolio</div>
                    <div className={css.base + css.contact}>Contact</div>
                </div>
            </header>
        );
    }
});

module.exports = NavigationBar;
