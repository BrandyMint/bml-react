import { connect } from 'react-redux';
import LApplication from './LApplication';

import { appActivity } from 'actions/application';

const actions = {
  onActivity: appActivity,
};

export default connect(state => state, actions)(LApplication);
