import { PropTypes } from 'react';
import blockPropType from './blockPropType';
import { buttonsPropTypes } from 'views/elements/Buttons';
import LinkItemSchema from 'schemaTypes/LinkItemSchema';

const ContentPropTypes = {
  text: PropTypes.string,
  items: buttonsPropTypes,
};

export default {
  // Фактически это полное содержание block-а
  propTypes: blockPropType(ContentPropTypes),
  contentSchema: {
    version: 1,
    backgroundImage: true,
    fields: [
      {
        title: 'Строка',
        key: 'text',
        type: 'string',
        isRequired: false,
      },
      {
        title: 'Ссылки в меню',
        key: 'items',
        type: 'items',
        isRequired: true,
        itemSchema: LinkItemSchema,
      },
    ],
  },
};
