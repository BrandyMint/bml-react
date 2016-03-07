import * as F from 'constants/fieldTypes';

import FieldString from './FieldString';
import FieldNumber from './FieldNumber';
import FieldText from './FieldText';
import FieldImage from './FieldImage';
import FieldLocation from './FieldLocation';
import FieldDropdownList from './FieldDropdownList';

import FieldItems from './FieldItems';

export const FIELD_COMPONENTS = {
  [F.FIELD_TYPE_STRING]: FieldString,
  [F.FIELD_TYPE_TEXT]: FieldText,
  [F.FIELD_TYPE_IMAGE]: FieldImage,
  [F.FIELD_TYPE_URL]: FieldString,
  [F.FIELD_TYPE_HTML]: FieldText,
  [F.FIELD_TYPE_NUMBER]: FieldNumber,
  [F.FIELD_TYPE_LOCATION]: FieldLocation,
  [F.FIELD_TYPE_DROPWODN_LIST]: FieldDropdownList,

  [F.FIELD_TYPE_ITEMS]: FieldItems,
};
