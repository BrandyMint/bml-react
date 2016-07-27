import component from './component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { editSettingsEnableSelector } from 'selectors';
import { startEditingBlock, deleteEditingBlock } from 'actions/blocks';

const selector = createStructuredSelector({
  enable: editSettingsEnableSelector,
});

const actions = { startEditingBlock, deleteEditingBlock };

export default connect(selector, actions)(component);
