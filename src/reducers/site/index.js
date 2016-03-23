import createReducer from 'helpers/createReducer';

import {
  CHANGE_THEME,
  TOGGLE_BOXED_LAYOUT,
} from 'actions/site';

import { DefaultTheme } from 'constants/themes';

import changeTheme from './handlers/changeTheme';
import toggleBoxedLayout from './handlers/toggleBoxedLayout';

export const initialState = {
  theme: DefaultTheme,
  isBoxed: true,
};

const handlers = {
  [CHANGE_THEME]: changeTheme,
  [TOGGLE_BOXED_LAYOUT]: toggleBoxedLayout,

};

export default createReducer(initialState, handlers);
