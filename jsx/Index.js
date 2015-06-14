'use strict';

var React = require('react');
var Home = require('./pages/Home');
var About = require('./pages/About');
var Portfolio = require('./pages/Portfolio');
var Contact = require('./pages/Contact');
var NavigationBar = require('./components/NavigationBar');

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
      page = (<Home>
            <NavigationBar index={0}
                   onNavButtonClick={this.onNavButtonClick} />
        </Home>
        );
      break;
      case 1:
      page = (<About>
            <NavigationBar index={1}
                   onNavButtonClick={this.onNavButtonClick} />
          </About>);
      break;
      case 2:
      page = (<Portfolio>
        <NavigationBar index={2}
                       onNavButtonClick={this.onNavButtonClick} />
      </Portfolio>);
      break;
      case 3:
      page = (<Contact>
        <NavigationBar index={3}
                       onNavButtonClick={this.onNavButtonClick} />
      </Contact>);
      break;
      default:
        page = (<Home>
          <NavigationBar index={0}
                         onNavButtonClick={this.onNavButtonClick} />
        </Home>);
      break;
    }
    return (
      <div>{page}</div>
    );
  },
  onNavButtonClick: function(){
    this.setState({
      index: arguments[0]
    });
  }
});

module.exports = Index;
