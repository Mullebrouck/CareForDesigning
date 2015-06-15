'use strict';

var React = require('react');
var GridHeader = require('./GridHeader');
var GridItem = require('./GridItem');
//var Project = require('./Project');
var GridData = require('../data/GridItemsData');
var CatData = require('../data/CategoriesData');
var DataUtils = require('../utils/DataUtils');

var Grid = React.createClass({
  getInitialState: function () {
    return {
      category: 'all'
    };
  },
  render: function () {
    var catKey = this.state.category;
    var items,
      iKeys,
      onClickTag = this.onGridNavClick;

    if (catKey === 'all') {
      iKeys = Object.keys(GridData);
    } else {
      iKeys = Object.keys(CatData[catKey].items);
    }

   items = iKeys.map(function (k) {
      var item = GridData[k];
      var tags = DataUtils.getItemTags(k);

      return (
        <GridItem tags={tags} image={item.image}
                  onClickTag={onClickTag}
                  name={item.name}/>
      );
    });

    return (
      <div className="grid">
        <GridHeader
          onClick={onClickTag}
          category={this.state.category}/>

        {items}
      </div>
    );
  },
  onGridNavClick: function () {
    this.setState({
      category: arguments[0]
    });
  }
});

module.exports = Grid;
