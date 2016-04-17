import { PropTypes } from 'react';
import blockPropType from './blockPropType';
import { buttonsPropTypes } from 'views/elements/Buttons';
import LinkItemSchema from 'schemaTypes/LinkItemSchema';

const ContentPropTypes = {
  header: PropTypes.string.isRequired,
  image: PropTypes.object,
  leadText: PropTypes.string,
  links: buttonsPropTypes,
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
        title: 'Описание',
        key: 'leadText',
        type: 'text',
        isRequired: true,
      },
      {
        title: 'Картинка',
        key: 'image',
        type: 'image',
        isRequired: true,
      },
      {
        title: 'Кнопки',
        key: 'links',
        type: 'items',
        isRequired: false,
        itemSchema: LinkItemSchema,
      },
    ],
  },
};
