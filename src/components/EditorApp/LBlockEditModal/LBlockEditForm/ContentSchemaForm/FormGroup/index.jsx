import React, { PropTypes } from 'react';

const FormGroup = ({ title, fieldKey, children }) =>
(
  <fieldset className="form-group">
    <label htmlFor={fieldKey}>
      {title}
      </label>
      {children}
  </fieldset>
);

FormGroup.propTypes = {
  title: PropTypes.string.isRequired,
  fieldKey: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};


export default FormGroup;
