import React, { PropTypes, Component } from 'react';
import assign from 'lodash/assign';
import get from 'lodash/get';

import Dropzone from 'react-dropzone';

import './index.scss';

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
  constructor() {
    super();
    this.openDropZone = this.openDropZone.bind(this);
  }

  openDropZone() {
    this.refs.dropzone.open();
  }

  render() {
    const { block, uploadBackground, onChange } = this.props;
    const { backgroundImage, uuid } = block;
    const backgroundImageUrl = get(backgroundImage, 'url');

    const styles = assign(
      DEFAULT_STYLES,
      backgroundImageUrl && { backgroundImage: `url("${backgroundImageUrl}")` },
    );

    const onDrop = (files) => uploadBackground(files[0], { uuid });

    const handleChangeUrl = (event) => {
      onChange('uuid', null);
      onChange('url', event.target.value);
    };

    return (
      <div className="TabPage">
        <Dropzone
          style={styles}
          multiple={false}
          accept="image/*"
          onDrop={onDrop}
          ref="dropzone"
          activeStyle={ACTIVE_STYLES}
        >
          <div className="Dropzone-title">
            Перетащите сюда фоновое изобрежение
            <br />
            или кликните чтобы загрузить
          </div>
        </Dropzone>
        <input
          className="form-control"
          type="text"
          id="backgroundImageUrl"
          value={backgroundImageUrl}
          onChange={handleChangeUrl}
        />
     </div>
    );
  }
}

BackgroundForm.propTypes = {
  block: PropTypes.shape({
    backgroundImage: PropTypes.shape({
      uuid: PropTypes.string,
      url: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    uuid: PropTypes.string.isRequired,
  }).isRequired,
  uploadBackground: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BackgroundForm;
