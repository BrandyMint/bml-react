import React from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import DesktopPreviewBubble from './DesktopPreviewBubble';
import MobilePreviewBubble from './MobilePreviewBubble';

const PreviewToolbar = () => (
  <Toolbar
    vertical="top"
    horizontal="right"
    Lead={DesktopPreviewBubble}
    Items={[<MobilePreviewBubble />]}
  />
);

export default PreviewToolbar;
