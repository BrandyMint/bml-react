import { connect } from 'react-redux';

import {
  changeNodeAttribute,
  changeContentField,
  changeBackgroundImage,
} from 'actions/editBlockForm';

import LBlockEditForm from './LBlockEditForm';

const lBlockEditFormSelector = state => ({
  block: state.editBlockForm.block,
});

const actions = {
  onNodeAttributeChange: changeNodeAttribute,
  onContentChange: changeContentField,
  onBackgroundImageChange: changeBackgroundImage,
};

export default connect(lBlockEditFormSelector, actions)(LBlockEditForm);
