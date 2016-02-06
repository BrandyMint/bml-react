import React, { Component, PropTypes } from 'react';

class FieldText extends Component {
  render() {
    const { field, value, onChange } = this.props;

    const handleChange = (event) => onChange(event.target.value);

    return (
      <fieldset className="form-group">
        <label htmlFor={field.key}>
          {field.title}
        </label>
        <textarea
          className="form-control"
          type="text"
          rows="5"
          styles={ { height: 'auto' } }
          id={field.key}
          value={value}
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

FieldText.propTypes = {
  field: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
  }),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FieldText;
