import createReducer from 'helpers/createReducer';

import {
  SAVE_TRACKING_INFO,
} from 'actions/tracker';

export const initialState = { };

const handlers = {
  [SAVE_TRACKING_INFO]: (state, action) => (
    {
      ...state,
      ...action.payload,
    }
  ),
};

export default createReducer(initialState, handlers);
