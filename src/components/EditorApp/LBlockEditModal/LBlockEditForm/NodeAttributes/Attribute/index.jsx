import React, { PropTypes } from 'react';

const Attribute = ({
  attribute,
  description,
  placeholder,
  title,
  value,

  onChange,
}) => {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <fieldset className="form-group">
      <label htmlFor={attribute}>
        {title}
      </label>
      <input
        className="form-control"
        type="text"
        id={attribute}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {description &&
        <small className="text-muted">{description}</small>
      }
    </fieldset>
  );
};

Attribute.propTypes = {
  attribue: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  description: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Attribute;
