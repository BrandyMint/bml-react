import component from './component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { editSettingsEnableSelector } from 'selectors';
import { deleteEditingBlock } from 'actions/blocks';
import { onPanelSettingsOpen } from 'actions/activity';

const selector = createStructuredSelector({
  enable: editSettingsEnableSelector,
  isOpen: (state) => state.activity.isPanelSettingsOpen,
});

const actions = { deleteEditingBlock, onPanelSettingsOpen };

export default connect(selector, actions)(component);
