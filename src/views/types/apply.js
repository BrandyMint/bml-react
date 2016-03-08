import invariant from 'invariant';
import mapValues from 'lodash/mapValues';
import types from 'views/types';

// TODO move to views/types/apply
const applyType = (component, type) => {
  invariant(component, 'Component is not defined');
  invariant(type, `View type is not defined (${component.name})`);
  component.propTypes = type.propTypes;
  component.typeName = type.typeName;
  component.contentSchema = type.contentSchema;
  return component;
};

// TODO Тут можно валидировать схемы типов
//
export default mapValues(
  types,
  (type, typeName) => (viewComponent) => applyType(viewComponent, { ...type, typeName: type.typeName || typeName })
);

