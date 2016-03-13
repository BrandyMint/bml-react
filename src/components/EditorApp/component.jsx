import React, { Component, PropTypes } from 'react';
import BodyClassName from 'react-body-classname';

import LPage from './LPage';
import LBlockAddModal from './LBlockAddModal';
import LBlockEditModal from './LBlockEditModal';

import EditorLeftSidebar from './EditorLeftSidebar';
import EditorRightSidebar from './EditorRightSidebar';

import Tracker from 'components/Tracker';

import './index.css';

class EditorApp extends Component {
  render() {
    const { onActivity } = this.props;
    return (
      <Tracker>
        <BodyClassName className="EditorApp">
          <div
            className="BML-App LApplicationEditor"
            onMouseMove={onActivity}
            onContextMenu={onActivity}
          >
            <EditorLeftSidebar />
            <div className="LApplicationEditor-content">
              <LPage />
            </div>
            <EditorRightSidebar />
            <LBlockAddModal />
            <LBlockEditModal />
          </div>
        </BodyClassName>
      </Tracker>
    );
  }
}

EditorApp.propTypes = {
  onActivity: PropTypes.func.isRequired,
};

export default EditorApp;
