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

const FeatureType = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
}

const feature = PropTypes.shape(FeatureType);

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
  method: PropTypes.string,
  url: PropTypes.string,
  fields: PropTypes.arrayOf(formField).isRequired,
});

export default {
  FeatureType,
  feature,
  LinkType,
  location,
  fieldValue,
  inputType,
  link,
  formContent,
};
