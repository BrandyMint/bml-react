import { connect } from 'react-redux';
import component from './component';

import { toggleMenu } from 'actions/application';

const actions = { toggleMenu };

const selector = ({ application, modal }) => ({
  enable: (!application.isMenuOpen && !modal.current && !application.editable && application.enableMenu),
});

export default connect(selector, actions)(component);
