import { PropTypes } from 'react';
import InputTypes from 'constants/inputTypes';

const formField = PropTypes.shape({
  title: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(InputTypes).isRequired,
});

// см constants/formSchema
export default PropTypes.shape({
  submitTitle: PropTypes.string.isRequired,
  method: PropTypes.string,
  url: PropTypes.string,
  fields: PropTypes.arrayOf(formField).isRequired,
});
