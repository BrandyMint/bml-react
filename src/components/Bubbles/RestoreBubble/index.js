import { connect } from 'react-redux';
import component from './component';

import { restoreSite } from 'actions/application';

const selector = ({ application }) => ({
  originalSite: application.originalSite,
  hasUnsavedChanges: application.hasUnsavedChanges,
});

const actions = { restoreSite };

export default connect(selector, actions)(component);
