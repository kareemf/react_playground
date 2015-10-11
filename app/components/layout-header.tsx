import React = require('react');

class LayoutHeader extends React.Component<{}, {}> {
    render() {
        return(
          <header className='mdl-layout__header'>
            <div className='mdl-layout__header-row'>
              <span className='mdl-layout-title'>App</span>
              <div className='mdl-layout-spacer'></div>
            </div>
          </header>
        );
    }
}

export = LayoutHeader;