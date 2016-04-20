import React, { PropTypes, Component } from 'react';
import assign from 'lodash/assign';
import get from 'lodash/get';

import Dropzone from 'react-dropzone';

import './index.scss';

const WIDTH = 500;
const HEIGHT = 300; // TODO учитывать высоту элемента
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
    this.state = { imageUrl: undefined };
    this.openDropZone = this.openDropZone.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.backgroundImage !== this.props.backgroundImage) {
      this.setState({ imageUrl: undefined });
    }
  }

  shouldComponentUpdate(nextProps) {
    const { backgroundImage, uuid } = this.props;
    const should = nextProps.backgroundImage !== backgroundImage ||
      nextProps.uuid !== uuid;

    return should;
  }

  openDropZone() {
    this.refs.dropzone.open();
  }

  render() {
    const { uploadBackground, backgroundImage, uuid, changeBackgroundImage } = this.props;
    const { imageUrl } = this.state;
    const backgroundImageUrl = imageUrl || get(backgroundImage, 'url');

    const styles = assign(
      DEFAULT_STYLES,
      backgroundImageUrl && { backgroundImage: `url("${backgroundImageUrl}")` },
    );

    const onDrop = (files) => {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ imageUrl: e.target.result });
      };
      reader.readAsDataURL(file);
      uploadBackground(file, { uuid });
    };

    const handleChangeUrl = (event) => {
      if (event.target.value !== backgroundImageUrl) {
        changeBackgroundImage('uuid', null);
      }
      changeBackgroundImage('url', event.target.value);
    };

    // TODO I18n
    return (
      <div className="container row">
        <div className="col-md-6">
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
      </div>
      <div className="col-md-6">
        <input
          className="form-control"
          type="text"
          id="backgroundImageUrl"
          value={backgroundImageUrl}
          changeBackgroundImage={handleChangeUrl}
        />
      </div>
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
  }),
  uuid: PropTypes.string.isRequired,
  uploadBackground: PropTypes.func.isRequired,
  changeBackgroundImage: PropTypes.func.isRequired,
};

export default BackgroundForm;
