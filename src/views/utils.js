import mapValues from 'lodash/mapValues';
import invariant from 'invariant';

/* eslint-disable no-param-reassign */

export const applyType = (component, type) => {
  component.propTypes = type.propTypes;
  component.typeName = type.typeName;
  component.contentSchema = type.contentSchema;
  return component;
};

const registerView = (types, viewComponent, viewName) => {
  viewComponent.viewName = viewName;

  const typeName = viewComponent.typeName;
  invariant(typeName, `View ${viewName} has no typeName`);

  if (!types[typeName]) {
    types[typeName] = [];
  }
  types[typeName].push(viewComponent);
  return viewComponent;
};

export const prepareViews = (views, types) =>
  mapValues(
    views,
    (component, name) => registerView(types, component, name)
  );

/* eslint-enable */
