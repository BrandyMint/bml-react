import React, { PropTypes } from 'react';

import { CTA_TYPE1_VIEW1 } from 'constants/blockViewsKeys';

import BCTAType1View1 from './BCTAType1View1';

const viewComponents = {
  [CTA_TYPE1_VIEW1]: BCTAType1View1,
};

const BCTAType1 = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="BCTAType1">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of BCTAType1 {view}</span>
      }
    </div>
  );
};

BCTAType1.contentSchema = {
  version: 1,
  backgroundImage: true,
  fields: [
    {
      title: 'Текст',
      key: 'text',
      type: 'string',
      isRequired: true,
    },
    {
      title: 'Кнопки',
      key: 'items',
      type: 'items',
      isRequired: true,
      itemSchema: {
        limit: 3,
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
            isRequired: false,
          },
        ],
      },
    },
  ],
};

BCTAType1.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
  }),
  view: PropTypes.string,
};

export default BCTAType1;
