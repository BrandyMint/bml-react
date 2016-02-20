import { LOADING_STATE_NONE } from 'constants/loadingStates';
// import Blocks from 'constants/defaultBlocks';

export const EXAMPLE_LANDING_VERSION_UUID = '10ba27fa-0628-44fd-af24-8430eea47ca7';
const API_KEY = '5d8aa2f240c5d05e992e0e84f58ce965';


export default {
  addBlockForm: {
    selectedIndex: null,
    position: null,
  },
  application: {
    exitUrl: '/',

    landingVersionUuid: null,
    api_key: API_KEY,

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
