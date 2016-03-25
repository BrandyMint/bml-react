import React, { PropTypes } from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import DesktopPreviewBubble from 'components/EditorApp/Bubbles/DesktopPreviewBubble';
import MobilePreviewBubble from 'components/EditorApp/Bubbles/MobilePreviewBubble';
import ScaleBubble from 'components/EditorApp/Bubbles/ScaleBubble';
import PublicLinkBubble from 'components/EditorApp/Bubbles/PublicLinkBubble';

const PreviewToolbar = ({ open }) => {
  return (
    <Toolbar
      open={open}
      vertical="top"
      horizontal="right"
      Lead={MobilePreviewBubble}
      Items={[<DesktopPreviewBubble />, <ScaleBubble />, <PublicLinkBubble />]}
    />
  );
};

PreviewToolbar.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default PreviewToolbar;
