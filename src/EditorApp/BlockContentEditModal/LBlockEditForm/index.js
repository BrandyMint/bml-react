import { connect } from 'react-redux';
import find from 'lodash/find';
import { createStructuredSelector } from 'reselect';

import { editBlockSelector } from 'selectors';

import {
  changeNodeAttribute,
  changeContent,
  changeBackgroundImage,
  changeForm,
} from 'actions/blocks';

import LBlockEditForm from './LBlockEditForm';

const selector = createStructuredSelector({
  block: editBlockSelector,
});

const actions = {
  changeNodeAttribute,
  changeContent,
  changeBackgroundImage,
  changeForm,
};

export default connect(selector, actions)(LBlockEditForm);
