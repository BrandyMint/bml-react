import { PropTypes } from 'react';
import InputTypes from 'constants/inputTypes';

const location = PropTypes.shape({
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
});

const inputType = PropTypes.oneOf(InputTypes);

const fieldValue = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  location,
]);

export default {
  location,
  fieldValue,
  inputType,
};
