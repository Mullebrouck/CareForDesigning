'use strict';

var React = require('react');
var GridHeader = require('./GridHeader');
//var GridItem = require('./GridItem');
var Project = require('./Project');

var Grid = React.createClass({
  getInitialState: function() {
    return {
      index: 0
    };
  },
  render: function () {
        return (
          <div className="grid">
            <GridHeader
              onClick={this.onGridNavClick}
              index={0} />
              <Project />
          </div>
        );
    },
    onGridNavClick: function () {
      this.setState({
        index: arguments[0]
      });
    }
});

module.exports = Grid;
