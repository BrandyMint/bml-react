import createReducer from 'helpers/createReducer';

import Themes from 'constants/themes';

export const initialState = {
  theme: Themes[0],
};

const handlers = { };

export default createReducer(initialState, handlers);
