import { createSelector, createStructuredSelector } from 'reselect';

export const applicationSelector = ({ application }) => application;

export const editableEnableSelector = createSelector(
  applicationSelector,
  ({ zoom, isEditor }) => (!zoom && isEditor),
);
