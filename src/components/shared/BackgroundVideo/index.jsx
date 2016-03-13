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

const VIDEO_STYLES = {
  margin: 'auto',
  position: 'absolute',
  zIndex: -1,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  visibility: 'visible',
  height: 'auto',
  width: 'auto',
};

const videos = [
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
    videos,
    overlay: true,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      style: undefined,
    };
  }

  componentDidMount() {
    this.onMount();
  }

  onMount() {
    this.setState({
      style: assign(VIDEO_STYLES, { width: document.width }),
    });
  }

  render() {
    const { videos, overlay } = this.props;
    const { style } = this.state;
    return (
      <div className="BML-BackgroundVideo">
        <div style={containerStyles}>
          <video autoPlay loop muted style={style}>
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
