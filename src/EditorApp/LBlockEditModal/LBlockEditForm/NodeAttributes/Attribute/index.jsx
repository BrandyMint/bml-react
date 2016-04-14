import React, { PropTypes } from 'react';

import TextField from 'material-ui/lib/text-field';

const Attribute = ({
  placeholder,
  title,
  value,

  onChange,
}) => {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <TextField
      hintText={placeholder}
      fullWidth
      floatingLabelText={title}
      value={value}
      onChange={handleChange}
    />
  );
};

Attribute.propTypes = {
  attribute: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  description: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Attribute;
