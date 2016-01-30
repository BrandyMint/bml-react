import React, { PropTypes } from 'react';

import { FOOTER_TYPE1_VIEW1 } from 'constants/blockViewsKeys';

import BFooterType1View1 from './BFooterType1View1';

const viewComponents = {
  [FOOTER_TYPE1_VIEW1]: BFooterType1View1,
};

const BFooterType1 = ({ data, view }) => {
  const ViewComponent = viewComponents[view];

  return (
    <div className="BFooterType1">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of BFooterType1 {view}</span>
      }
    </div>
  );
};

BFooterType1.contentSchema = {
  version: 1,
  backgroundImage: true,
  fields: [
    {
      title: 'Копирайт',
      key: 'copyrightText',
      type: 'string',
      isRequired: false,
    },
    {
      title: 'Ссылки в меню',
      key: 'items',
      type: 'items',
      isRequired: true,
      itemSchema: {
        limit: 12,
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
        ],
      },
    },
  ],
};

BFooterType1.propTypes = {
  data: PropTypes.shape({
    copyrightText: PropTypes.string,
    items: PropTypes.array.isRequired,
  }),
  view: PropTypes.string,
};

export default BFooterType1;
