import React, { PropTypes } from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import ExitBubble from './ExitBubble';
import MobilePreviewBubble from 'components/Bubbles/MobilePreviewBubble';
import DesktopPreviewBubble from 'components/Bubbles/DesktopPreviewBubble';

const PreviewToolbar = ({ mobile }) => (
  <Toolbar
    vertical="top"
    horizontal="right"
    Lead={ExitBubble}
    Items={[mobile ? <DesktopPreviewBubble /> : <MobilePreviewBubble />]}
  />
);

PreviewToolbar.propTypes = {
  mobile: PropTypes.bool,
};

export default PreviewToolbar;
