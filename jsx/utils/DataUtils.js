'use strict';

var CatData = require('../data/CategoriesData');

module.exports = {
  getItemTags: function (itemKey) {
    var tags = [];
    var catsKeys = Object.keys(CatData);
    catsKeys.forEach(function(tag) {
      if (CatData[tag].items[itemKey]) {
        tags.push(tag);
      }
    });
    return tags;
  }
};
