import React, { PropTypes } from 'react';
import Toolbar from 'components/ui-elements/Toolbar';
import concat from 'lodash/concat';

import ExitBubble from 'components/EditorApp/Bubbles/ExitBubble';
import RestoreBubble from 'components/EditorApp/Bubbles/RestoreBubble';
import StateBubble from 'components/EditorApp/Bubbles/StateBubble';

import ColorBubble from 'components/EditorApp/Bubbles/ColorBubble';
import BoxedBubble from 'components/EditorApp/Bubbles/BoxedBubble';

import MenuBubble from 'components/EditorApp/Bubbles/MenuBubble';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';

const STYLE = { position: 'fixed', top: 32, left: 32 };

const list = [<MenuBubble />, <BoxedBubble />, <ColorBubble />];

const LeftToolbar = ({ open, hasUnsavedChanges, toggleMenu, isMenuOpen }) => {

  const style = {...STYLE};

  if (isMenuOpen) {
    return <noscript />;
  }
  console.log(style.left);
  return (
    <FloatingActionButton style={style} backgroundColor="#000" onTouchTap={toggleMenu}>
        <MenuIcon />
      </FloatingActionButton>
    );
  //if (hasUnsavedChanges) {
    //return (
      //<Toolbar
        //open={open}
        //vertical="top"
        //horizontal="left"
        //Lead={StateBubble}
        //Items={concat(list, <RestoreBubble />)}
      ///>
    //);
  //}
  //return (
    //<Toolbar
      //open={open || true}
      //vertical="top"
      //horizontal="left"
      //Lead={ExitBubble}
      //Items={list}
    ///>
  //);
};

LeftToolbar.propTypes = {
  open: PropTypes.bool.isRequired,
  hasUnsavedChanges: PropTypes.bool.isRequired,
};

export default LeftToolbar;
