import { connect } from 'react-redux';
import component from './component';
import { createSelector } from 'reselect';
import { changeBackgroundImage } from 'actions/blocks';
import { editBlockSelector } from 'selectors';

import { uploadBackground } from 'actions/variants';

const selector = createSelector(
  editBlockSelector,
  ({ backgroundImage, uuid }) => ({
    backgroundImage, uuid,
  }),
);

const actions = { uploadBackground, changeBackgroundImage };

export default connect(selector, actions)(component);
