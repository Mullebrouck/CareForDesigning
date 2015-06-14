'use strict';

/*global document*/
var React = require('react');

var App = require('./Index');
var mount = document.querySelector('#react-main-mount');

React.render(<App />, mount);
