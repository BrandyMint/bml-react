import React from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import DesktopPreviewBubble from './DesktopPreviewBubble';
import MobilePreviewBubble from './MobilePreviewBubble';

const PreviewToolbar = () => (
  <Toolbar
    position="top-right"
    Lead={DesktopPreviewBubble}
    Items={[<MobilePreviewBubble />]}
  />
);

export default PreviewToolbar;
