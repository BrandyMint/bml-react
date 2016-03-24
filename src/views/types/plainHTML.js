import { PropTypes } from 'react';
import blockPropType from './blockPropType';

const ContentPropTypes = {
  html: PropTypes.string.isRequired,
};

export default {
  propTypes: blockPropType(ContentPropTypes),
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Чистый HTML',
        key: 'html',
        type: 'text',
        isRequired: true,
      },
    ],
  },
};
