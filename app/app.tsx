import React = require('react');
import ExampleApplication = require('./example-component');

var start = new Date().getTime();
setInterval(() => {
    React.render(
        <ExampleApplication elapsed={ new Date().getTime() - start } />,
        document.getElementById('main')
    );
}, 50);