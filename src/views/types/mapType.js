import { PropTypes } from 'react';
import blockPropType from './blockPropType';

export const MapLocationType = PropTypes.shape({
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
});

const PlaceType = PropTypes.shape({
  location: MapLocationType.isRequired,
  title: PropTypes.string,
});

const ContentPropTypes = {
  center: MapLocationType.isRequired,
  zoom: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PlaceType).isRequired,
};

export default {
  propTypes: blockPropType(ContentPropTypes),

  contentSchema: {
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
  },
};
