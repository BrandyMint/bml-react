import { connect } from 'react-redux';
import component from './component';
import { createSelector, createStructuredSelector } from 'reselect';
import { EDIT_BLOCK_CONTENT } from 'reducers/modal';

import { changeContent } from 'actions/blocks';

import { viewsRepository } from 'repositories/ViewsRepository';

const currentModalSelector = state => state.modal.current;
const isVisibleSelector = createSelector(
  currentModalSelector,
  currentModal => currentModal === EDIT_BLOCK_CONTENT
);

const formSelector = ({ editBlockContentForm }) => editBlockContentForm;
const blockSelector = createSelector( formSelector, ({ block }) => block );
const viewNameSelector = createSelector( blockSelector, ({ viewName }) => viewName );
const uuidSelector = createSelector( blockSelector, ({ uuid }) => uuid );

const schemaSelector = createSelector( viewNameSelector, (viewName) =>  ( viewName && viewsRepository.getContentSchemaByViewName(viewName)));


const schemaFieldsSelector = createSelector( schemaSelector, ({ fields }) => fields );
const contentSelector = createSelector( blockSelector, ({ content }) => content );

const selector = createStructuredSelector({
  open: isVisibleSelector,
  schemaFields: schemaFieldsSelector,
  content: contentSelector,
  uuid: uuidSelector,
});

const actions = { changeContent };
export default connect(selector, actions)(component);
