import React, { Component, PropTypes } from 'react';

class FieldString extends Component {
  render() {
    const { title, fieldKey, value, onChange } = this.props;

    const handleChange = (event) => onChange(event.target.value);

    return (
      <fieldset className="form-group">
        <label htmlFor={fieldKey}>
          {title}
        </label>
        <input
          className="form-control"
          type="text"
          id={fieldKey}
          value={value}
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

FieldString.propTypes = {
  title: PropTypes.string.isRequired,
  fieldKey: PropTypes.string.isRequired,
  value: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldString;
