import { PropTypes } from 'react';
import blockPropType from './blockPropType';
import Link from 'views/elements/Link';
import { buttonsPropTypes } from 'views/elements/Buttons';
import LinkSchemaFields from 'schemaTypes/LinkFields';

const ContentPropTypes = {
  logoLink: PropTypes.shape(Link.propTypes),
  items: buttonsPropTypes,
};

export default {
  propTypes: blockPropType(ContentPropTypes),
  disableForm: true,
  contentSchema: {
    version: 1,
    backgroundImage: false,
    fields: [
      {
        title: 'Бренд',
        key: 'logoLink.text',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Бренд (ссылка)',
        key: 'logoLink.href',
        type: 'string',
        isRequired: true,
      },
      {
        title: 'Меню',
        key: 'items',
        type: 'items',
        isRequired: false,
        itemSchema: {
          limit: 7,
          fields: LinkSchemaFields,
        },
      },
    ],
  },
};
