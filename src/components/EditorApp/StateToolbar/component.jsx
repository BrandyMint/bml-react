import React from 'react';
import Toolbar from 'components/ui-elements/Toolbar';

import StateBubble from './StateBubble';

const StateToolbar = () => (
  <Toolbar
    vertical="bottom"
    horizontal="right"
    Lead={StateBubble}
  />
);

export default StateToolbar;
