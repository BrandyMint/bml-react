import React from 'react';
import BodyClassName from 'react-body-classname';

import LPage from './LPage';
import LBlockAddModal from './LBlockAddModal';
import BlockEditModal from './BlockEditModal';
import LeftPanelMenu from './LeftPanelMenu';

import ReactTooltip from 'react-tooltip';

import Tracker from 'components/Tracker';
import ActivityController from 'components/ActivityController';

import LeftToolbar from './LeftToolbar';
// import PreviewToolbar from './PreviewToolbar';

import BaselineGrid from 'components/BaselineGrid';

import './index.scss';

const EditorApp = () => (
  <Tracker>
    <ActivityController>
      <BodyClassName className="EditorApp">

        <div>
          <div className="EditorApp-content">
            <BaselineGrid />
            <LPage />
          </div>

          <LeftToolbar />
          <LBlockAddModal />
          <BlockEditModal />
          <LeftPanelMenu />

          <ReactTooltip />
        </div>

      </BodyClassName>
    </ActivityController>
  </Tracker>
);

export default EditorApp;
