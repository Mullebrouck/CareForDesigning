'use strict';

var React = require('react');
var GridHeader = require('./GridHeader');
var GridItem = require('./GridItem');
var Project = require('./Project');
var GridData = require('../data/GridItemsData');
var CatData = require('../data/CategoriesData');
var DataUtils = require('../utils/DataUtils');

var Grid = React.createClass({
    getInitialState: function () {
        return {
            category: 'all',
            project: undefined
        };
    },
    render: function () {
        var s = this.state;
        var catKey = this.state.category;
        var items,
            iKeys,
            projectProps = {},
            onClickProject = this.onClickProject,
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
                          key={k}
                          onClickProject={onClickProject.bind(null, k)}
                          onClickTag={onClickTag}
                          name={item.name}/>
            );
        });

        if (s.project) {
            projectProps = {
                onClick: this.onClickProject,
                title: GridData[s.project].name,
                description: GridData[s.project].description,
                slides: GridData[s.project].slides,
                key: s.project
            };
        }
        return (
            <div className="grid">
                <GridHeader
                    onClick={onClickTag}
                    category={this.state.category}/>

                {s.project ? (
                    <Project {...projectProps} />
                ) : items}
            </div>
        );
    },
    onClickProject: function () {
        this.setState({
            project: arguments[0]
        });
    },
    onGridNavClick: function () {
        this.setState({
            category: arguments[0],
            project: undefined
        });
    }
});

module.exports = Grid;
