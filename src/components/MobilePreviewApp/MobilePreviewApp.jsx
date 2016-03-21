import React, { Component, PropTypes } from 'react';
import BodyClassName from 'react-body-classname';
import ReactTooltip from 'react-tooltip';
import PreviewToolbar from 'components/DesktopPreviewApp/PreviewToolbar';

import './index.css';

class App extends Component {
  render() {
    const { variantUuid } = this.props;
    const src = `/editor/${variantUuid}/show`;
    return (
      <BodyClassName className="MobilePreviewBody">
        <div className="MobilePreview">
          <div className="MobilePreview-viewport">
            <iframe id="iframe" className="MobileScreen" src={src} width={375} height={667} />
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
