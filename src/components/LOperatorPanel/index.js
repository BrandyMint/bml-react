import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { saveChanges } from 'actions/landingVariants';

import LOperatorPanel from './LOperatorPanel';

const applicationSelector = state => state.application;

const operatorPanelSelector = createSelector(
  applicationSelector,

  (application) => ({
    isSaving: application.isSaving,
    hasUnsavedChanges: application.hasUnsavedChanges,
    hasControlActivity: application.controlActivityTimeoutId > 0,
  }),
);

const actions = {
  onSaveChanges: saveChanges,
};

export default connect(operatorPanelSelector, actions)(LOperatorPanel);
