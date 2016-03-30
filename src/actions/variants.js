/* global __FAKE_API__ */

import { API_CALL } from 'middleware/API';
import BLANK_SITE from 'constants/blankSite';
export const BLANK_LANDING_VARIANT_UUID = 'blank';

import {
  FULL_VIEWS_EXAMPLES_UUID,
  FULL_VIEWS_EXAMPLES_SECTIONS,
} from 'constants/fullViewsExamples';

export const LANDING_VARIANT_UPDATE_REQUEST = 'LANDING_VARIANT_UPDATE_REQUEST';
export const LANDING_VARIANT_UPDATE_SUCCESS = 'LANDING_VARIANT_UPDATE_SUCCESS';
export const LANDING_VARIANT_UPDATE_FAILURE = 'LANDING_VARIANT_UPDATE_FAILURE';

export const LANDING_VARIANT_LOAD_REQUEST = 'LANDING_VARIANT_LOAD_REQUEST';
export const LANDING_VARIANT_LOAD_SUCCESS = 'LANDING_VARIANT_LOAD_SUCCESS';
export const LANDING_VARIANT_LOAD_FAILURE = 'LANDING_VARIANT_LOAD_FAILURE';

export const BACKGROUND_UPLOAD_REQUEST = 'BACKGROUND_UPLOAD_REQUEST';
export const BACKGROUND_UPLOAD_SUCCESS = 'BACKGROUND_UPLOAD_SUCCESS';
export const BACKGROUND_UPLOAD_FAILURE = 'BACKGROUND_UPLOAD_FAILURE';

export const loadVariant = (uuid) => (dispatch) => {
  if (__FAKE_API__ || uuid === BLANK_LANDING_VARIANT_UUID) {
    return dispatch({
      type: LANDING_VARIANT_LOAD_SUCCESS,
      payload: { ...BLANK_SITE, uuid: BLANK_LANDING_VARIANT_UUID },
    });
  }

  if (uuid === FULL_VIEWS_EXAMPLES_UUID) {
    return dispatch({
      type: LANDING_VARIANT_LOAD_SUCCESS,
      payload: {
        ...BLANK_SITE,
        uuid: FULL_VIEWS_EXAMPLES_UUID,
        sections: FULL_VIEWS_EXAMPLES_SECTIONS,
      },
    });
  }

  return dispatch({
    [API_CALL]: {
      endpoint: `/variants/${uuid}`,
      method: 'GET',
      types: [
        LANDING_VARIANT_LOAD_REQUEST,
        LANDING_VARIANT_LOAD_SUCCESS,
        LANDING_VARIANT_LOAD_FAILURE,
      ],
    },
  });
};

export const saveChanges = () => (dispatch, getState) => {
  const {
    blocks,
    site,
    application: { variantUuid: uuid },
  } = getState();

  if (uuid === BLANK_LANDING_VARIANT_UUID || !uuid) {
    return dispatch({
      [API_CALL]: {
        endpoint: '/variants/',
        method: 'POST',
        payload: { ...site, blocks },
        types: [
          LANDING_VARIANT_UPDATE_REQUEST,
          LANDING_VARIANT_UPDATE_SUCCESS,
          LANDING_VARIANT_UPDATE_FAILURE,
        ],
      },
    });
  }

  return dispatch({
    [API_CALL]: {
      endpoint: `/variants/${uuid}`,
      method: 'PUT',
      payload: { ...site, blocks },
      types: [
        LANDING_VARIANT_UPDATE_REQUEST,
        LANDING_VARIANT_UPDATE_SUCCESS,
        LANDING_VARIANT_UPDATE_FAILURE,
      ],
    },
  });
};

export const uploadBackground = (image, crossPayload) => (dispatch) => {
  dispatch({
    [API_CALL]: {
      crossPayload,
      endpoint: '/images/',
      method: 'POST',
      attach: { file: image },
      types: [
        BACKGROUND_UPLOAD_REQUEST,
        BACKGROUND_UPLOAD_SUCCESS,
        BACKGROUND_UPLOAD_FAILURE,
      ],
    },
  });
};
