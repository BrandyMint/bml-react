import component from './component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import findIndex from 'lodash/findIndex';
import { deleteEditingBlock, switchNextView, downBlockPosition, upBlockPosition } from 'actions/blocks';

import { startEditingContent } from 'actions/blocks';

import { viewsRepository } from 'repositories/ViewsRepository';

const hasMultipleViewsSelector = (state, props) =>
  viewsRepository.getCompatibleViews(props.block.viewName).length > 1;

const isEnableSelector = ({ application, modal }) => (!application.zoom && !modal.current);

const enableMoveDownSelector = ({ blocks }, { block: { uuid } }) =>
  findIndex(blocks, { uuid }) < blocks.length - 1;

const enableMoveUpSelector = ({ blocks }, { block: { uuid } }) =>
  findIndex(blocks, { uuid }) > 0;

const selector = createStructuredSelector({
  hasMultipleViews: hasMultipleViewsSelector,
  enable: isEnableSelector,
  enableMoveDown: enableMoveDownSelector,
  enableMoveUp: enableMoveUpSelector,
  schema: (state, { block: { viewName }}) => viewsRepository.getContentSchemaByViewName(viewName),
});

const actions = {
  onBlockPositionDown: downBlockPosition,
  onBlockPositionUp: upBlockPosition,

  onViewSwitchNext: switchNextView,
  onDelete: deleteEditingBlock,

  onStartContentEditing: startEditingContent,
};

export default connect(selector, actions)(component);
