'use strict';

var React = require('react');

var ProjectSlide = React.createClass({
  render: function(){
    return (
      <div className="projectSlide">
        <img className="projectSlide-image"
      src="images/WeddingNailArt_Edgy.png" />
        <h3 className="projectSlide-title"> Magazine
        </h3>
        <h6 className="projectSlide-credits"> MockUp
        </h6>
      </div>
    );
  }
});

module.exports = ProjectSlide;
