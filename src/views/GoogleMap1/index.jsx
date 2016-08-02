import React, { Component } from 'react';
import applyType from 'views/types/apply';
import ViewContainer from 'views/elements/ViewContainer';

import GoogleMap from 'google-map-react';

import map from 'lodash/map';
import filter from 'lodash/filter';

import Place from './place.jsx';
import { K_SIZE } from './styles.js';
import './index.css';

const GOOGLE_MAP_API_KEY = 'AIzaSyAabTjF0oFgnXU2vgncF9dSNPzwIjBaCPs';

const DEFAULT_PLACE_TEXT = '·';

const createMapOptions = () => (
  {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
  }
);

const validPlace = ({ location }) => (location && location.lng && location.lat);

class GoogleMap1 extends Component {
  static defaultProps = {
    center: {
      lat: 59.938043,
      lng: 30.337157,
    },
    height: 400,
    zoom: 9,
    places: [
      {
        location: {
          lat: 59.724465,
          lng: 30.080121,
        },
        title: 'A',
      },
    ],
  };

  render() {
    /* eslint-disable react/prop-types */
    const { block } = this.props;
    const { center, zoom, places } = block.content;
    /* eslint-enable */

    const selectedPlaces = filter(places, validPlace);
    return (
      <ViewContainer block={ block }>
        <GoogleMap
          bootstrapURLKeys={{key: GOOGLE_MAP_API_KEY}}
          center={[center.lat, center.lng]}
          options={createMapOptions}
          zoom={zoom}
          // instead of css hover (which sometimes is bad for map markers)
          // (bad means inability to hover on markers placed under other markers)
          // you can use internal GoogleMap component hover algorithm
          // hover algorithm explained at x_distance_hover example
          hoverDistance={K_SIZE / 2}
        >
        {map(selectedPlaces, (place, index) =>
          <Place
            key={index}
            lat={place.location.lat}
            lng={place.location.lng}
            text={place.title || DEFAULT_PLACE_TEXT}
          />
         )}
        </GoogleMap>
      </ViewContainer>
    );
  }
}

export default applyType.mapType(GoogleMap1);
