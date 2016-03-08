import { PropTypes } from 'react';
import blockPropType from './blockPropType';

const ContentPropTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default {
  propTypes: blockPropType(ContentPropTypes),
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Заголовок',
        key: 'header',
        type: 'text',
        isRequired: true,
      },
      {
        title: 'Текст',
        key: 'text',
        type: 'text',
        isRequired: true,
      },
    ],
  },
};
