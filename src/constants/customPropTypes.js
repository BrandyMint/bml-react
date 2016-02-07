import { PropTypes } from 'react';

import InputTypes from 'constants/inputTypes';

const LocationType = PropTypes.shape({
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
});

const InputType = PropTypes.oneOf(InputTypes);

const LinkType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  target: PropTypes.string,
});

const FieldValueType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  LocationType,
]);

export default {
  location: LocationType,
  fieldValue: FieldValueType,
  inputType: InputType,
  link: LinkType,
};
