import { connect } from 'react-redux';
import find from 'lodash/find';
import { createSelector } from 'reselect';

import {
  changeNodeAttribute,
  changeContent,
  changeBackgroundImage,
  changeForm,
} from 'actions/blocks';

import LBlockEditForm from './LBlockEditForm';

const blocksSelector = (state) => state.blocks;
const blockUuidSelector = (state) => state.editBlockContentForm;
const editBlockSelector = (blocks, editBlockContentForm) => {
  const block = find(blocks, { uuid: editBlockContentForm.block.uuid });
  return ( { block } );
};

const selector = createSelector(
  blocksSelector,
  blockUuidSelector,
  editBlockSelector,
);

const actions = {
  changeNodeAttribute,
  changeContent,
  changeBackgroundImage,
  changeForm,
};

export default connect(selector, actions)(LBlockEditForm);
