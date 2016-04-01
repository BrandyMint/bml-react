import React, { PropTypes } from 'react';
import classnames from 'classnames';

const getClasses = (hasError) => classnames({ 'form-group': true, 'has-error': hasError });

const FieldWrapper = ({ children, title, hasError, name }) => (
    <div className={getClasses(hasError)}>
      {title && (<label htmlFor={name}>{title}</label>)}
      {children}
    </div>
  );

FieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default FieldWrapper;
