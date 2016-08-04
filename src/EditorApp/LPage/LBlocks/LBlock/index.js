import { connect } from 'react-redux';
import { changeContent } from 'actions/blocks';
import { createStructuredSelector } from 'reselect';

import component from './component';

const selector = createStructuredSelector({
  panelSettingsOpen: (state) => state.activity.panelSettingsOpen,
});

const actions = {
  onContentChange: changeContent,
};

export default connect(selector, actions)(component);
