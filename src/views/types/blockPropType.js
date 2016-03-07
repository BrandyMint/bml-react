import { PropTypes } from 'react';
import formContentType from './formContent';

export default (contentType) => (
  {
    block: PropTypes.shape(
      {
        content: PropTypes.shape(contentType).isRequired,
        form: formContentType,
        uuid: PropTypes.string.isRequired,
      }
    ).isRequired,
  },
);
