import { LOADING_STATE_NONE } from 'constants/loadingStates';

// TODO брать initialState-ы веток из reducer-ов
export default {
  addBlockForm: {
    selectedIndex: null,
    position: null,
  },
  tracker: {},
  application: {
    exitUrl: '/',

    variantUuid: null,

    loadingState: LOADING_STATE_NONE,
    isSaving: false,
    hasUnsavedChanges: false,
  },
  blocks: [], // Blocks,
  modal: {
    current: null,
  },
};
