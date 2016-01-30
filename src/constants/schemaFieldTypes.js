import FieldString from 'components/ContentSchemaForm/FieldString';
import FieldText from 'components/ContentSchemaForm/FieldText';
import FieldImage from 'components/ContentSchemaForm/FieldImage';
import FieldItems from 'components/ContentSchemaForm/FieldItems';

export const FIELD_TYPE_STRING = 'string';
export const FIELD_TYPE_URL = 'url';
export const FIELD_TYPE_HTML = 'html';
export const FIELD_TYPE_TEXT = 'text';
export const FIELD_TYPE_IMAGE = 'image';
export const FIELD_TYPE_ITEMS = 'items';

export const FIELD_BASIC_TYPES = [
  FIELD_TYPE_STRING,
  FIELD_TYPE_URL,
  FIELD_TYPE_TEXT,
  FIELD_TYPE_IMAGE,
];

export const FIELD_TYPES = [
  FIELD_TYPE_STRING,
  FIELD_TYPE_TEXT,
  FIELD_TYPE_IMAGE,
  FIELD_TYPE_ITEMS,
];

export const FIELD_COMPONENTS = {
  [FIELD_TYPE_STRING]: FieldString,
  [FIELD_TYPE_TEXT]: FieldText,
  [FIELD_TYPE_IMAGE]: FieldImage,
  [FIELD_TYPE_URL]: FieldString,
  [FIELD_TYPE_HTML]: FieldText,
  [FIELD_TYPE_ITEMS]: FieldItems,
};
