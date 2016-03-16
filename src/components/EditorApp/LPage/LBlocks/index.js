import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import component from './component';

const selector = createStructuredSelector({
  blocks: state => state.blocks,
});

const actions = { };

export default connect(selector, actions)(component);
