import React, { PropTypes } from 'react';

const FormGroup = ({ title, hint, fieldKey, children }) =>
(
  <fieldset className="form-group">
    <label htmlFor={fieldKey}>{title}</label>
    {children}
    {hint && <p className="help-block" dangerouslySetInnerHTML={{ __html: hint }} />}
  </fieldset>
);

FormGroup.propTypes = {
  title: PropTypes.string.isRequired,
  hint: PropTypes.string,
  fieldKey: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};


export default FormGroup;
