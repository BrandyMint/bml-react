import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { saveChanges } from 'actions/landingVariants';

import component from './component';

const selector = createSelector(
  state => state.application,
  (application) => ({
    isSaving: application.isSaving,
    hasUnsavedChanges: application.hasUnsavedChanges,
  }),
);

const actions = {
  onSaveChanges: saveChanges,
};

export default connect(selector, actions)(component);
