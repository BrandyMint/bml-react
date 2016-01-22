import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import size from 'lodash/size';

import {
  downBlockPosition, switchNextView, switchPrevView, upBlockPosition
} from 'actions/blocks';

import LBlockLayer from './LBlockLayer';

const isEditModeSelector = state => state.application.isEditMode;
const typeSelector = (_, props) => props.block.type;
const blockViewsSelector = state => state.blocks.views;
const hasMultipleBlockSelector = state => size(state.blocks.items) > 1;

const hasMultipleViewsSelector = createSelector(
  typeSelector,
  blockViewsSelector,

  (type, views) => size(views[type]) > 1
);

const lBlockLayerSelector = createStructuredSelector({
  isEditMode: isEditModeSelector,
  hasMultipleViews: hasMultipleViewsSelector,
  hasMultipleBlocks: hasMultipleBlockSelector,
});

const actions = {
  onBlockPositionDown: downBlockPosition,
  onViewSwitchNext: switchNextView,
  onViewSwitchPrev: switchPrevView,
  onBlockPositionUp: upBlockPosition,
};

export default connect(lBlockLayerSelector, actions)(LBlockLayer);