import React = require('react');

class ExampleApplication extends React.Component<{elapsed: number}, {}> {
    render() {
        var elapsed = Math.round(this.props.elapsed / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
        var message =
            `React has been successfully running for ${seconds} seconds!!`;

        return(
            <div>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  Button
                </button>
                <p>{ message } </p>
            </div>
        );
    }
}

export = ExampleApplication;