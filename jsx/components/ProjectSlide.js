'use strict';

var React = require('react');

var ProjectSlide = React.createClass({
  render: function () {
    return (
      <div className="projectSlide">
        <img className="projectSlide-image"
          src={this.props.image} />

        <h3 className="projectSlide-title">
          {this.props.title}
        </h3>

        <h6 className="projectSlide-credits">
          {this.props.credits}
        </h6>
      </div>
    );
  }
});

module.exports = ProjectSlide;
