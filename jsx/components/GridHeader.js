'use strict';

var React = require('react');
var CatData = require('../data/CategoriesData');

var GridHeader = React.createClass({
    render: function () {
      var p = this.props;
      var cat = p.category;

        var css = {
            base: 'gridHeader-button',
            isSelected: ' is-selected',
            all: cat === 'all' ? ' is-selected' : ''
        };
      var categories = Object.keys(CatData).map(function(catKey) {
        var classes = cat === catKey
            ? css.base + css.isSelected
            : css.base;

        return (
          <div className={classes}
               onClick={p.onClick.bind(null, catKey)}>
            {CatData[catKey].name}
          </div>
          );
      });

        return (
            <div className="gridHeader">
                <div className="gridHeader-mainRow">
                    <div className={css.base + css.all}
                      onClick={p.onClick.bind(null, 'all')}>
                      Show All Projects
                    </div>
                </div>
                <div className="gridHeader-buttons">
                  {categories}
                </div>
            </div>
        );
    }
});

module.exports = GridHeader;
