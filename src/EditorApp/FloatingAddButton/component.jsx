import React, { PropTypes } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const STYLE = { position: 'fixed', bottom: 32, right: 32 };

const FloatingAddButton = ({ enable, startAddingBlock }) => {
  if (!enable) { return <noscript />; }

  const onTouchTap = () => startAddingBlock();

  return (
      <FloatingActionButton style={STYLE} onTouchTap={onTouchTap}>
        <ContentAdd />
      </FloatingActionButton>
    );
};

FloatingAddButton.propTypes = {
  enable: PropTypes.bool.isRequired,
  startAddingBlock: PropTypes.func.isRequired,
};

export default FloatingAddButton;
