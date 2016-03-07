import mapValues from 'lodash/mapValues';
import { applyType } from 'views/utils';
import types from 'views/types';

// TODO Тут можно валидировать схемы типов
//
export default mapValues(
  types,
  (type, typeName) => (viewComponent) => applyType(viewComponent, { ...type, typeName: type.typeName || typeName })
);

