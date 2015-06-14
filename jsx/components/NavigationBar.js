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
                    <div className={css.base + css.home}
                      onClick={this.onClick.bind(null, 0)}>
                      Home
                    </div>
                    <div className={css.base + css.about}
                      onClick={this.onClick.bind(null, 1)}>
                      About
                    </div>
                    <div className={css.base + css.portfolio}
                      onClick={this.onClick.bind(null, 2)}>
                      Portfolio
                    </div>
                    <div className={css.base + css.contact}
                      onClick={this.onClick.bind(null, 3)}>
                      Contact
                    </div>
                </div>
            </header>
        );
    },
    onClick: function(index, e){
      this.props.onNavButtonClick(e);
    }
});

module.exports = NavigationBar;
