import createReducer from 'helpers/createReducer';

import {
  ON_ACTIVITY,
} from 'actions/activity';

const initialState = {
  controlTimer: null,
};

const handlers = {
  [ON_ACTIVITY]: (state, action) => (
    {
      ...state,
      ...action.payload,
    }
  ),
};

export default createReducer(initialState, handlers);
