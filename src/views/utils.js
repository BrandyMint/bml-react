import mapValues from 'lodash/mapValues';
import invariant from 'invariant';

/* eslint-disable no-param-reassign */

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
