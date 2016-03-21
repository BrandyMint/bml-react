import React, { PropTypes } from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import ExitBubble from './ExitBubble';
import MobilePreviewBubble from 'components/EditorApp/PreviewToolbar/MobilePreviewBubble';
import DesktopPreviewBubble from 'components/EditorApp/PreviewToolbar/DesktopPreviewBubble';

const PreviewToolbar = ({ mobile }) => (
  <Toolbar
    vertical="top"
    horizontal="right"
    Lead={ExitBubble}
    Items={[mobile ? <DesktopPreviewBubble/> : <MobilePreviewBubble />]}
  />
);

PreviewToolbar.propTypes = {
  mobile: PropTypes.bool,
};

export default PreviewToolbar;
