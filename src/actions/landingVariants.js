import { API_CALL } from 'middleware/API';

export const LANDING_VARIANT_UPDATE_REQUEST = 'LANDING_VARIANT_UPDATE_REQUEST';
export const LANDING_VARIANT_UPDATE_SUCCESS = 'LANDING_VARIANT_UPDATE_SUCCESS';
export const LANDING_VARIANT_UPDATE_FAILURE = 'LANDING_VARIANT_UPDATE_FAILURE';

export const LANDING_VARIANT_LOAD_REQUEST = 'LANDING_VARIANT_LOAD_REQUEST';
export const LANDING_VARIANT_LOAD_SUCCESS = 'LANDING_VARIANT_LOAD_SUCCESS';
export const LANDING_VARIANT_LOAD_FAILURE = 'LANDING_VARIANT_LOAD_FAILURE';

export const loadVariant = (uuid) => (dispatch) =>
  dispatch({
    [API_CALL]: {
      endpoint: `/landing_variants/${uuid}`,
      method: 'GET',
      types: [
        LANDING_VARIANT_LOAD_REQUEST,
        LANDING_VARIANT_LOAD_SUCCESS,
        LANDING_VARIANT_LOAD_FAILURE,
      ],
    },
  });

export const saveChanges = () => (dispatch, getState) => {
  const {
    blocks,
    application: { landingVariantUuid: uuid },
  } = getState();

  return dispatch({
    [API_CALL]: {
      endpoint: `/landing_variants/${uuid}`,
      method: 'PUT',
      payload: { blocks },
      types: [
        LANDING_VARIANT_UPDATE_REQUEST,
        LANDING_VARIANT_UPDATE_SUCCESS,
        LANDING_VARIANT_UPDATE_FAILURE,
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
        LANDING_VARIANT_UPDATE_REQUEST,
        LANDING_VARIANT_UPDATE_SUCCESS,
        LANDING_VARIANT_UPDATE_FAILURE,
      ],
    },
  });
};
