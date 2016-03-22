import React, { Component, PropTypes } from 'react';
import BodyClassName from 'react-body-classname';

import LPage from './LPage';
import LBlockAddModal from './LBlockAddModal';
import LBlockEditModal from './LBlockEditModal';

import ReactTooltip from 'react-tooltip';

import Tracker from 'components/Tracker';
import ActivityController from 'components/ActivityController';

import LeftToolbar from './LeftToolbar';
import PreviewToolbar from './PreviewToolbar';
import StateToolbar from './StateToolbar';

import BaselineGrid from 'components/BaselineGrid';

class EditorApp extends Component {
  getChildContext() {
    return { isEditMode: true };
  }

  render() {
    return (
      <Tracker>
        <ActivityController>
          <BodyClassName className="EditorApp">
            <div className="BML-App LApplicationEditor">
              <div className="LApplicationEditor-content">
								<BaselineGrid />
                <LPage />
              </div>
              <LeftToolbar />
              <PreviewToolbar />
              <StateToolbar />
              <LBlockAddModal />
              <LBlockEditModal />
              <ReactTooltip />
            </div>
          </BodyClassName>
        </ActivityController>
      </Tracker>
    );
  }
}

EditorApp.childContextTypes = {
  isEditMode: PropTypes.bool.isRequired,
};

export default EditorApp;
