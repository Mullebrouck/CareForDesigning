'use strict';

var React = require('react');
var ProjectSlide = require('./ProjectSlide');

var Project = React.createClass({
  render: function(){
    var slides = this.props.slides.map(function (slide) {
      return (
          <ProjectSlide {...slide} />
      );
    });

    return (
      <div className="project">
        <h1 className="project-title">{this.props.title}</h1>
          {this.props.description.map(function(d) {
            return (
              <p className="project-description">{d}</p>
            );
          })}
        {slides}
      </div>
    );
  }
});

module.exports = Project;
