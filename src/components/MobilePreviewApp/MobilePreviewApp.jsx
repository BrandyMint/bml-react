import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';
import EditorRightSidebar from 'components/EditorRightSidebar';

import './index.css';

class App extends Component {
  render() {
    const src = '/preview';
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

export default App;
