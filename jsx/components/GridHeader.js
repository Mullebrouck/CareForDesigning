'use strict';

var React = require('react');

var GridHeader = React.createClass({
    render: function () {

        var css = {
            base: 'gridHeader-button',
            showAll: this.props.index === 0 ? ' is-selected' : '',
            advertisement: this.props.index === 1 ? ' is-selected' : '',
            logo: this.props.index === 2 ? ' is-selected' : '',
            magazine: this.props.index === 3 ? ' is-selected' : '',
            packaging: this.props.index === 4 ? ' is-selected' : '',
            projects: this.props.index === 5 ? ' is-selected' : '',
            stationary: this.props.index === 6 ? ' is-selected' : '',
            web: this.props.index === 7 ? ' is-selected' : ''
        };

        return (
            <div className="gridHeader">
                <div className="gridHeader-mainRow">
                    <div className={css.base + css.showAll}
                      onClick={this.props.onClick.bind(null, 0)}>
                      Show All Projects
                    </div>
                </div>
                <div className="gridHeader-buttons">
                    <div className={css.base + css.advertisement}
                      onClick={this.props.onClick.bind(null, 1)}>
                      Advertisement
                    </div>
                    <div className={css.base + css.logo}
                      onClick={this.props.onClick.bind(null, 2)}>
                      Logo
                    </div>
                    <div className={css.base + css.magazine}
                      onClick={this.props.onClick.bind(null, 3)}>
                      Magazine
                    </div>
                    <div className={css.base + css.packaging}
                      onClick={this.props.onClick.bind(null, 4)}>
                      Package
                    </div>
                    <div className={css.base + css.projects}
                      onClick={this.props.onClick.bind(null, 5)}>
                      Projects
                    </div>
                    <div className={css.base + css.stationary}
                      onClick={this.props.onClick.bind(null, 6)}>
                      Stationary
                    </div>
                    <div className={css.base + css.web}
                      onClick={this.props.onClick.bind(null, 7)}>
                      Web
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = GridHeader;
