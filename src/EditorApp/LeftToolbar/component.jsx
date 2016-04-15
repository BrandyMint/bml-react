import React, { PropTypes } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const STYLE = { position: 'fixed', top: 32, left: 32 };

const LeftToolbar = ({ toggleMenu, enable }) => {

  if (enable) {
    return (
      <FloatingActionButton style={STYLE} backgroundColor="#000" onTouchTap={toggleMenu}>
          <MenuIcon />
        </FloatingActionButton>
      );
  }

  return <noscript />;
};

LeftToolbar.propTypes = {
  enable: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default LeftToolbar;
