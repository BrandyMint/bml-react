import { connect } from 'react-redux';
import find from 'lodash/find';

import {
  changeNodeAttribute,
  changeContent,
  changeBackgroundImage,
  changeForm,
} from 'actions/blocks';

import LBlockEditForm from './LBlockEditForm';

const selector = state => ({
  block: find(state.blocks, { uuid: state.editBlockForm.block.uuid }),
});

const actions = {
  changeNodeAttribute,
  changeContent,
  changeBackgroundImage,
  changeForm,
};

export default connect(selector, actions)(LBlockEditForm);
