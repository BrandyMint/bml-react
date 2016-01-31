export const CHANGE_NODE_ATTRIBUTE = 'CHANGE_NODE_ATTRIBUTE';
export const CHANGE_CONTENT_FIELD = 'CHANGE_CONTENT_FIELD';

export const changeNodeAttribute = (name, value) => ({
  type: CHANGE_NODE_ATTRIBUTE,
  payload: { name, value },
});

export const changeContentField = (name, value) => ({
  type: CHANGE_CONTENT_FIELD,
  payload: { name, value },
});
