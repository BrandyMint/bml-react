import React, { Component, PropTypes } from 'react';
import BodyClassName from 'react-body-classname';

import LPage from './LPage';
import LBlockAddModal from './LBlockAddModal';
import LBlockEditModal from './LBlockEditModal';

import EditorLeftSidebar from './EditorLeftSidebar';
import EditorRightSidebar from './EditorRightSidebar';

import './index.css';

class LApplication extends Component {
  render() {
    const { onActivity } = this.props;
    return (
      <BodyClassName className="Editor">
        <div className="LApplicationEditor" onMouseMove={onActivity} onContextMenu={onActivity}>
          <EditorLeftSidebar />
          <div className="LApplicationEditor-content">
            <LPage />
          </div>
          <EditorRightSidebar />
          <LBlockAddModal />
          <LBlockEditModal />
        </div>
      </BodyClassName>
    );
  }
}

LApplication.propTypes = {
  onActivity: PropTypes.func.isRequired,
};

export default LApplication;
