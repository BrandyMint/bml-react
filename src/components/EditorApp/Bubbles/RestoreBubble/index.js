import { connect } from 'react-redux';
import component from './component';

import { restoreSite } from 'actions/application';

const actions = { restoreSite };

const selector = ({ application }) => ({ hasUnsavedChanges: application.hasUnsavedChanges });

export default connect(selector, actions)(component);
