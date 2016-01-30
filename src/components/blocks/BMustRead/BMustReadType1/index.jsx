import React, { PropTypes } from 'react';

import { MUST_READ_TYPE1_VIEW1 } from 'constants/blockViewsKeys';

import BMustReadType1View1 from './BMustReadType1View1';

const viewComponents = {
  [MUST_READ_TYPE1_VIEW1]: BMustReadType1View1,
};

const BMustReadType1 = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="BMustReadType1">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of BMustReadType1 {view}</span>
      }
    </div>
  );
};

BMustReadType1.contentSchema = {
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
        fields: [
          {
            title: 'Название',
            key: 'title',
            type: 'string',
            isRequired: true,
          },
          {
            title: 'Ссылка',
            key: 'url',
            type: 'url',
            isRequired: true,
          },
          {
            title: 'Иконка',
            key: 'icon',
            type: 'string',
            isRequired: false,
          },
        ],
      },
    },
  ],
};

BMustReadType1.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    items: PropTypes.array.isRequired,
  }),
  view: PropTypes.string,
};

export default BMustReadType1;
