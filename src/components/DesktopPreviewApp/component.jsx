import React from 'react';

import PreviewToolbar from './PreviewToolbar';
import ShowApp from 'components/ShowApp';
import ReactTooltip from 'react-tooltip';

const DesktopPreviewApp = () => (
  <ShowApp>
    <PreviewToolbar />
    <ReactTooltip />
  </ShowApp>
);

export default DesktopPreviewApp;
