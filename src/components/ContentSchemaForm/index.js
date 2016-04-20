import { connect } from 'react-redux';
import component from './component';
import { createSelector } from 'reselect';
import { changeContent } from 'actions/blocks';
import { viewsRepository } from 'repositories/ViewsRepository';
import { editBlockSelector } from 'selectors';

const selector = createSelector(
  editBlockSelector,
  ({ content, uuid, viewName }) => ({
    content, uuid,
    schemaFields: viewsRepository.getContentSchemaByViewName(viewName).fields,
  }),
);

const actions = { changeContent };
export default connect(selector, actions)(component);
