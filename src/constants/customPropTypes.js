import { PropTypes } from 'react';

import InputTypes from 'constants/inputTypes';

const LocationType = PropTypes.shape({
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
});

const InputType = PropTypes.oneOf(InputTypes);

const FieldValueType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  LocationType,
]);

export default {
  location: LocationType,
  fieldValue: FieldValueType,
  inputType: InputType,
};
