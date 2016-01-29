import React, { Component, PropTypes } from 'react';
import { FIELD_TYPES } from 'constants/schemaFieldTypes';

class FieldText extends Component {
  render() {
    const { title, fieldKey, value, isRequired, onChange } = this.props;

    return (
      <fieldset className="form-group">
        <label htmlFor={fieldKey}>
          {title}
        </label>
        <textarea
          className="form-control"
          type="text"
          id={fieldKey}
          value={value}
          onChange={onChange}
          />
      </fieldset>
    );
  };
}

FieldText.propTypes = {
  title: PropTypes.string.isRequired,
  fieldKey: PropTypes.string.isRequired,
  value: PropTypes.string,
  isRequired: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldText;

