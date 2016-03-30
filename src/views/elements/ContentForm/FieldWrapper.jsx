import React, { PropTypes } from 'react';

const FieldWrapper = ({ children, title, name }) => (
      <div className="form-group">
        {title && (<label htmlFor={name}>{title}</label>)}
        {children}
      </div>
    );

FieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FieldWrapper;
