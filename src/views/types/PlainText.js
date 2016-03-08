import { PropTypes } from 'react';
import blockPropType from './blockPropType';
import { applyType } from 'views/utils';

const ContentPropTypes = {
  // Фактически это полное содержание block-а
  text: PropTypes.string.isRequired,
};

export default {
  propTypes: blockPropType(ContentPropTypes),
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Текст',
        key: 'text',
        type: 'text',
        isRequired: true,
      },
    ],
  },
};
