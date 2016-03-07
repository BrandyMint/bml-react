import React, { PropTypes } from 'react';
import INPUT_TYPES from 'constants/inputTypes'

// TODO перенести formName в context?
const formName = 'form';

const Field = ({ name, title, placeholder, inputType }) => (
  <div className="form-group">
    { title && (<label htmlFor={name}>{title}</label>)}
    <input
      type={inputType}
      className="form-control"
      name={name}
      id={`${formName}-${name}`}
      placeholder={placeholder}
    />
  </div>
);

Field.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(INPUT_TYPES).isRequired,
};

export default Field;
