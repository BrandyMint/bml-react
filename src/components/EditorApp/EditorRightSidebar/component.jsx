import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import FullscreenIcon from 'react-icons/lib/md/desktop-windows';
// import FullscreenEditor from 'react-icons/lib/fa/edit';
// import FullscreenIcon from 'react-icons/lib/go/screen-full';
import MobileIcon from 'react-icons/lib/go/device-mobile';
import EditorSaveButton from './EditorSaveButton';

import ColorStyleSelector from './ColorStyleSelector';
import ReactTooltip from 'react-tooltip';

class EditorRightSidebar extends Component {
  render() {
    const { variantUuid } = this.props;
    return (
      <div className="EditorRightSidebar">
        <Link
          to={`/editor/${variantUuid}/preview`}
          data-tip="Предпросмотр сайта на экране компьютера"
          className="IconLink"
        >
          <FullscreenIcon />
        </Link>
        <ReactTooltip />
        <Link
          to={`/editor/${variantUuid}/mobilePreview`}
          data-tip="Предпросмотр сайта на экране телефона"
          className="IconLink"
        >
          <MobileIcon />
        </Link>
        <ReactTooltip />
        <ColorStyleSelector />
        <div className="EditorRightSidebar-bottom">
          <EditorSaveButton />
        </div>
      </div>
    );
  }
}

EditorRightSidebar.propTypes = {
  variantUuid: PropTypes.string.isRequired,
};

export default EditorRightSidebar;
