import { PropTypes } from 'react';
import blockPropType from './blockPropType';

const ContentPropTypes = {
  text: PropTypes.string.isRequired,
};

export default {
  // Фактически это полное содержание block-а
  propTypes: blockPropType(ContentPropTypes),
  contentSchema: {
    version: 1,
    backgroundImage: false,
    form: 'required',
    fields: [
      {
        title: 'Текст',
        key: 'text',
        type: 'string',
        isRequired: true,
      },
    ],
  },
};
