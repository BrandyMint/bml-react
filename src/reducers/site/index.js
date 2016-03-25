import createReducer from 'helpers/createReducer';
import { ThemesRepo, DefaultTheme } from 'constants/themes';

import {
  RESTORE_SITE,
} from 'actions/application';

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
  ({ ...payload, theme_name: ThemesRepo.find(payload.theme_name).name });

const restoreSite = (state, { payload: { theme_name, title, is_boxed } }) => (
  { theme_name, title, is_boxed }
);

const handlers = {
  [CHANGE_THEME]: changeTheme,
  [TOGGLE_BOXED_LAYOUT]: toggleBoxedLayout,
  [LANDING_VARIANT_LOAD_SUCCESS]: successLoad,
  [RESTORE_SITE]: restoreSite,
};

export default createReducer(initialState, handlers);
