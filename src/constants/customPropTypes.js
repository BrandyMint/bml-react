import { PropTypes } from 'react';

const location = PropTypes.shape({
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
});

export default {
  location,
};
