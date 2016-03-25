import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import backgroundResolver from 'helpers/backgroundResolver';

import component from './component';

const selector = createStructuredSelector({
  blocks: state => backgroundResolver(state.blocks),
  is_boxed: state => state.site.is_boxed,
});

export default connect(selector)(component);
