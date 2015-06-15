'use strict';

var React = require('react');

var GridItem = React.createClass({

  render: function () {
    return (
      <div className="gridItem">
      <img className="gridItem-image"
      src="images/WeddingNailArt_Edgy.png" />

      <h5 className="gridItem-projectName"> Magazine </h5>
      <div className="gridItem-tags">

      <div className="gridItem-columnLeft">
      <h6 className="gridItem-tag"> # Advertisement </h6>
      <h6 className="gridItem-tag"> # Logo </h6>
      </div>

      <div className="gridItem-columnCenter">
      <h6 className="gridItem-tag"> # Magazine </h6>
      <h6 className="gridItem-tag"> # Package </h6>
      </div>

      <div className="gridItem-columnRight">
      <h6 className="gridItem-tag"> # Projects </h6>
      <h6 className="gridItem-tag"> # Stationary </h6>
      </div>
      </div>
      </div>
    );
  }
});

module.exports = GridItem;
