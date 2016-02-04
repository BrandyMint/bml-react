import React, { Component, PropTypes } from 'react';
import assign from 'lodash/assign';

import Dropzone from 'react-dropzone';
import 'components/ui-elements/Dropzone/Dropzone.css';

const WIDTH = 500;
const HEIGHT = 400;
const DEFAULT_STYLES = {
  backgroundSize: 'cover',
  backgroundColor: '#ffffff',
  backgroundRepeat: 'no-repeat',
  width: WIDTH,
  height: HEIGHT,
  borderWidth: '2px',
  borderColor: 'black',
  borderStyle: 'dashed',
  borderRadius: '4px',
  margin: '30px',
  padding: '30px',
  transition: 'all 0.5s',
  textAglign: 'center',
  verticalAlign: 'middle',
};

const ACTIVE_STYLES = {
  backgroundImage: 'none',
  backgroundColor: '#999',
};

class BackgroundForm extends Component {
  render() {
    const { backgroundImage, onSaveBackground } = this.props;

    const backgroundImageUrl = backgroundImage.url;
    const styles = assign(
      DEFAULT_STYLES,
      backgroundImageUrl && { backgroundImage: `url("${backgroundImageUrl}")` },
    );

    const onDrop = (files) => onSaveBackground(files[0]);

    return (
      <div className="TabPage">
        <Dropzone style={styles} multiple={false} onDrop={onDrop} activeStyle={ACTIVE_STYLES}>
          <div className="Dropzone-title">Перетащите сюда фоновое изобрежение</div>
        </Dropzone>
      </div>
    );
  }
}

BackgroundForm.propTypes = {
  backgroundImage: PropTypes.shape({
    uuid: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  onSaveBackground: PropTypes.func.isRequired,
};

export default BackgroundForm;
