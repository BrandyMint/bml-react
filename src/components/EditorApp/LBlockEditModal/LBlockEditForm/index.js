import { connect } from 'react-redux';
import find from 'lodash/find';

import {
  changeNodeAttribute,
  changeContentField,
  changeBackgroundImage,
  changeForm,
} from 'actions/editBlockForm';

import LBlockEditForm from './LBlockEditForm';

const selector = state => ({
  block: find(state.blocks, { uuid: state.editBlockForm.block.uuid }),
});

const actions = {
  onNodeAttributeChange: changeNodeAttribute,
  onContentChange: changeContentField,
  onBackgroundImageChange: changeBackgroundImage,
  onFormChange: changeForm,
};

export default connect(selector, actions)(LBlockEditForm);
