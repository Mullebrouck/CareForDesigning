'use strict';

var React = require('react');

var Island = React.createClass({
  render: function () {
        return (
          <div className="island">
            <div className="island-column">
              <div className="island-header">
                  <h2 className="island-name"> Kaatje Mullebrouck </h2>
                  <h4 className="island-title">{this.props.title}</h4>
              </div>
            </div>
          </div>
        );
    }
});

module.exports = Island;
