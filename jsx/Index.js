'use strict';

var React = require('react');
var Home = require('./pages/Home');
var About = require('./pages/About');
var Portfolio = require('./pages/Portfolio');
var Contact = require('./pages/Contact');

var Index = React.createClass({
  getInitialState: function() {
    return {
      index: 0
    };
  },
  render: function () {
    var page;
    switch(this.state.index){
      case 0:
      page = (<Home index={0} onNavButtonClick={this.onNavButtonClick} />);
      break;
      case 1:
      page = (<About index={1} onNavButtonClick={this.onNavButtonClick} />);
      break;
      case 2:
      page = (<Portfolio index={2} onNavButtonClick={this.onNavButtonClick} />);
      break;
      case 3:
      page = (<Contact index={3} onNavButtonClick={this.onNavButtonClick} />);
      break;
      default:
      break;
    }
    return (
      <div>{page}</div>
    );
  },
  onNavButtonClick: function(index, e){
    this.setState({
      index: e
    });
  }
});

module.exports = Index;
