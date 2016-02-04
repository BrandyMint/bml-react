import { PropTypes } from 'react';

const LocationType = PropTypes.shape({
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
});

const FieldValueType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  LocationType,
]);

export default {
  location: LocationType,
  fieldValue: FieldValueType,
};
