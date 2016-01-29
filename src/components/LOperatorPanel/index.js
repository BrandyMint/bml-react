import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { saveChanges } from 'actions/landingVersions';

import LOperatorPanel from './LOperatorPanel';

const applicationSelector = state => state.application;

const operatorPanelSelector = createSelector(
  applicationSelector,

  (application) => ({
    exitUrl: application.exitUrl,
    isEditMode: application.isEditMode,
    hasUnsavedChanges: application.hasUnsavedChanges,
  }),
);

const actions = {
  onSaveChanges: saveChanges,
};

export default connect(operatorPanelSelector, actions)(LOperatorPanel);
