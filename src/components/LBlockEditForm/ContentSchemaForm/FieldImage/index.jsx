import React, { Component, PropTypes } from 'react';

class FieldImage extends Component {
  render() {
    const { field, value } = this.props;

    const imageStyle = {
      maxWidth: '200px',
      maxHeight: '200px',
    };

    return (
      <fieldset className="form-group">
        <label htmlFor={field.key}>
          {field.title}
          </label>
          <div>
            <img src={value.url} style={imageStyle}/>
          </div>
      </fieldset>
    );
  }
}

FieldImage.propTypes = {
  field: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
  }),
  value: PropTypes.shape({
    uuid: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  onChange: PropTypes.func.isRequired,
};

export default FieldImage;
