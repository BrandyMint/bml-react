import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentBlock } from 'actions/blocks';

import size from 'lodash/size';

import { viewsRepository } from 'repositories/ViewsRepository';

import {
  downBlockPosition, switchNextView, switchPrevView, upBlockPosition,
  startEditing,
} from 'actions/blocks';

import LBlockLayer from './LBlockLayer';

const hasMultipleBlocksSelector = state => size(state.blocks) > 1;
const hasMultipleViewsSelector = (state, props) =>
  size(viewsRepository.getCompatibleViews(props.block.viewName)) > 1;

const lBlockLayerSelector = createStructuredSelector({
  hasMultipleViews: hasMultipleViewsSelector,
  hasMultipleBlocks: hasMultipleBlocksSelector,
});

const actions = {
  onBlockPositionDown: downBlockPosition,
  onViewSwitchNext: switchNextView,
  onViewSwitchPrev: switchPrevView,
  onBlockPositionUp: upBlockPosition,
  onEditingStart: startEditing,

  onCurrentBlock: setCurrentBlock,
};

export default connect(lBlockLayerSelector, actions)(LBlockLayer);
