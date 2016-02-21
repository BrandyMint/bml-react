import { PropTypes } from 'react';
import InputTypes from 'constants/inputTypes';

const location = PropTypes.shape({
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
});

const inputType = PropTypes.oneOf(InputTypes);

const link = PropTypes.shape({
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  target: PropTypes.string,
});

const fieldValue = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  location,
]);

const formField = PropTypes.shape({
  title: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(InputTypes).isRequired,
});

// см constants/formSchema
const formContent = PropTypes.shape({
  submitTitle: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(formField).isRequired,
});

export default {
  location,
  fieldValue,
  inputType,
  link,
  formContent,
};
