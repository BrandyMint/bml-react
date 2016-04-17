import { connect } from 'react-redux';
import component from './component';
import { createSelector } from 'reselect';
import { EDIT_BLOCK_CONTENT } from 'reducers/modal';
import { changeContent } from 'actions/blocks';
import { viewsRepository } from 'repositories/ViewsRepository';
import { isModalOpenSelector, editBlockSelector } from 'selectors';

const selector = createSelector(
  isModalOpenSelector(EDIT_BLOCK_CONTENT),
  editBlockSelector,
  (open, block) => {
    return {
      open,
      content: block.content,
      uuid: block.uuid,
      schemaFields: viewsRepository.getContentSchemaByViewName(block.viewName).fields,
    };
  }
);

const actions = { changeContent };
export default connect(selector, actions)(component);
