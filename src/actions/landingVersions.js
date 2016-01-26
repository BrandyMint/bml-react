import get from 'lodash/get';

import { API_CALL } from 'middleware/API';

export const LANDING_VERSION_UPDATE_REQUEST = 'LANDING_VERSION_UPDATE_REQUEST';
export const LANDING_VERSION_UPDATE_SUCCESS = 'LANDING_VERSION_UPDATE_SUCCESS';
export const LANDING_VERSION_UPDATE_FAILURE = 'LANDING_VERSION_UPDATE_FAILURE';

export const saveChanges = () => (dispatch, getState) => {
  const state = getState();
  const {
    blocks,
    application: { landing_version_uuid: uuid },
  } = getState();

  return dispatch({
    [API_CALL]: {
      endpoint: `/landing_versions/${uuid}`,
      method: 'PUT',
      query: { blocks },
      types: [
        LANDING_VERSION_UPDATE_REQUEST,
        LANDING_VERSION_UPDATE_SUCCESS,
        LANDING_VERSION_UPDATE_FAILURE,
      ],
    },
  });
};

  // console.log(landing_version_uuid, blocks);

  // const landingVersionUuid = get(store.getState(), 'application.landing_version_uuid');






  // const { location, params } = state.router;
  // const { query } = location;
  // const { username } = params;

  // const collectionId = query[COLLECTION];
  // const term = query[COOKBOOK_RECIPES_FILTER];
  // const offset = nextPage ? get(state, 'feed.paging.offset') : 0;

  // const requestQuery = {};

  // if (username) {
  //   requestQuery.username = username;
  // }

  // if (collectionId) {
  //   requestQuery.collectionId = collectionId;
  // }

  // if (term) { requestQuery.term = term; }

  // const types = nextPage
  //   ? [
  //     LOAD_NEXT_FEED_PAGE_REQUEST,
  //     LOAD_NEXT_FEED_PAGE_SUCCESS,
  //     LOAD_NEXT_FEED_PAGE_FAILURE,
  //   ] : [
  //     LOAD_FEED_REQUEST,
  //     LOAD_FEED_SUCCESS,
  //     LOAD_FEED_FAILURE,
  //   ];

  // return dispatch({
  //   [API_CALL]: {
  //     endpoint: '/cookbook/recipes',
  //     query: assign({ offset, limit: 15 }, requestQuery),
  //     types,
  //   },
  // });
// };