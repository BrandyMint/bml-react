import React, { Component, PropTypes } from 'react';
import BodyClassName from 'react-body-classname';
import EditorRightSidebar from 'components/EditorRightSidebar';

import './index.css';

class App extends Component {
  render() {
    const { landingVersionUuid } = this.props;
    const src = `/editor/${landingVersionUuid}/show`;
    return (
      <BodyClassName className="MobilePreviewBody">
        <div className="MobilePreview">
          <div className="MobilePreview-viewport">
            <iframe id="iframe" className="MobileScreen" src={src} width={375} height={667} />
          </div>
          <EditorRightSidebar />
        </div>
      </BodyClassName>
    );
  }
}

App.propTypes = {
  landingVersionUuid: PropTypes.string.isRequired,
};

export default App;
