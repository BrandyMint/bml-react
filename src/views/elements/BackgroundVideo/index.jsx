import React, { PropTypes, Component } from 'react';
import map from 'lodash/map';

import './index.css';

const VIDEO_TYPES = [
  'video/mp4',
  'video/webm',
  'video/ogg',
];

const poster = undefined;

const containerStyles = {
  position: 'absolute',
  zIndex: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: 'hidden',
  WebkitBackgroundSize: 'cover',
  backgroundSize: 'cover',
  backgroundImage: 'none',
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat no-repeat',
};


// https://revolution.themepunch.com/best-wordpress-slider-plugin-2016/
// object-fit: cover; background-size: cover; width: 191.67109693425482%;
// height: 100%; visibility: inherit; opacity: 1; position: absolute;
// top: 0px; left: -45.83554846712741%; display: block;
//
const videoStyle = {
  margin: 'auto',
  position: 'absolute',
  zIndex: -1,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  visibility: 'visible',
  height: 'auto',
  minWidth: '100%',
};

const SAMPLE_VIDEOS = [
  { src: '/assets/video/video.mp4', type: 'video/mp4' },
  { src: '/assets/video/video.webm', type: 'video/webm' },
  { src: '/assets/video/video.ogv', type: 'video/ogg' },
];

class BackgroundVideo extends Component {
  static propTypes = {
    overlay: PropTypes.bool.isRequired,
    videos: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        type: PropTypes.oneOf(VIDEO_TYPES).isRequired,
      })
    ),
  };
  static defaultProps = {
    videos: SAMPLE_VIDEOS,
    overlay: true,
  };

  render() {
    const { videos, overlay } = this.props;
    // pageload="auto" из тега video убрал из-за warning-ов в react
    return (
      <div className="BML-BackgroundVideo">
        <div style={containerStyles}>
          <video autoPlay loop muted poster={poster} style={videoStyle}
            className="BML-BackgroundVideo-video"
          >
            {map(videos, (video, index) =>
              <source src={video.src} key={index} type={video.type} />
            )}
          </video>
        </div>
        {overlay && <div key={2} className="BML-BackgroundVideo-overlay" />}
      </div>
    );
  }
}

export default BackgroundVideo;

// https://github.com/BinaryThumb/react-background-video/blob/master/src/index.js
// https://gist.github.com/mikechau/5547c67d0dc2957e907d
