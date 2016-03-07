import { PropTypes } from 'react';
import { propTypes as formContentType } from 'views/elements/ContentForm';

export default (contentType) => (
  {
    block: PropTypes.shape(
      {
        content: PropTypes.shape(contentType).isRequired,
        form: PropTypes.shape(formContentType), // TODO заглярывать в тип и если там form=required, то отмечать
        uuid: PropTypes.string.isRequired,
      }
    ).isRequired,
  },
);
