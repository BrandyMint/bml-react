import { LOADING_STATE_NONE } from 'constants/loadingStates';

export const EXAMPLE_LANDING_VARIANT_UUID = '10ba27fa-0628-44fd-af24-8430eea47ca7';

// TODO брать initialState-ы веток из reducer-ов
export default {
  addBlockForm: {
    selectedIndex: null,
    position: null,
  },
  application: {
    exitUrl: '/',

    variantUuid: null,

    loadingState: LOADING_STATE_NONE,
    isSaving: false,
    hasUnsavedChanges: false,

    controlActivityTimeoutId: null,
  },
  blocks: [], // Blocks,
  modal: {
    current: null,
  },
};
