import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LOperatorPanel from './LOperatorPanel';

const exitUrlSelector = state => state.application.exitUrl;
const isEditModeSelector = state => state.application.isEditMode;

const operatorPanelSelector = createStructuredSelector({
  exitUrl: exitUrlSelector,
  isEditMode: isEditModeSelector,
});

export default connect(operatorPanelSelector)(LOperatorPanel);