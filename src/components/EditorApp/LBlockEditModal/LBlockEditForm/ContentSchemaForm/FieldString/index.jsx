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
      <FormGroup fieldKey={field.key} hint={field.hint} title={field.title}>
        <input
          className="form-control"
          type="text"
          ref="input"
          id={field.key}
          value={value}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </FormGroup>
    );
  }
}
