import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { editBlockSelector } from 'selectors';
import LBlockEditForm from './LBlockEditForm';
import {
  changeNodeAttribute,
  changeContent,
  changeBackgroundImage,
  changeForm,
} from 'actions/blocks';

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
