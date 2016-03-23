import React from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import ColorBubble from './ColorBubble';

const LeftToolbar = () => (
  <Toolbar
    vertical="top"
    horizontal="left"
    Lead={ColorBubble}
    Items={[<ColorBubble />]}
  />
);

export default LeftToolbar;
