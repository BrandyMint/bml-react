import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LApplicationPreview from './LApplicationPreview';

const selector = createStructuredSelector({
  blocks: state => state.blocks,
});

export default connect(selector)(LApplicationPreview);
