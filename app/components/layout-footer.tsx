import React = require('react');

class LayoutFooter extends React.Component<{}, {}> {
    render() {
        return(
            <footer className='mdl-mega-footer'>
              <div className='mdl-mega-footer__bottom-section'>
                <div className='mdl-logo'>App</div>
                <ul className='mdl-mega-footer__link-list'>
                  <li><a href='#'>Help</a></li>
                  <li><a href='#'>Privacy & Terms</a></li>
                </ul>
              </div>
            </footer>
        );
    }
}

export = LayoutFooter;