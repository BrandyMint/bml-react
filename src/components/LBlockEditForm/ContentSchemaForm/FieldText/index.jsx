import React, { Component, PropTypes } from 'react';

class FieldText extends Component {
  render() {
    const { title, fieldKey, value, onChange } = this.props;

    const handleChange = (event) => onChange(event.target.value);

    return (
      <fieldset className="form-group">
        <label htmlFor={fieldKey}>
          {title}
        </label>
        <textarea
          className="form-control"
          type="text"
          rows="5"
          styles={ { height: 'auto' } }
          id={fieldKey}
          value={value}
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

FieldText.propTypes = {
  title: PropTypes.string.isRequired,
  fieldKey: PropTypes.string.isRequired,
  value: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldText;
