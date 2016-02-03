import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import map from 'lodash/map';

import Place from './place.jsx';

import { K_SIZE } from './styles.js';

import ViewPropType from '../viewPropType';

const DEFAULT_PLACE_TEXT = '·';

class BMapType1View1 extends Component {
  static propTypes = ViewPropType;

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
    const { center, zoom, places } = this.props;

    return (
      <GoogleMap
        // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
        center={[center.lat, center.lng]}
        zoom={zoom}
        // instead of css hover (which sometimes is bad for map markers)
        // (bad means inability to hover on markers placed under other markers)
        // you can use internal GoogleMap component hover algorithm
        // hover algorithm explained at x_distance_hover example
        hoverDistance={K_SIZE / 2}
      >
        {map(places, (place, index) =>
         <Place
           key={index}
           lat={place.location.lat}
           lng={place.location.lng}
           text={place.title || DEFAULT_PLACE_TEXT}
         />
        )}
      </GoogleMap>
    );
  }
}

export default BMapType1View1;
