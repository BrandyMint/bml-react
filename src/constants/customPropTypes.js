import { PropTypes } from 'react';
import InputTypes from 'constants/inputTypes';

const location = PropTypes.shape({
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
});

const inputType = PropTypes.oneOf(InputTypes);

const LinkType = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  target: PropTypes.string,
};

const link = PropTypes.shape(LinkType);

const fieldValue = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  location,
]);

export default {
  LinkType,
  location,
  fieldValue,
  inputType,
  link,
};
