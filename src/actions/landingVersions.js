import { API_CALL } from 'middleware/API';

export const LANDING_VERSION_UPDATE_REQUEST = 'LANDING_VERSION_UPDATE_REQUEST';
export const LANDING_VERSION_UPDATE_SUCCESS = 'LANDING_VERSION_UPDATE_SUCCESS';
export const LANDING_VERSION_UPDATE_FAILURE = 'LANDING_VERSION_UPDATE_FAILURE';

export const LANDING_VERSION_LOAD_REQUEST = 'LANDING_VERSION_LOAD_REQUEST';
export const LANDING_VERSION_LOAD_SUCCESS = 'LANDING_VERSION_LOAD_SUCCESS';
export const LANDING_VERSION_LOAD_FAILURE = 'LANDING_VERSION_LOAD_FAILURE';

export const loadVersion = (uuid) => (dispatch) =>
  dispatch({
    [API_CALL]: {
      endpoint: `/landing_versions/${uuid}`,
      method: 'GET',
      types: [
        LANDING_VERSION_LOAD_REQUEST,
        LANDING_VERSION_LOAD_SUCCESS,
        LANDING_VERSION_LOAD_FAILURE,
      ],
    },
  });

export const saveChanges = () => (dispatch, getState) => {
  const {
    blocks,
    application: { landingVersionUuid: uuid },
  } = getState();

  return dispatch({
    [API_CALL]: {
      endpoint: `/landing_versions/${uuid}`,
      method: 'PUT',
      payload: { blocks },
      types: [
        LANDING_VERSION_UPDATE_REQUEST,
        LANDING_VERSION_UPDATE_SUCCESS,
        LANDING_VERSION_UPDATE_FAILURE,
      ],
    },
  });
};

export const saveImage = (image) => (dispatch) => {
  dispatch({
    [API_CALL]: {
      endpoint: '/images/',
      method: 'POST',
      attach: { file: image },
      types: [
        LANDING_VERSION_UPDATE_REQUEST,
        LANDING_VERSION_UPDATE_SUCCESS,
        LANDING_VERSION_UPDATE_FAILURE,
      ],
    },
  });
};
