import createReducer from 'helpers/createReducer';

const initialState = {
  exitUrl: 'google.ru',
  isEditMode: true,
};

const handlers = {};

export default createReducer(initialState, handlers);