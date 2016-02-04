import React, { PropTypes } from 'react';
import ViewPropType from './viewPropType';
import ViewComponents from './views';

const BInlineFormType1 = ({ data, view }) => {
  const ViewComponent = ViewComponents[view];

  return (
    <div className="BInlineFormType1">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of BInlineFormType1 {view}</span>
      }
    </div>
  );
};

BInlineFormType1.contentSchema = {
  version: 1,
  backgroundImage: false,
  fields: [
    {
      title: 'Надпись на кнопке',
      key: 'submitTitle',
      type: 'string',
      isRequired: true,
    },
    {
      title: 'Поля',
      key: 'fields',
      type: 'items',
      isRequired: true,
      itemSchema: {
        limit: 3,
        fields: [
          {
            title: 'Название поля',
            key: 'title',
            type: 'string',
            isRequired: false,
          },
          {
            title: 'Placeholder',
            key: 'placeholder',
            type: 'string',
            isRequired: false,
          },
          {
            title: 'Ключ',
            key: 'key',
            type: 'string',
            isRequired: true,
          },
          {
            title: 'Тип',
            key: 'inputType',
            type: 'string',
            isRequired: true,
          },
        ],
      },
    },
  ],
};

BInlineFormType1.propTypes = {
  data: PropTypes.shape(ViewPropType).isRequired,
  view: PropTypes.string.isRequired,
};

export default BInlineFormType1;
