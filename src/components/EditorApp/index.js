import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import component from './component';

const selector = createSelector(
  state => state.application,
  (appliction) => (
    {
      isEditMode: appliction.isEditMode,
    }
  )
);

export default connect(selector)(component);
