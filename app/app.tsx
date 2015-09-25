import React = require('react');
import ExampleApplication = require('./example-component');

var mdlComponentHandler = require('exports?componentHandler!./bower_components/material-design-lite/material.js');
var mdlCss = require('./bower_components/material-design-lite/material.css');

var start = new Date().getTime();
setInterval(() => {
    React.render(
        <ExampleApplication elapsed={ new Date().getTime() - start } />,
        document.getElementById('main')
    );
}, 50);