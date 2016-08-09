import React from 'react';

import ShowApp from 'ShowApp';
import ReactTooltip from 'react-tooltip';
import TopToolbar from 'EditorApp/TopToolbar';
import { DESKTOP_PREVIEW_MODE } from 'EditorApp/TopToolbar/modes';

const DesktopPreviewApp = () => (
  <ShowApp>
    <TopToolbar mode={DESKTOP_PREVIEW_MODE} />
    <ReactTooltip />
  </ShowApp>
);

export default DesktopPreviewApp;
