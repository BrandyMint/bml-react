import React, { Component, PropTypes } from 'react';

import OnIcon from 'react-icons/lib/md/zoom-in';
import OffIcon from 'react-icons/lib/md/zoom-out';

import SuperBubble from 'components/ui-elements/SuperBubble';

class ScaleBubble extends Component {
  render() {
    const { zoom, changeZoom } = this.props;

    const onClick = (event) => {
      event.preventDefault();
      changeZoom(!zoom);
      return false;
    };

    const Icon = zoom ? OnIcon : OffIcon;

    return (<div>
      <a
        href="#"
        onClick={onClick}
        data-tip="Обзор всего сайта сразу"
        className="IconLink"
      >
        <SuperBubble active={zoom}>
          <Icon className="SuperBubble--icon" />
        </SuperBubble>
      </a>
    </div>
    );
  }
}

ScaleBubble.propTypes = {
  zoom: PropTypes.bool.isRequired,
  changeZoom: PropTypes.func.isRequired,
};

export default ScaleBubble;
