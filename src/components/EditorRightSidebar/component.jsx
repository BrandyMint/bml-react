import React, { Component } from 'react';
import { Link } from 'react-router';

import FullscreenIcon from 'react-icons/lib/go/device-desktop';
// import FullscreenEditor from 'react-icons/lib/fa/edit';
// import FullscreenIcon from 'react-icons/lib/go/screen-full';
import MobileIcon from 'react-icons/lib/go/device-mobile';

class EditorRightSidebar extends Component {
  render() {
    return (
      <div className="EditorRightSidebar">
        <Link to="/preview" className="IconLink">
          <FullscreenIcon />
        </Link>
        <Link to="/mobilePreview" className="IconLink">
          <MobileIcon />
        </Link>
      </div>
    );
  }
}

export default EditorRightSidebar;
