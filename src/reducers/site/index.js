import createReducer from 'helpers/createReducer';
import { DefaultTheme } from 'constants/themes';

import {
  CHANGE_THEME,
  TOGGLE_BOXED_LAYOUT,
} from 'actions/site';

import {
  LANDING_VARIANT_LOAD_SUCCESS,
} from 'actions/variants';

import changeTheme from './handlers/changeTheme';
import toggleBoxedLayout from './handlers/toggleBoxedLayout';

export const initialState = {
  theme_name: DefaultTheme.name,
  is_boxed: true,
  public_url: null,
};

// theme_name, is_boxed, public_url
const successLoad = (state, { payload }) =>
  ({ ...payload, theme_name: payload.theme_name || DefaultTheme.name });

const handlers = {
  [CHANGE_THEME]: changeTheme,
  [TOGGLE_BOXED_LAYOUT]: toggleBoxedLayout,
  [LANDING_VARIANT_LOAD_SUCCESS]: successLoad,
};

export default createReducer(initialState, handlers);
