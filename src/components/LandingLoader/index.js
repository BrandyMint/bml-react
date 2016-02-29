import { connect } from 'react-redux';
import component from './component';

import { loadVariant } from 'actions/landingVariants';

const actions = { loadVariant };

const selector = state => ({
  loadingState: state.application.loadingState,
});

export default connect(selector, actions)(component);
