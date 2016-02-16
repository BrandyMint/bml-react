import React, { Component, PropTypes } from 'react';
import get from 'lodash/get';
import BackgroundVideo from 'views/shared/BackgroundVideo';

class BlockViewBackground extends Component {

  render() {
    const { block } = this.props;

    const backgroundVideos = get(block, 'backgroundVideos') || [];
    const backgroundImageUrl = get(block, 'backgroundImage.url');

    if (backgroundImageUrl || backgroundVideos.length === 0) {
      return false;
    }

    return (<BackgroundVideo videos={backgroundVideos}/>);
  }
}

BlockViewBackground.propTypes = {
  block: PropTypes.object.isRequired,
};

export default BlockViewBackground;
