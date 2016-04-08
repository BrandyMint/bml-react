import { connect } from 'react-redux';
import component from './component';

import { toggleMenu, closeMenu } from 'actions/application';

const selector = state => ({
  isMenuOpen: state.application.isMenuOpen,
});

const actions = {
  toggleMenu: toggleMenu,
  closeMenu: closeMenu,
};

export default connect(selector, actions)(component);
