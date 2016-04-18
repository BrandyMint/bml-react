import { connect } from 'react-redux';
import component from './component';
import { createSelector } from 'reselect';
import { EDIT_BLOCK_CONTENT } from 'reducers/modal';
import { changeBackgroundImage } from 'actions/blocks';
import { viewsRepository } from 'repositories/ViewsRepository';
import { isModalOpenSelector, editBlockSelector } from 'selectors';

import { uploadBackground } from 'actions/variants';

const selector = createSelector(
  editBlockSelector,
  ({ backgroundImage, uuid }) => ({
    backgroundImage, uuid,
  }),
);

const actions = { uploadBackground, changeBackgroundImage };

export default connect(selector, actions)(component);
