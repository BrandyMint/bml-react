export const CHANGE_NODE_ATTRIBUTE = 'CHANGE_NODE_ATTRIBUTE';
export const CHANGE_CONTENT_FIELD = 'CHANGE_CONTENT_FIELD';
export const CHANGE_BACKGROUND_IMAGE = 'CHANGE_BACKGROUND_IMAGE';
export const CHANGE_FORM = 'CHANGE_FORM';

export const changeNodeAttribute = (name, value) => ({
  type: CHANGE_NODE_ATTRIBUTE,
  payload: { name, value },
});

export const changeContentField = (name, value) => ({
  type: CHANGE_CONTENT_FIELD,
  payload: { name, value },
});

export const changeBackgroundImage = (name, value) => ({
  type: CHANGE_BACKGROUND_IMAGE,
  payload: { name, value },
});

export const changeForm = (name, value) => ({
  type: CHANGE_FORM,
  payload: { name, value },
});
