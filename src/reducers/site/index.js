import createReducer from 'helpers/createReducer';

import { CHANGE_THEME } from 'actions/site';
import { DefaultTheme } from 'constants/themes';

import changeTheme from './handlers/changeTheme';

export const initialState = {
  theme: DefaultTheme,
};

const handlers = {
  [CHANGE_THEME]: changeTheme,
};

export default createReducer(initialState, handlers);
