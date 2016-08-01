import React from 'react';
import BodyClassName from 'react-body-classname';

import LPage from './LPage';
import LBlockAddModal from './LBlockAddModal';
import BlockEditModal from './BlockEditModal';
import LeftPanelMenu from './LeftPanelMenu';
import TopToolbar from 'EditorApp/TopToolbar';

import ReactTooltip from 'react-tooltip';

import Tracker from 'components/Tracker';
import ActivityController from 'components/ActivityController';

// import FloatingAddButton from './FloatingAddButton';

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

          <LeftPanelMenu />
          <TopToolbar />
          <LBlockAddModal />
          <BlockEditModal />

          <ReactTooltip />
        </div>

      </BodyClassName>
    </ActivityController>
  </Tracker>
);

export default EditorApp;
