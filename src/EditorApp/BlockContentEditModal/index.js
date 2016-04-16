import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { EDIT_BLOCK_CONTENT } from 'reducers/modal';
import { isModalOpenSelector, editBlockSelector } from 'selectors';

import component from './component';

const selector = createStructuredSelector({
  open: isModalOpenSelector(EDIT_BLOCK_CONTENT),
  uuid: createSelector( editBlockSelector, ( block ) => block && block.uuid),
});

export default connect(selector)(component);
