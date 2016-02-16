import { connect } from 'react-redux';
import LApplicationEditor from './LApplicationEditor';

import { appActivity } from 'actions/application';

const actions = {
  onActivity: appActivity,
};

export default connect(state => state.application, actions)(LApplicationEditor);
