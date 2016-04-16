import invariant from 'invariant';
import { createSelector, createStructuredSelector } from 'reselect';

export const applicationSelector = ({ application }) => application;

export const editableEnableSelector = createSelector(
  applicationSelector,
  ({ zoom, isEditor }) => (!zoom && isEditor),
);

export const currentModalSelector = state => state.modal.current;

// Например isModalOpenSelector(EDIT_BLOCK_CONTENT);
export const isModalOpenSelector = (modalName) => (
  createSelector(
    currentModalSelector,
    currentModal => currentModal === modalName
  )
);

export const blocksSelector = (state) => state.blocks;
export const editBlockFormSelector = (state) => state.editBlockContentForm;
export const editBlockUuidSelector = createSelector(
  editBlockFormSelector,
  (editBlockContentForm) => editBlockContentForm.block.uuid,
);

// Возвращает блок из blocks который сейчас редактируется
// Находит его там по uuid
export const editBlockSelector = createSelector(
  blocksSelector, editBlockFormSelector,
  (blocks, editBlockContentForm) => {

    if (!editBlockContentForm || !editBlockContentForm.block) {
      return null;
    }

    const block = blocks.find(({ uuid }) => uuid == editBlockContentForm.block.uuid);

    invariant(block, `Not found block ${editBlockContentForm.block.uuid}`);
    return block;
  },
);
