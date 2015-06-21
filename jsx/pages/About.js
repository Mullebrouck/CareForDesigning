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
                  <p className="about-information">
                      {'Since I was a kid, I was passionate and driven to' +
                      ' express my creativity in art and music.'}
                  </p>
                  <p className="about-information">
                      {'That is why I decided to make the career switch ' +
                      'to Graphic Design. Now I feel like I can express ' +
                      'and explore my freedom in a more effective and ' +
                      'convincing way. I love thinking outside the box ' +
                      'and I am very eager to learn.'}
                  </p>
                  <p className="about-information">
                      {'In my spare time I enjoy learning new software ' +
                      'languages like HTML, SCSS, Java, ReactJS and Javascript.'}
                  </p>
                  <a className="about-button" target="_blank"
                    href="/downloads/Kaatje Mullebrouck Resume.pdf"> Resume </a>
                  <a className="about-button" target="_blank"
                      href="/downloads/Kaatje Mullebrouck Portfolio.pdf">
                      Portfolio
                  </a>
                </Island>
                <Footer />
            </div>
        );
    }
});

module.exports = About;
