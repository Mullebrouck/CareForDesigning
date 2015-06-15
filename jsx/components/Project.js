'use strict';

var React = require('react');
var ProjectSlide = require('./ProjectSlide');

var Project = React.createClass({
  render: function(){
    return (
      <div className="project">
        <h1 className="project-title"> Magazine
        </h1>
        <p className="project-description"> Autombuild is a toystore located
          downtown Los Gatos. I designed and formatted text and graphics
          for blog posts, newsletters, flyers, advertisment and brochures.
        </p>
        <ProjectSlide />
      </div>
    );
  }
});

module.exports = Project;
