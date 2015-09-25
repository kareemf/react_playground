import React = require('react');
import LayoutFooter = require('./layout-footer');
import LayoutHeader = require('./layout-header');


class ExampleApplication extends React.Component<{elapsed: number}, {}> {
    render() {
        var elapsed = Math.round(this.props.elapsed / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
        var message =
            `React has been successfully running for ${seconds} seconds!!`;

        return(
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <LayoutHeader/>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                            Button
                        </button>
                        <p>{message}</p>
                    </div>
                </main>
                <LayoutFooter/>
            </div>
        );
    }
}

export = ExampleApplication;