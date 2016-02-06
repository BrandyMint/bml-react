import React, { Component, PropTypes } from 'react';
import FormGroup from '../FormGroup';

export default class FieldNumber extends Component {
  static propTypes = {
    field: PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      isRequired: PropTypes.bool.isRequired,
      min: PropTypes.number,
      max: PropTypes.number,
      step: PropTypes.number,
    }),
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { field, value, onChange } = this.props;
    const { title, key, min, max, step } = field;

    const handleChange = (event) => {
      onChange(parseInt(event.target.value, 10));
    };

    return (
      <FormGroup fieldKey={key} title={title}>
        <input
          className="form-control"
          type="number"
          id={key}
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
