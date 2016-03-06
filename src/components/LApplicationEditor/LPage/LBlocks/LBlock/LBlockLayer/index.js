import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import size from 'lodash/size';

import { viewsRepository } from 'repositories/ViewsRepository';

import {
  downBlockPosition, switchNextView, switchPrevView, upBlockPosition,
  startEditing,
} from 'actions/blocks';

import LBlockLayer from './LBlockLayer';

const hasMultipleBlocksSelector = state => size(state.blocks) > 1;
const hasMultipleViewsSelector = (state, props) =>
  size(viewsRepository.getCompatibleViews(props.block.view)) > 1;

const lBlockLayerSelector = createStructuredSelector({
  hasMultipleViews: hasMultipleViewsSelector,
  hasMultipleBlocks: hasMultipleBlocksSelector,
  hasControlActivity: state => state.application.controlActivityTimeoutId > 0,
});

const actions = {
  onBlockPositionDown: downBlockPosition,
  onViewSwitchNext: switchNextView,
  onViewSwitchPrev: switchPrevView,
  onBlockPositionUp: upBlockPosition,
  onEditingStart: startEditing,
};

export default connect(lBlockLayerSelector, actions)(LBlockLayer);
