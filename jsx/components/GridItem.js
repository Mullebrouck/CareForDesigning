'use strict';

var React = require('react');

var GridItem = React.createClass({

  render: function () {
    var p = this.props;
    var onClickTag = p.onClickTag;

    var tags = p.tags.map(function (tag) {
      return (
        <h6 className="gridItem-tag"
            onClick={onClickTag.bind(null, tag)}>
          # {tag}
        </h6>
      );
    });

    return (
      <div className="gridItem">
        <img className="gridItem-image"
             onClick={p.onClickProject}
             src={this.props.image}/>

        <h5 className="gridItem-projectName"
            onClick={p.onClickProject} >
          {this.props.name}
        </h5>

        <div className="gridItem-tags">
          <div className="gridItem-columnLeft">
            {tags[0] || <br />}
            {tags[3] || <br />}
            {tags[6] || <br />}
          </div>

          <div className="gridItem-columnCenter">
            {tags[1] || <br />}
            {tags[4] || <br />}
            {tags[7] || <br />}
          </div>

          <div className="gridItem-columnRight">
            {tags[2] || <br />}
            {tags[5] || <br />}
            {tags[8] || <br />}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = GridItem;
