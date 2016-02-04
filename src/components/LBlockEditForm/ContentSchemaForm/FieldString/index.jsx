import React, { Component, PropTypes } from 'react';
import FormGroup from '../FormGroup';

export default class FieldString extends Component {
  static propTypes = {
    field: PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      isRequired: PropTypes.bool.isRequired,
    }),
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { field, value, onChange } = this.props;

    const handleChange = (event) => onChange(event.target.value);

    return (
      <FormGroup fieldKey={field.key} title={field.title}>
        <input
          className="form-control"
          type="text"
          id={field.key}
          value={value}
          onChange={handleChange}
        />
      </FormGroup>
    );
  }
}
