import React, { Component, PropTypes } from 'react';
import BodyClassName from 'react-body-classname';
import ReactTooltip from 'react-tooltip';
import PreviewToolbar from 'components/DesktopPreviewApp/PreviewToolbar';

import './index.css';


// Специфика фотографии телефона
const IFRAME_WIDTH = 375;
const IFRAME_HEIGHT = 667;

class App extends Component {
  render() {
    const { variantUuid } = this.props;
    const src = `/editor/${variantUuid}/show`;
    return (
      <BodyClassName className="MobilePreviewBody">
        <div className="MobilePreview">
          <div className="MobilePreview-viewport">
            <iframe
              id="iframe"
              className="Mobile-iframe"
              frameBorder={0}
              src={src}
              width={IFRAME_WIDTH}
              height={IFRAME_HEIGHT}
            />
          </div>
          <PreviewToolbar mobile />
          <ReactTooltip />
        </div>
      </BodyClassName>
    );
  }
}

App.propTypes = {
  variantUuid: PropTypes.string.isRequired,
};

export default App;
