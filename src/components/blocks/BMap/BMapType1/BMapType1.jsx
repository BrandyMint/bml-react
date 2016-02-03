import React, { PropTypes } from 'react';
import ViewPropType from './viewPropType';
import ViewComponents from './views';

const BMapType1 = ({ data, view }) => {
  const ViewComponent = ViewComponents[view];

  return (
    <div className="BMapType1">
      {ViewComponent
        ? <ViewComponent {...data} />
        : <span>Unknown view of BMapType1 {view}</span>
      }
    </div>
  );
};

BMapType1.contentSchema = {
  version: 1,
  backgroundImage: false,
  fields: [
    {
      title: 'Координаты карты',
      key: 'center',
      type: 'location',
      isRequired: true,
    },
    {
      title: 'Масштаб',
      key: 'zoom',
      type: 'number',
      isRequired: true,
    },
    {
      title: 'Точки',
      key: 'places',
      type: 'items',
      isRequired: false,
      itemSchema: {
        limit: 20,
        fields: [
          {
            title: 'Координаты',
            key: 'location',
            type: 'location',
            isRequired: true,
          },
          {
            title: 'Название',
            key: 'title',
            type: 'string',
            isRequired: false,
          },
        ],
      },
    },
  ],
};

BMapType1.propTypes = {
  data: PropTypes.shape(ViewPropType).isRequired,
  view: PropTypes.string.isRequired,
};

export default BMapType1;
