import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { Types } from 'types';
import { applyType } from 'views/utils';
import ViewContainer from 'components/shared/ViewContainer';

import map from 'lodash/map';
import Place from './place.jsx';

import { K_SIZE } from './styles.js';
import './index.css';

const DEFAULT_PLACE_TEXT = '·';

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

    const createMapOptions = () => (
      {
        panControl: false,
        mapTypeControl: false,
        scrollwheel: false,
      }
    );

    return (
      <ViewContainer block={ block }>
        <GoogleMap
          // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
          center={[center.lat, center.lng]}
          options={createMapOptions}
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
      </ViewContainer>
    );
  }
}

export default applyType(GoogleMap1, Types.googleMap);
