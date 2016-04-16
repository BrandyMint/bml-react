import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import component from './component';

const selector = createSelector(
  state => state.application,
  (appliction) => (
    {
      isEditor: appliction.isEditor,
    }
  )
);

export default connect(selector)(component);
