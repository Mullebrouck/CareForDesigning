'use strict';

var React = require('react');

var ProjectSlide = React.createClass({
  render: function(){
    return (
      <div className="projectSlide">
        <img className="projectSlide-image"
      src="images/Automobuild_Flyer_HB.jpg" />
        <h3 className="projectSlide-title"> Automobuild Flyer Happy birds Event
        </h3>
        <h6 className="projectSlide-credits"> Mock Up : SparkleStock
        </h6>
      </div>
    );
  }
});

module.exports = ProjectSlide;
