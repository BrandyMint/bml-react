import React, { Component } from 'react';
import { Link } from 'react-router';

// import FullscreenIcon from 'react-icons/go/device-desktop';
import FullscreenIcon from 'react-icons/go/screen-full';
import MobileIcon from 'react-icons/go/device-mobile';

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
