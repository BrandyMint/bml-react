import { connect } from 'react-redux';
import { saveTracking } from 'actions/tracker';
import component from './component';

const actions = { saveTracking };

const selector = state => ({
  tracker: state.tracker,
});

export default connect(selector, actions)(component);
