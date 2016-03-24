import { PropTypes } from 'react';
import blockPropType from './blockPropType';

const ListItemPropType = {
  title: PropTypes.string.isRequired,
};

const ContentPropTypes = {
  header: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape(ListItemPropType)
  ).isRequired,
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
        title: 'Список',
        key: 'items',
        type: 'items',
        isRequired: false,
        itemSchema: {
          limit: 30,
          fields: [
            {
              title: 'Название',
              key: 'title',
              type: 'string',
              isRequired: true,
            },
          ],
        },
      },
    ],
  },
};
