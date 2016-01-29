import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import size from 'lodash/size';

import BLOCK_VIEWS from 'constants/blockViews';

import {
  downBlockPosition, switchNextView, switchPrevView, upBlockPosition,
  startEditing,
} from 'actions/blocks';

import LBlockLayer from './LBlockLayer';

const isEditModeSelector = state => state.application.isEditMode;
const hasMultipleBlocksSelector = state => size(state.blocks) > 1;
const hasMultipleViewsSelector = (state, props) => size(BLOCK_VIEWS[props.block.type]) > 1;

const lBlockLayerSelector = createStructuredSelector({
  isEditMode: isEditModeSelector,
  hasMultipleViews: hasMultipleViewsSelector,
  hasMultipleBlocks: hasMultipleBlocksSelector,
});

const actions = {
  onBlockPositionDown: downBlockPosition,
  onViewSwitchNext: switchNextView,
  onViewSwitchPrev: switchPrevView,
  onBlockPositionUp: upBlockPosition,
  onEditingStart: startEditing,
};

export default connect(lBlockLayerSelector, actions)(LBlockLayer);
