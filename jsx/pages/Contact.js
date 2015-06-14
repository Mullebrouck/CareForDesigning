'use strict';

var React = require('react');
var Island = require('../components/Island');
var Footer = require('../components/Footer');

var Contact = React.createClass({
    render: function () {
        return (
            <div className="contact">
                {this.props.children}
                <Island title={"Contact"}>
                  <p className="contact-information">
                    San Jose, CA 95128 kaatje.mullebrouck@gmail.com
                  </p>
                  <div className="contact-form">
                    <input className="contact-name" type="text"
                      placeholder="Name"/>
                    <input className="contact-email" type="email"
                      placeholder="Name@email.com"/>
                    <textarea className="contact-message"
                      placeholder="Message" rows="10"/>
                    <div className="contact-submit"> Submit </div>
                  </div>

                  <div className="contact-socialMedia">
                    <a href="https://twitter.com/kaatjemulle"
                      className="contact-twitter" target="_blank">
                        <img src="../images/Twitter.png" />
                    </a>
                    <a href="http://kaatjemullebrouck.tumblr.com/"
                      className="contact-tumblr" target="_blank">
                      <img src="../images/Tumblr.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/kaatjemullebrouck"
                      className="contact-linkedIn" target="_blank">
                      <img src="../images/LinkedIn.png" />
                    </a>
                    <a href="https://github.com/mullebrouck"
                      className="contact-gitHub" target="_blank">
                      <img src="../images/Twitter.png" />
                    </a>
                  </div>
                </Island>
                <Footer />
            </div>
        );
    }
});

module.exports = Contact;
