import React from 'react';

import PreviewToolbar from 'EditorApp/DesktopPreviewApp/PreviewToolbar';
import ShowApp from 'ShowApp';
import ReactTooltip from 'react-tooltip';

const DesktopPreviewApp = () => (
  <ShowApp>
    <PreviewToolbar />
    <ReactTooltip />
  </ShowApp>
);

export default DesktopPreviewApp;
