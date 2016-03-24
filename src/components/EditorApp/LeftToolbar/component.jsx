import React, { PropTypes } from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import ColorBubble from './ColorBubble';
import BoxedBubble from './BoxedBubble';
import ScaleBubble from './ScaleBubble';

const LeftToolbar = ({ open }) => (
  <Toolbar
    open={open}
    vertical="top"
    horizontal="left"
    Lead={ColorBubble}
    Items={[<BoxedBubble />, <ScaleBubble />]}
  />
);

LeftToolbar.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default LeftToolbar;
