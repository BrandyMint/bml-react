import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { expandModal, collapseModal } from 'actions/modal';

import component from './component';

const selector = createSelector(
  ({ modal }) => modal,
  ({ expand }) => ({ expand }),
);

const actions = { expandModal, collapseModal };

export default connect(selector, actions)(component);
