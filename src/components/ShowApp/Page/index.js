import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import backgroundResolver from 'helpers/backgroundResolver';

import component from './component';

const selector = createStructuredSelector({
  blocks: state => backgroundResolver(state.blocks),
  isBoxed: state => state.site.isBoxed,
});

export default connect(selector)(component);
