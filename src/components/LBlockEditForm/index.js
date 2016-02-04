import { connect } from 'react-redux';

import {
  changeNodeAttribute,
  changeContentField,
  changeBackgroundImage,
  changeForm,
} from 'actions/editBlockForm';

import LBlockEditForm from './LBlockEditForm';

const lBlockEditFormSelector = state => ({
  block: state.editBlockForm.block,
});

const actions = {
  onNodeAttributeChange: changeNodeAttribute,
  onContentChange: changeContentField,
  onBackgroundImageChange: changeBackgroundImage,
  onFormChange: changeForm,
};

export default connect(lBlockEditFormSelector, actions)(LBlockEditForm);
