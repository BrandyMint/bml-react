import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import backgroundResolver from 'helpers/backgroundResolver';

import component from './component';

const selector = createStructuredSelector({
  blocks: state => backgroundResolver(state.blocks),
});

export default connect(selector)(component);
