import invariant from 'invariant';
import { createSelector } from 'reselect';

export const applicationSelector = ({ application }) => application;
export const modalSelector = ({ modal }) => modal;

export const editBlockFormTabSelector = ({ editBlockForm }) => (editBlockForm.tab);

export const editableEnableSelector = createSelector(
  applicationSelector,
  ({ zoom, isEditor }) => (!zoom && isEditor),
);

export const editSettingsEnableSelector = createSelector(
  applicationSelector,
  modalSelector,
  ({ zoom, isEditor, editable }, { current }) => (!zoom && !current && !editable && isEditor),
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
export const editBlockFormSelector = (state) => state.editBlockForm;

export const editFormBlockSelector = createSelector(
  editBlockFormSelector,
  (editBlockForm) => editBlockForm.block,
);

export const editBlockUuidSelector = createSelector(
  editBlockFormSelector,
  (editBlockForm) => editBlockForm.block.uuid,
);

// Возвращает блок из blocks который сейчас редактируется
// Находит его там по uuid
export const editBlockSelector = createSelector(
  blocksSelector, editBlockFormSelector,
  (blocks, editBlockForm) => {

    if (!editBlockForm || !editBlockForm.block) {
      return null;
    }

    const block = blocks.find(({ uuid }) => uuid == editBlockForm.block.uuid);

    invariant(block, `Not found block ${editBlockForm.block.uuid}`);
    return block;
  },
);

// Examples
// uuid: createSelector( editBlockSelector, ( block ) => block && block.uuid),
