import FieldString from 'components/ContentSchemaForm/FieldString'
import FieldText from 'components/ContentSchemaForm/FieldText'
import FieldImage from 'components/ContentSchemaForm/FieldImage'

export const FIELD_TYPE_STRING = 'string';
export const FIELD_TYPE_HTML = 'html';
export const FIELD_TYPE_TEXT = 'text';
export const FIELD_TYPE_IMAGE = 'image';

export const FIELD_TYPES = [FIELD_TYPE_STRING, FIELD_TYPE_TEXT, FIELD_TYPE_IMAGE];
export const FIELD_COMPONENTS = {
  [FIELD_TYPE_STRING]: FieldString,
  [FIELD_TYPE_TEXT]: FieldText,
  [FIELD_TYPE_IMAGE]: FieldImage
}
