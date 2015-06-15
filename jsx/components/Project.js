'use strict';

var React = require('react');
var ProjectSlide = require('./ProjectSlide');

var Project = React.createClass({
  render: function(){
    return (
      <div className="project">
        <h1 className="project-title"> Magazine
        </h1>
        <p className="project-description"> Lorem Ipsum
        </p>
        <ProjectSlide />
      </div>


    );
  }
});

module.exports = Project;
