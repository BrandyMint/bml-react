export const CHANGE_NODE_ATTRIBUTE = 'CHANGE_NODE_ATTRIBUTE';

export const changeNodeAttribute = (name, value) => ({
  type: CHANGE_NODE_ATTRIBUTE,
  payload: { name, value },
});
