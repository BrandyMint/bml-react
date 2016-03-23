import React, { PropTypes } from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import ExitBubble from './ExitBubble';
import StateBubble from './StateBubble';
import DesktopPreviewBubble from './DesktopPreviewBubble';
import MobilePreviewBubble from './MobilePreviewBubble';

const PreviewToolbar = ({ hasUnsavedChanges }) => {
  if (hasUnsavedChanges) {
    return (
      <Toolbar
        vertical="top"
        horizontal="right"
        Lead={StateBubble}
        Items={[<MobilePreviewBubble />, <DesktopPreviewBubble />, <ExitBubble />]}
      />
    );
  }

  return (
    <Toolbar
      vertical="top"
      horizontal="right"
      Lead={ExitBubble}
      Items={[<MobilePreviewBubble />, <DesktopPreviewBubble />]}
    />
  );
};

PreviewToolbar.propTypes = {
  hasUnsavedChanges: PropTypes.bool.isRequired,
};

export default PreviewToolbar;
