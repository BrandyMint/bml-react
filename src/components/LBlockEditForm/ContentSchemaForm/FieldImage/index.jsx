import React, { Component, PropTypes } from 'react';

class FieldImage extends Component {
  render() {
    const { title, fieldKey, value } = this.props;

    const imageStyle = {
      maxWidth: '200px',
      maxHeight: '200px',
    };

    return (
      <fieldset className="form-group">
        <label htmlFor={fieldKey}>
          {title}
          </label>
          <div>
            <img src={value.url} style={imageStyle}/>
          </div>
      </fieldset>
    );
  }
}

FieldImage.propTypes = {
  title: PropTypes.string.isRequired,
  fieldKey: PropTypes.string.isRequired,
  value: PropTypes.shape({
    uuid: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  isRequired: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldImage;
