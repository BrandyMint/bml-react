import expect from 'expect';

import application from 'reducers/application';

import initialState from 'constants/initialState';

import {
  LANDING_VARIANT_UPDATE_REQUEST,
  LANDING_VARIANT_UPDATE_FAILURE,
} from 'actions/variants';

describe('Reducers: application', () => {
  it('should return the initial state', () => {
    expect(application(undefined, {})).toEqual(initialState.application);
  });

  it('should handle LANDING_VARIANT_UPDATE_REQUEST', () => {
    const action = {
      type: LANDING_VARIANT_UPDATE_REQUEST,
    };

    expect(application(undefined, action)).toEqual(
      { ...initialState.application, isSaving: true }
    );

    const state = {
      isSaving: false,
    };

    expect(application(state, action)).toEqual({
      isSaving: true,
    });
  });

  it('should handle LANDING_VARIANT_UPDATE_FAILURE', () => {
    const action = {
      type: LANDING_VARIANT_UPDATE_FAILURE,
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
