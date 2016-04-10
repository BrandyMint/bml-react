import React, { PropTypes } from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import DesktopPreviewBubble from 'components/EditorApp/Bubbles/DesktopPreviewBubble';
import MobilePreviewBubble from 'components/EditorApp/Bubbles/MobilePreviewBubble';
import ScaleBubble from 'components/EditorApp/Bubbles/ScaleBubble';
import PublicLinkBubble from 'components/EditorApp/Bubbles/PublicLinkBubble';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

const STYLE = { position: 'fixed', bottom: 32, right: 32 };

const PreviewToolbar = ({ enable, open, startAddingBlock }) => {
  if (!enable) { return <noscript />; }

  const onTouchTap = () => startAddingBlock();

  return (
    <FloatingActionButton style={STYLE} onTouchTap={onTouchTap}>
        <ContentAdd />
      </FloatingActionButton>
    );
};

PreviewToolbar.propTypes = {
  open: PropTypes.bool.isRequired,
  enable: PropTypes.bool.isRequired,
  startAddingBlock: PropTypes.func.isRequired,
};

export default PreviewToolbar;
