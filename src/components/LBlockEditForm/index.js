import { connect } from 'react-redux';

import { changeNodeAttribute, changeContent } from 'actions/editBlockForm';

import LBlockEditForm from './LBlockEditForm';

const lBlockEditFormSelector = state => ({
  block: state.editBlockForm.block,
});

const actions = {
  onNodeAttributeChange: changeNodeAttribute,
  onContentChange: changeContent,
};

export default connect(lBlockEditFormSelector, actions)(LBlockEditForm);
