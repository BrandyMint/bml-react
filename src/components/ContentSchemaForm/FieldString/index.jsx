import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';

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

  shouldComponentUpdate(nextProps) {
    const should = this.props.field !== nextProps.field;

    return should;
  }
  render() {
    const { field, value, onChange } = this.props;

    const handleChange = (event) => onChange(event.target.value);

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
