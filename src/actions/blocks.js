import uuid from 'uuid';

import get from 'lodash/get';
import head from 'lodash/head';

import BLOCK_TYPES from 'constants/blockTypes';
import BLOCK_VIEWS from 'constants/blockViews';

export const CHANGE_BLOCK_CONTENT = 'CHANGE_BLOCK_CONTENT';
export const CHANGE_BLOCK_NODE_ATTRIBUTES = 'CHANGE_BLOCK_NODE_ATTRIBUTES';

export const START_ADDING_BLOCK = 'START_ADDING_BLOCK';
export const CANCEL_ADDING_BLOCK = 'CANCEL_ADDING_BLOCK';
export const SELECT_BLOCK_FOR_ADDING = 'SELECT_BLOCK_FOR_ADDING';

export const START_EDITING_BLOCK = 'START_EDITING_BLOCK';
export const DELETE_EDITING_BLOCK = 'DELETE_EDITING_BLOCK';
export const CANCEL_EDITING_BLOCK = 'CANCEL_EDITING_BLOCK';

export const SUBMIT_ADDING_BLOCK = 'SUBMIT_ADDING_BLOCK';
export const SUBMIT_EDITING_BLOCK = 'SUBMIT_EDITING_BLOCK';

export const DOWN_BLOCK_POSITION = 'DOWN_BLOCK_POSITION';
export const UP_BLOCK_POSITION = 'UP_BLOCK_POSITION';
export const SWITCH_NEXT_VIEW = 'SWITCH_NEXT_VIEW';
export const SWITCH_PREV_VIEW = 'SWITCH_PREV_VIEW';

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

  dispatch({
    type: SUBMIT_EDITING_BLOCK,
    payload: { block },
  });
};

export const cancelEditingBlock = () => ({
  type: CANCEL_EDITING_BLOCK,
});

export const deleteEditingBlock = () => (dispatch, getState) => {
  const { editBlockForm } = getState();
  const { uuid } = editBlockForm;

  if (uuid) {
    dispatch({
      type: DELETE_EDITING_BLOCK,
      payload: { uuid },
    });
  }
};

export const submitAddingBlock = () => (dispatch, getState) => {
  const { addBlockForm } = getState();
  const { position, selectedIndex } = addBlockForm;

  if (selectedIndex === null) return;

  const blockType = get(BLOCK_TYPES, selectedIndex);
  const firstViewOfType = head(get(BLOCK_VIEWS, blockType.type));

  if (blockType && firstViewOfType) {
    dispatch({
      type: SUBMIT_ADDING_BLOCK,
      payload: {
        position,
        block: {
          uuid: uuid.v4(),
          type: blockType.type,
          view: firstViewOfType.view,
          ...blockType.defaultData,
        },
      },
    });
  }
};

export const changeContent = (uuid, fieldName, value) => ({
  type: CHANGE_BLOCK_CONTENT,
  payload: { fieldName, uuid, value },
});

export const changeNodeAttributes = (uuid, fieldName, value) => ({
  type: CHANGE_BLOCK_NODE_ATTRIBUTES,
  payload: { fieldName, uuid, value },
});

export const selectBlockForAdding = (index) => ({
  type: SELECT_BLOCK_FOR_ADDING,
  payload: { index },
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
