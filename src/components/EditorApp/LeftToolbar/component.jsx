import React from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import ColorBubble from './ColorBubble';
import BoxedBubble from './BoxedBubble';

const LeftToolbar = () => (
  <Toolbar
    vertical="top"
    horizontal="left"
    Lead={ColorBubble}
    Items={[<BoxedBubble />]}
  />
);

export default LeftToolbar;
