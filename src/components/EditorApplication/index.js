import { connect } from 'react-redux';
import component from './component';

import { loadVersion } from 'actions/landingVersions';

const actions = { loadVersion };

const selector = state => ({
  loadingState: state.application.loadingState,
});

export default connect(selector, actions)(component);
