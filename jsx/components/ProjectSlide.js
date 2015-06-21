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

        {this.props.buttonLink && this.props.buttonText ? (
            <a href={this.props.buttonLink} target="_blank"
               className="projectSlide-button">
              {this.props.buttonText}
            </a>
        ) : null }
      </div>
    );
  }
});

module.exports = ProjectSlide;
