import concat from 'lodash/concat';

import FieldString from 'components/LBlockEditForm/ContentSchemaForm/FieldString';
import FieldNumber from 'components/LBlockEditForm/ContentSchemaForm/FieldNumber';
import FieldText from 'components/LBlockEditForm/ContentSchemaForm/FieldText';
import FieldImage from 'components/LBlockEditForm/ContentSchemaForm/FieldImage';
import FieldLocation from 'components/LBlockEditForm/ContentSchemaForm/FieldLocation';
import FieldDropdownList from 'components/LBlockEditForm/ContentSchemaForm/FieldDropdownList';

import FieldItems from 'components/LBlockEditForm/ContentSchemaForm/FieldItems';

export const FIELD_TYPE_STRING = 'string';
export const FIELD_TYPE_NUMBER = 'number';
export const FIELD_TYPE_URL = 'url';
export const FIELD_TYPE_HTML = 'html';
export const FIELD_TYPE_TEXT = 'text';
export const FIELD_TYPE_IMAGE = 'image';
export const FIELD_TYPE_LOCATION = 'location';
export const FIELD_TYPE_DROPWODN_LIST = 'dropdownList';

export const FIELD_TYPE_ITEMS = 'items';

export const FIELD_BASIC_TYPES = [
  FIELD_TYPE_STRING,
  FIELD_TYPE_NUMBER,
  FIELD_TYPE_URL,
  FIELD_TYPE_TEXT,
  FIELD_TYPE_IMAGE,
  FIELD_TYPE_LOCATION,
  FIELD_TYPE_DROPWODN_LIST,
];

export const FIELD_TYPES = concat(FIELD_BASIC_TYPES, [FIELD_TYPE_ITEMS]);

export const FIELD_COMPONENTS = {
  [FIELD_TYPE_STRING]: FieldString,
  [FIELD_TYPE_TEXT]: FieldText,
  [FIELD_TYPE_IMAGE]: FieldImage,
  [FIELD_TYPE_URL]: FieldString,
  [FIELD_TYPE_HTML]: FieldText,
  [FIELD_TYPE_NUMBER]: FieldNumber,
  [FIELD_TYPE_LOCATION]: FieldLocation,
  [FIELD_TYPE_DROPWODN_LIST]: FieldDropdownList,

  [FIELD_TYPE_ITEMS]: FieldItems,
};
