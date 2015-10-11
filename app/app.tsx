import React = require('react');
import TodoApp = require('./components/todo-app');

var mdlComponentHandler = require('exports?componentHandler!./bower_components/material-design-lite/material.js');
var mdlCss = require('./bower_components/material-design-lite/material.css');

React.render(
    <TodoApp />,
    document.getElementById('main')
);
