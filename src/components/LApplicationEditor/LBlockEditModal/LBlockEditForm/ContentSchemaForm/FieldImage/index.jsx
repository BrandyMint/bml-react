import React, { Component, PropTypes } from 'react';
import FormGroup from '../FormGroup';

class FieldImage extends Component {
  render() {
    const { field, onChange, value } = this.props;

    const imageStyle = {
      maxWidth: '200px',
      maxHeight: '200px',
    };

    const handleChange = (event) => {
      onChange({ url: event.target.value});
    }

    return (
      <FormGroup fieldKey={field.key} title={field.title}>
        <div>
          <img src={value.url} style={imageStyle}/>
          <input
            className="form-control"
            type="text"
            id={field.key}
            value={value.url}
            onChange={handleChange}
          />
        </div>
      </FormGroup>
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
