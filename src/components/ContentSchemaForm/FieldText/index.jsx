import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';

class FieldText extends Component {
  shouldComponentUpdate(nextProps) {
    const should = this.props.field !== nextProps.field;

    return should;
  }
  render() {
    const { field, value, onChange } = this.props;

    const handleChange = (event) => onChange(event.target.value);

    return (
      <TextField
        fullWidth
        hintText={field.placeholder}
        floatingLabelText={field.title}
        id={field.key}
        defaultValue={value}
        multiLine
        rows={4}
        onBlur={handleChange}
      />
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
