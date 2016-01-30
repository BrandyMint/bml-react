import { connect } from 'react-redux';

import { changeContent } from 'actions/blocks';

import ContentSchemaForm from './ContentSchemaForm';

const selector = state => ({
  block: state.editBlockForm.block,
});

const actions = {
  onContentChange: changeContent,
};

export default connect(selector, actions)(ContentSchemaForm);
