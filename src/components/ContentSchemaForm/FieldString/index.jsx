import React, { Component, PropTypes } from 'react';

class FieldString extends Component {
  render() {
    const { title, fieldKey, value, onChange } = this.props;

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
          onChange={onChange}
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
