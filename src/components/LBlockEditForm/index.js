import { connect } from 'react-redux';

import { changeNodeAttribute } from 'actions/editBlockForm';

import LBlockEditForm from './LBlockEditForm';

const lBlockEditFormSelector = state => ({
  block: state.editBlockForm.block,
});

const actions = {
  onNodeAttributeChange: changeNodeAttribute,
};

export default connect(lBlockEditFormSelector, actions)(LBlockEditForm);
