import component from './component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { editSettingsEnableSelector } from 'selectors';
import { deleteEditingBlock, downBlockPosition, upBlockPosition, switchNextView, switchPrevView } from 'actions/blocks';
import { startEditingBlock } from 'actions/blocks';

import findIndex from 'lodash/findIndex';
import { viewsRepository } from 'repositories/ViewsRepository';

const enableMoveDownSelector = ({ blocks }, { block: { uuid } }) =>
  findIndex(blocks, { uuid }) < blocks.length - 1;

const enableMoveUpSelector = ({ blocks }, { block: { uuid } }) =>
  findIndex(blocks, { uuid }) > 0;

const hasMultipleViewsSelector = (state, props) =>
  viewsRepository.getCompatibleViews(props.block.viewName).length > 1;

const hasFormSelector = (state, props) => !!props.block.form;

const selector = createStructuredSelector({
  hasMultipleViews: hasMultipleViewsSelector,
  hasForm: hasFormSelector,
  enableMoveDown: enableMoveDownSelector,
  enableMoveUp: enableMoveUpSelector,
  enable: editSettingsEnableSelector,
});

const actions = { startEditingBlock, deleteEditingBlock, upBlockPosition, downBlockPosition, switchNextView, switchPrevView };

export default connect(selector, actions)(component);
