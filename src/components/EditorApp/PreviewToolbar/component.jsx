import React, { PropTypes } from 'react';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

const STYLE = { position: 'fixed', bottom: 32, right: 32 };

const PreviewToolbar = ({ enable, startAddingBlock }) => {
  if (!enable) { return <noscript />; }

  const onTouchTap = () => startAddingBlock();

  return (
      <FloatingActionButton style={STYLE} onTouchTap={onTouchTap}>
        <ContentAdd />
      </FloatingActionButton>
    );
};

PreviewToolbar.propTypes = {
  enable: PropTypes.bool.isRequired,
  startAddingBlock: PropTypes.func.isRequired,
};

export default PreviewToolbar;
