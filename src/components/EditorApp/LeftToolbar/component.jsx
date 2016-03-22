import React from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import ExitBubble from './ExitBubble';
import ColorBubble from './ColorBubble';

const LeftToolbar = () => (
  <Toolbar
    vertical="top"
    horizontal="left"
    Lead={ExitBubble}
    Items={[<ColorBubble />]}
  />
);

export default LeftToolbar;
