import React, { PropTypes, Component } from 'react';
import map from 'lodash/map';
import assign from 'lodash/assign';

import './index.css';

const VIDEO_TYPES = [
  'video/mp4',
  'video/webm',
  'video/ogg',
];

const containerStyles = {
  position: 'absolute',
  zIndex: -1,
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

const videoStyles = {
  margin: 'auto',
  position: 'absolute',
  zIndex: -1,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  visibility: 'visible',
  height: 'auto',
};

const videos = [
  { src: 'assets/video/video.mp4', type: 'video/mp4' },
  { src: 'assets/video/video.webm', type: 'video/webm' },
  { src: 'assets/video/video.ogv', type: 'video/ogg' },
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
    videos,
    overlay: true,
  };

  render() {
    const { videos, overlay } = this.props;
    const vs = assign(videoStyles, { width: document.width });
    return (<div>
          <div style={containerStyles}>
          <video autoPlay loop muted style={vs}>
            {map(videos, (video, index) =>
              <source src={video.src} key={index} type={video.type} />
            )}
          </video>
        </div>
        {overlay && <div key={2} className="BackgroundVideo-overlay" />}
        </div>
      );
  }
}

export default BackgroundVideo;
