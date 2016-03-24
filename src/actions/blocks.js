import invariant from 'invariant';

export const CHANGE_BLOCK_CONTENT = 'CHANGE_BLOCK_CONTENT';
export const CHANGE_BLOCK_NODE_ATTRIBUTES = 'CHANGE_BLOCK_NODE_ATTRIBUTES';

export const START_ADDING_BLOCK = 'START_ADDING_BLOCK';
export const CANCEL_ADDING_BLOCK = 'CANCEL_ADDING_BLOCK';

export const START_EDITING_BLOCK = 'START_EDITING_BLOCK';
export const DELETE_EDITING_BLOCK = 'DELETE_EDITING_BLOCK';
export const CANCEL_EDITING_BLOCK = 'CANCEL_EDITING_BLOCK';

export const SUBMIT_ADDING_BLOCK = 'SUBMIT_ADDING_BLOCK';
export const SUBMIT_EDITING_BLOCK = 'SUBMIT_EDITING_BLOCK';

export const DOWN_BLOCK_POSITION = 'DOWN_BLOCK_POSITION';
export const UP_BLOCK_POSITION = 'UP_BLOCK_POSITION';
export const SWITCH_NEXT_VIEW = 'SWITCH_NEXT_VIEW';
export const SWITCH_PREV_VIEW = 'SWITCH_PREV_VIEW';

export const CURRENT_BLOCK = 'CURRENT_BLOCK';

export const setCurrentBlock = (uuid) => ({
  type: CURRENT_BLOCK,
  payload: { uuid },
});

export const startAddingBlock = (position) => ({
  type: START_ADDING_BLOCK,
  payload: { position },
});

export const cancelAddingBlock = () => ({
  type: CANCEL_ADDING_BLOCK,
});

export const startEditing = (block) => ({
  type: START_EDITING_BLOCK,
  payload: { block },
});

export const submitEditingBlock = () => (dispatch, getState) => {
  const { editBlockForm } = getState();
  const { block } = editBlockForm;

  return dispatch({
    type: SUBMIT_EDITING_BLOCK,
    payload: { block },
  });
};

export const cancelEditingBlock = () => ({
  type: CANCEL_EDITING_BLOCK,
});

export const deleteEditingBlock = () => (dispatch, getState) => {
  const { editBlockForm } = getState();
  const { uuid } = editBlockForm.block;

  invariant(uuid, 'No uuid for deletion');

  return dispatch({
    type: DELETE_EDITING_BLOCK,
    payload: { uuid },
  });
};

export const submitAddingBlock = (example) => (dispatch, getState) => {
  const { addBlockForm } = getState();
  const { position } = addBlockForm;

  return dispatch({
    type: SUBMIT_ADDING_BLOCK,
    payload: {
      position,
      example,
    },
  });
};

export const changeContent = (uuid, path, value) => ({
  type: CHANGE_BLOCK_CONTENT,
  payload: { path, uuid, value },
});

export const changeNodeAttributes = (uuid, fieldName, value) => ({
  type: CHANGE_BLOCK_NODE_ATTRIBUTES,
  payload: { fieldName, uuid, value },
});

export const downBlockPosition = (uuid) => ({
  type: DOWN_BLOCK_POSITION,
  payload: { uuid },
});

export const upBlockPosition = (uuid) => ({
  type: UP_BLOCK_POSITION,
  payload: { uuid },
});

export const switchNextView = (uuid) => ({
  type: SWITCH_NEXT_VIEW,
  payload: { uuid },
});

export const switchPrevView = (uuid) => ({
  type: SWITCH_PREV_VIEW,
  payload: { uuid },
});
