// Типы используемые в редакторе

import concat from 'lodash/concat';

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
