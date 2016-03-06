import React, { Component, PropTypes } from 'react';
import size from 'lodash/size';
import BackgroundVideo from 'views/shared/BackgroundVideo';

class BlockViewBackground extends Component {

  render() {
    const { backgroundVideos } = this.props;

    // DEMO
    //const backgroundVideos = [
      //{ src: '/assets/video/video.mp4', type: 'video/mp4' },
      //{ src: '/assets/video/video.webm', type: 'video/webm' },
      //{ src: '/assets/video/video.ogv', type: 'video/ogg' },
    //];
    if (size(backgroundVideos) > 0 ) {
      return (<BackgroundVideo videos={backgroundVideos}/>);
    }

    return false;
  }
}

BlockViewBackground.propTypes = {
  backgroundVideos: PropTypes.array.isRequired,
};

export default BlockViewBackground;
