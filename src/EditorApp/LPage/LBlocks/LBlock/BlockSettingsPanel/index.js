import component from './component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { editSettingsEnableSelector } from 'selectors';
import { startEditingBlock } from 'actions/blocks';

const selector = createStructuredSelector({
  enable: editSettingsEnableSelector,
});

const actions = {
  startEditingBlock: startEditingBlock,
};

export default connect(selector, actions)(component);
