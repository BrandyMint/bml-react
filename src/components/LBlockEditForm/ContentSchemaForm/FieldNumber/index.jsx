import React, { Component, PropTypes } from 'react';
import FormGroup from '../FormGroup';

export default class FieldNumber extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    fieldKey: PropTypes.string.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    isRequired: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { title, fieldKey, value, min, max, step, onChange } = this.props;

    const handleChange = (event) => {
      onChange(parseInt(event.target.value, 10));
    };

    return (
      <FormGroup fieldKey={fieldKey} title={title}>
        <input
          className="form-control"
          type="number"
          id={fieldKey}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />
      </FormGroup>
    );
  }
}
