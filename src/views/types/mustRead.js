import { PropTypes } from 'react';
import blockPropType from './blockPropType';
import { buttonsPropTypes } from 'views/elements/Buttons';
import LinkSchemaFields from 'schemaTypes/LinkFields';

const ContentPropTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  items: buttonsPropTypes,
};

export default {
  propTypes: blockPropType(ContentPropTypes),
  contentSchema: {
    version: 1,
    backgroundImage: true,
    fields: [
      {
        title: 'Заголовок',
        key: 'header',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Подзаголовок',
        key: 'subheader',
        type: 'text',
        isRequired: false,
      },
      {
        title: 'Кнопки',
        key: 'items',
        type: 'items',
        isRequired: true,
        itemSchema: {
          limit: 5,
          fields: LinkSchemaFields,
        },
      },
    ],
  },
};
