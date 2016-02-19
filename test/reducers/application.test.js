import expect from 'expect';

import application from 'reducers/application';

import {
  LANDING_VERSION_UPDATE_REQUEST,
  LANDING_VERSION_UPDATE_FAILURE,
} from 'actions/landingVersions';

describe('Reducers: application', () => {
  it('should return the initial state', () => {
    expect(application(undefined, {})).toEqual({
      isEditMode: true,
      isSaving: false,
      hasUnsavedChanges: false,
      currentBlockUuid: null,

      api_key: '5d8aa2f240c5d05e992e0e84f58ce965',
      landing_version_uuid: '10ba27fa-0628-44fd-af24-8430eea47ca7',

      exitUrl: '/_a/landings/1/analytics',
    });
  });

  it('should handle LANDING_VERSION_UPDATE_REQUEST', () => {
    const action = {
      type: LANDING_VERSION_UPDATE_REQUEST,
    };

    expect(application(undefined, action)).toEqual({
      isEditMode: true,
      isSaving: true,
      hasUnsavedChanges: false,
      currentBlockUuid: null,

      api_key: '5d8aa2f240c5d05e992e0e84f58ce965',
      landing_version_uuid: '10ba27fa-0628-44fd-af24-8430eea47ca7',

      exitUrl: '/_a/landings/1/analytics',
    });

    const state = {
      isSaving: false,
    };

    expect(application(state, action)).toEqual({
      isSaving: true,
    });
  });

  it('should handle LANDING_VERSION_UPDATE_FAILURE', () => {
    const action = {
      type: LANDING_VERSION_UPDATE_FAILURE,
    };

    const state = {
      isSaving: true,
      hasUnsavedChanges: true,
    };

    expect(application(state, action)).toEqual({
      isSaving: false,
      hasUnsavedChanges: true,
    });
  });
});
