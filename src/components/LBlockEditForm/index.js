import { connect } from 'react-redux';

import { changeNodeAttribute, changeContentField } from 'actions/editBlockForm';

import LBlockEditForm from './LBlockEditForm';

const lBlockEditFormSelector = state => ({
  block: state.editBlockForm.block,
});

const actions = {
  onNodeAttributeChange: changeNodeAttribute,
  onContentChange: changeContentField,
};

export default connect(lBlockEditFormSelector, actions)(LBlockEditForm);
