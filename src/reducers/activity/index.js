import createReducer from 'helpers/createReducer';

import {
  ON_ACTIVITY,
  ON_PANEL_SETTINGS_OPEN,
} from 'actions/activity';

const initialState = {
  controlTimer: null,
  isActive: false,
  panelSettingsOpen: null,
};

const handlers = {
  [ON_PANEL_SETTINGS_OPEN]: (state, { payload }) => (
    {
      ...state,
      panelSettingsOpen: payload,
    }
  ),
  [ON_ACTIVITY]: (state, action) => (
    {
      ...state,
      ...action.payload,
    }
  ),
};

export default createReducer(initialState, handlers);
