import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DesktopPreviewApp from './component';

const selector = createStructuredSelector({
  blocks: state => state.blocks,
});

export default connect(selector)(DesktopPreviewApp);
