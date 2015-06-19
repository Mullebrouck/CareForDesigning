'use strict';

var React = require('react');
var Island = require('../components/Island');
var Footer = require('../components/Footer');
var Utils = require('../utils/ContactUtils');

var Contact = React.createClass({
    getInitialState: function () {
        return {
            name: '',
            email: '',
            message: '',
            isSent: false
        };
    },
    render: function () {
        return (
            <div className="contact">
                {this.props.children}
                <Island title={"Contact"}>
                  <p className="contact-information">
                    San Jose, CA 95128 kaatje.mullebrouck@gmail.com
                  </p>
                    {this.state.isSent
                        ? (<h2 className="contact-thanks">Thank you!</h2>)
                        : (
                   <form className="contact-form" onSubmit={this.onSubmit}>
                        <input className="contact-name" type="text"
                              value={this.state.name}
                               name="name"
                               autocomplete="name"
                              onChange={this.onChangeName}
                              placeholder="Name"/>
                        <input className="contact-email" type="email"
                              value={this.state.email}
                               name="email"
                               autocomplete="email"
                              onChange={this.onChangeEmail}
                              placeholder="Name@email.com"/>
                        <textarea className="contact-message"
                              value={this.state.message}
                              onChange={this.onChangeMessage}
                              placeholder="Message" rows="10"/>
                        <button className="contact-submit" type="submit"> Submit </button>
                      </form>
                    )}

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
                      <img src="../images/Github.png" />
                    </a>
                  </div>
                </Island>
                <Footer />
            </div>
        );
    },
    onChangeName: function (e) {
        this.setState({
            name: e.target.value
        });
    },
    onChangeEmail: function (e) {
        this.setState({
            email: e.target.value
        });
    },
    onChangeMessage: function (e) {
        this.setState({
            message: e.target.value
        });
    },
    onSubmit: function (e) {
        e.preventDefault();
        Utils.post(this.state);
        this.setState({
            isSent: true
        });
    }
});

module.exports = Contact;
