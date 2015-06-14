'use strict';

var React = require('react');
var Island = require('../components/Island');
var Footer = require('../components/Footer');

var About = React.createClass({
    render: function () {
        return (
            <div className="about">
                {this.props.children}
                <Island title={"About"}>
                  <p className="about-information"> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <a className="about-button" target="_blank"
                    href="/resume/KaatjeMullebrouck.pdf"> Resume </a>
                </Island>
                <Footer />
            </div>
        );
    }
});

module.exports = About;
