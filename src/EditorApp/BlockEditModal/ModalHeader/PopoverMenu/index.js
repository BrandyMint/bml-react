import component from './component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { deleteEditingBlock, switchNextView, downBlockPosition, upBlockPosition } from 'actions/blocks';
import { switchTab } from 'actions/editBlockForm';
import { editBlockFormTabSelector } from 'selectors';

//import findIndex from 'lodash/findIndex';
//const enableMoveDownSelector = ({ blocks }, { block: { uuid } }) =>
  //findIndex(blocks, { uuid }) < blocks.length - 1;

//const enableMoveUpSelector = ({ blocks }, { block: { uuid } }) =>
  //findIndex(blocks, { uuid }) > 0;


const selector = createStructuredSelector({
  // hasMultipleViews: hasMultipleViewsSelector,
  // enableMoveDown: enableMoveDownSelector,
  // enableMoveUp: enableMoveUpSelector,
  tab: editBlockFormTabSelector,
  // schema: (state, { block: { viewName }}) => viewsRepository.getContentSchemaByViewName(viewName),
});

const actions = {
  onBlockPositionDown: downBlockPosition,
  onBlockPositionUp: upBlockPosition,

  onViewSwitchNext: switchNextView,
  onDelete: deleteEditingBlock,

  switchTab: switchTab,
}

export default connect(selector, actions)(component);


//import { startEditingBlock } from 'actions/blocks';

//import { viewsRepository } from 'repositories/ViewsRepository';

//const hasMultipleViewsSelector = (state, props) =>
  //viewsRepository.getCompatibleViews(props.block.viewName).length > 1;

//const isEnableSelector = ({ application, modal }) => (!application.zoom && !application.editable && !modal.current);

//const actions = {
//};

