import { LOADING_STATE_NONE } from 'constants/loadingStates';
// import Blocks from 'constants/defaultBlocks';

export const EXAMPLE_LANDING_VARIANT_UUID = '10ba27fa-0628-44fd-af24-8430eea47ca7';

export default {
  addBlockForm: {
    selectedIndex: null,
    position: null,
  },
  application: {
    exitUrl: '/',

    landingVariantUuid: null,

    loadingState: LOADING_STATE_NONE,
    isSaving: false,
    hasUnsavedChanges: false,

    controlActivityTimeoutId: null,
  },
  blocks: null, // Blocks,
  modal: {
    current: null,
  },
};
