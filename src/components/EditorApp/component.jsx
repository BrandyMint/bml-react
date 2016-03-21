import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

import LPage from './LPage';
import LBlockAddModal from './LBlockAddModal';
import LBlockEditModal from './LBlockEditModal';

import EditorLeftSidebar from './EditorLeftSidebar';
import EditorRightSidebar from './EditorRightSidebar';

import Tracker from 'components/Tracker';
import ActivityController from 'components/ActivityController';
import PreviewToolbar from './PreviewToolbar';
import StateToolbar from './StateToolbar';

import BaselineGrid from 'components/BaselineGrid';

import './index.css';

class EditorApp extends Component {
  render() {
    return (
      <Tracker>
        <ActivityController>
          <BodyClassName className="EditorApp">
            <div className="BML-App LApplicationEditor">
              <EditorLeftSidebar />
              <div className="LApplicationEditor-content">
								<BaselineGrid />
                <LPage />
              </div>
              <PreviewToolbar />
              <LBlockAddModal />
              <LBlockEditModal />
            </div>
          </BodyClassName>
        </ActivityController>
      </Tracker>
    );
  }
}

export default EditorApp;
