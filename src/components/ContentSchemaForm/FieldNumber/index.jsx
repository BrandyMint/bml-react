import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';

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
    // const { key, min, max, step } = field;

    const handleChange = (event) => {
      onChange(parseInt(event.target.value, 10));
    };

    return (
      <TextField
        hintText={field.placeholder}
        fullWidth
        floatingLabelText={field.title}
        id={field.key}
        defaultValue={value}
        onBlur={handleChange}
      />
    );
  }
}
