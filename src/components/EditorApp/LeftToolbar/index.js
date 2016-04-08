import { connect } from 'react-redux';
import component from './component';

import { toggleMenu } from 'actions/application';

const actions = { toggleMenu };

const selector = ({ application }) => ({
  open: application.zoom,
  isMenuOpen: application.isMenuOpen,
  hasUnsavedChanges: application.hasUnsavedChanges,
});

export default connect(selector, actions)(component);
