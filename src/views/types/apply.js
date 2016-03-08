import invariant from 'invariant';
import mapValues from 'lodash/mapValues';
import types from 'views/types';

const applyType = (component, type) => {
  invariant(component, 'Component is not defined');
  invariant(type, `View type is not defined (${component.name})`);
  /* eslint-disable no-param-reassign */
  component.propTypes = type.propTypes;
  component.typeName = type.typeName;
  component.contentSchema = type.contentSchema;
  /* eslint-enable */
  return component;
};

// TODO Тут можно валидировать схемы типов
//
export default mapValues(
  types,
  (type, typeName) =>
    (viewComponent) =>
      applyType(viewComponent, { ...type, typeName: type.typeName || typeName })
);
