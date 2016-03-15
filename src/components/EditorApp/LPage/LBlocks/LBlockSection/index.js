import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import backgroundResolver from 'helpers/backgroundResolver';

import { setCurrentBlock, startAddingBlock } from 'actions/blocks';

import component from './component';

const selector = createStructuredSelector({
  currentBlockUuid: state => state.application.currentBlockUuid,
  hasControlActivity: state => state.application.controlActivityTimeoutId > 0,
});

const actions = {
  onAddBlock: startAddingBlock,
  onCurrentBlock: setCurrentBlock,
};

export default connect(selector, actions)(component);

