import React, { PropTypes } from 'react';
import Toolbar from 'components/ui-elements/Toolbar';
import concat from 'lodash/concat';

import ExitBubble from 'components/EditorApp/Bubbles/ExitBubble';
import RestoreBubble from 'components/EditorApp/Bubbles/RestoreBubble';
import StateBubble from 'components/EditorApp/Bubbles/StateBubble';

import ColorBubble from 'components/EditorApp/Bubbles/ColorBubble';
import BoxedBubble from 'components/EditorApp/Bubbles/BoxedBubble';

const list = [<BoxedBubble />, <ColorBubble />];

const LeftToolbar = ({ open, hasUnsavedChanges }) => {
  if (hasUnsavedChanges) {
    return (
      <Toolbar
        open={open}
        vertical="top"
        horizontal="left"
        Lead={StateBubble}
        Items={concat(list, <RestoreBubble />)}
      />
    );
  }
  return (
    <Toolbar
      open={open || true}
      vertical="top"
      horizontal="left"
      Lead={ExitBubble}
      Items={list}
    />
  );
};

LeftToolbar.propTypes = {
  open: PropTypes.bool.isRequired,
  hasUnsavedChanges: PropTypes.bool.isRequired,
};

export default LeftToolbar;
